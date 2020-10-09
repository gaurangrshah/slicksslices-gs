| Service  |                                                  |            |
| -------- | ------------------------------------------------ | ---------- |
| Netlify  | https://affectionate-wright-0cbdf0.netlify.app/  | Production |
| Ethereal | https://ethereal.email/messages                  | Email      |
| Sanity   | https://slicksslicesgs.sanity.studio/desk        | Backend    |
| Sanity   | https://manage.sanity.io/projects/7okf7mas/usage | Dashboard  |
| Github   | https://github.com/gaurangrshah/slicksslices-gs  | Repository |

Example Env:

```env
SANITY_TOKEN=<SANITY_API_TOKEN>
GATSBY_PAGE_SIZE=4
GATSBY_HOT_LOADER=fast-refresh
MAIL_HOST=smtp.ethereal.email
MAIL_USER=<providedemail@ethereal.email>
MAIL_PASS=<PASSWORD>
GATSBY_SERVERLESS_BASE=http://localhost:8888/.netlify/functions
GATSBY_GRAPHQL_ENDPOINT=https://<PROJECT_ID>.api.sanity.io/v1/graphql/production/default

```

for more see "./gatsby/\_reference/01.setup.md
