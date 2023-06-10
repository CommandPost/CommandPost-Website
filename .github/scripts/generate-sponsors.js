const axios = require('axios');
const fs = require('fs');
const path = require('path');

const organizationLogin = "CommandPost";
const userLogins = ["latenitefilms", "randomeizer"];
const githubToken = process.env.GITHUB_TOKEN;

const outputFile = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/github-sponsors.md');

const query = `
query {
  organization(login:"${organizationLogin}") {
    ... on Sponsorable {
      sponsorshipsAsMaintainer(first: 100) {
        nodes {
          sponsorEntity {
            ... on User {
              login
              avatarUrl
              url
            }
            ... on Organization {
              login
              avatarUrl
              url
            }
          }
        }
      }
    }
  }
  ${userLogins
    .map(
      (login) => `
  ${login}: user(login: "${login}") {
    sponsorshipsAsMaintainer(first: 100) {
      nodes {
        sponsorEntity {
          ... on User {
            login
            avatarUrl
            url
          }
          ... on Organization {
            login
            avatarUrl
            url
          }
        }
      }
    }
  }
`
    )
    .join("")}
}
`;

axios({
  url: 'https://api.github.com/graphql',
  method: 'post',
  headers: {
    Authorization: `bearer ${githubToken}`
  },
  data: {
    query: query,
  }
})
  .then(result => {
    if (!result.data.data.organization) {
      console.error('Unexpected response:', result.data);
      process.exit(1);
    }

    let sponsorsMd = '';
    const organizationSponsors = result.data.data.organization.sponsorshipsAsMaintainer.nodes;
    const userSponsors = userLogins.reduce((acc, login) => {
      if (result.data.data[login] && result.data.data[login].sponsorshipsAsMaintainer) {
        return acc.concat(result.data.data[login].sponsorshipsAsMaintainer.nodes);
      }
      return acc;
    }, []);

    const allSponsors = [...organizationSponsors, ...userSponsors];

    const uniqueSponsors = Array.from(new Set(allSponsors.map(sponsor => sponsor.sponsorEntity.login)));

    const sortedSponsors = uniqueSponsors.sort((a, b) => a.localeCompare(b));

    for (const sponsor of sortedSponsors) {
      sponsorsMd += `<a href="${sponsor.sponsorEntity.url}" target="_blank"><img src="${sponsor.sponsorEntity.avatarUrl}&s=64" alt="${sponsor.sponsorEntity.login}" width="64" height="64"></a> [${sponsor.sponsorEntity.login}](${sponsor.sponsorEntity.url})\n\n`;
    }

    fs.writeFileSync(outputFile, sponsorsMd);
  })
  .catch(err => {
    console.error('An error occurred:', err);
  });