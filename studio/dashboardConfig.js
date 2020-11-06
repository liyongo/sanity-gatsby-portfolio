export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa57cf25924bc00ada5fab9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-u77soya9',
                  apiId: '48a40204-5fc3-4e38-ae1f-be78aa529814'
                },
                {
                  buildHookId: '5fa57cf27dfdf101421bc602',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hv9ytafe',
                  apiId: 'b400b9de-4d76-4744-9033-0254afe90318'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/liyongo/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hv9ytafe.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
