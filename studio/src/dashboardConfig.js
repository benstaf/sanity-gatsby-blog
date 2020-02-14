export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e46575eb84e80e71ee4d636',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-k3wxyh3v',
                  apiId: '1cfbd48a-c6b5-4890-ae19-375d463bb4ee'
                },
                {
                  buildHookId: '5e46575e140b4980fddaac25',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4xdx7x8m',
                  apiId: '1a1d632d-11fe-4d8b-8849-d37d32d7c793'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mostafachatillon/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4xdx7x8m.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
