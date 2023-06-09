const axios = require('axios');
const fs = require('fs');
const path = require('path');

const repoOwner = process.env.REPO_OWNER;
const repoName = process.env.REPO_NAME;
const githubToken = process.env.GITHUB_TOKEN;

const query = `
query {
  repository(owner: "${repoOwner}", name: "${repoName}") {
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
`;

axios({
  url: 'https://api.github.com/graphql',
  method: 'post',
  headers: {
    'Authorization': `Bearer ${githubToken}`,
  },
  data: {
    query: query,
  }
}).then(result => {
  let sponsorsMd = '';
  const sponsors = result.data.data.repository.sponsorshipsAsMaintainer.nodes;

  for (const sponsor of sponsors) {
    const entity = sponsor.sponsorEntity;
    sponsorsMd += `![${entity.login}](${entity.avatarUrl}&s=64) [${entity.login}](${entity.url})\n\n`;
  }

  fs.writeFileSync(path.join(__dirname, '..', '..', 'docs', '_includes', 'github-sponsors.md'), sponsorsMd);
});