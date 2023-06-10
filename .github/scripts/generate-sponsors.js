const axios = require('axios');
const fs = require('fs');
const path = require('path');

const organizationLogin = "CommandPost";

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
  data: {
    query: query,
  }
}).then(result => {
  if (!result.data.data.organization) {
    console.error('Unexpected response:', result.data);
    process.exit(1);
  }

  let sponsorsMd = '';
  const sponsors = result.data.data.organization.sponsorshipsAsMaintainer.nodes;

  for (const sponsor of sponsors) {
    const entity = sponsor.sponsorEntity;
    sponsorsMd += `![${entity.login}](${entity.avatarUrl}&s=64) [${entity.login}](${entity.url})\n\n`;
  }

  fs.writeFileSync(path.join(__dirname, '..', '..', 'docs', '_includes', 'github-sponsors.md'), sponsorsMd);
}).catch(err => {
  console.error('An error occurred:', err);
});