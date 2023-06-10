const axios = require('axios');
const fs = require('fs');
const path = require('path');

const organizationLogin = "CommandPost";
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
}).then(result => {

  console.log(result.data);

  if (!result.data.data.organization) {
    console.error('Unexpected response:', result.data);
    process.exit(1);
  }

  let sponsorsMd = '';
  const sponsors = result.data.data.organization.sponsorshipsAsMaintainer.nodes;

  console.log(sponsors);

  for (const sponsor of sponsors) {
    const entity = sponsor.sponsorEntity;
    sponsorsMd += `<a href="${entity.url}" target="_blank"><img src="${entity.avatarUrl}&s=64" alt="${entity.login}" width="64" height="64"></a> [${entity.login}](${entity.url})\n\n`;
  }

  fs.writeFileSync(outputFile, sponsorsMd);
}).catch(err => {
  console.error('An error occurred:', err);
});
