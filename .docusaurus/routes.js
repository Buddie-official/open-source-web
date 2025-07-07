import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/open-source-web/zh/blog',
    component: ComponentCreator('/open-source-web/zh/blog', 'f58'),
    exact: true
  },
  {
    path: '/open-source-web/zh/blog/archive',
    component: ComponentCreator('/open-source-web/zh/blog/archive', 'bf0'),
    exact: true
  },
  {
    path: '/open-source-web/zh/blog/authors',
    component: ComponentCreator('/open-source-web/zh/blog/authors', '443'),
    exact: true
  },
  {
    path: '/open-source-web/zh/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/open-source-web/zh/blog/authors/all-sebastien-lorber-articles', '51a'),
    exact: true
  },
  {
    path: '/open-source-web/zh/blog/authors/yangshun',
    component: ComponentCreator('/open-source-web/zh/blog/authors/yangshun', 'b42'),
    exact: true
  },
  {
    path: '/open-source-web/zh/blog/first-blog-post',
    component: ComponentCreator('/open-source-web/zh/blog/first-blog-post', 'd9f'),
    exact: true
  },
  {
    path: '/open-source-web/zh/blog/long-blog-post',
    component: ComponentCreator('/open-source-web/zh/blog/long-blog-post', 'f37'),
    exact: true
  },
  {
    path: '/open-source-web/zh/blog/mdx-blog-post',
    component: ComponentCreator('/open-source-web/zh/blog/mdx-blog-post', '2ef'),
    exact: true
  },
  {
    path: '/open-source-web/zh/blog/tags',
    component: ComponentCreator('/open-source-web/zh/blog/tags', '70b'),
    exact: true
  },
  {
    path: '/open-source-web/zh/blog/tags/docusaurus',
    component: ComponentCreator('/open-source-web/zh/blog/tags/docusaurus', '0f5'),
    exact: true
  },
  {
    path: '/open-source-web/zh/blog/tags/facebook',
    component: ComponentCreator('/open-source-web/zh/blog/tags/facebook', 'f70'),
    exact: true
  },
  {
    path: '/open-source-web/zh/blog/tags/hello',
    component: ComponentCreator('/open-source-web/zh/blog/tags/hello', '71a'),
    exact: true
  },
  {
    path: '/open-source-web/zh/blog/tags/hola',
    component: ComponentCreator('/open-source-web/zh/blog/tags/hola', '51d'),
    exact: true
  },
  {
    path: '/open-source-web/zh/blog/welcome',
    component: ComponentCreator('/open-source-web/zh/blog/welcome', '28b'),
    exact: true
  },
  {
    path: '/open-source-web/zh/markdown-page/',
    component: ComponentCreator('/open-source-web/zh/markdown-page/', 'ac3'),
    exact: true
  },
  {
    path: '/open-source-web/zh/search',
    component: ComponentCreator('/open-source-web/zh/search', '9ee'),
    exact: true
  },
  {
    path: '/open-source-web/zh/test',
    component: ComponentCreator('/open-source-web/zh/test', '1a5'),
    exact: true
  },
  {
    path: '/open-source-web/zh/docs',
    component: ComponentCreator('/open-source-web/zh/docs', '6ab'),
    routes: [
      {
        path: '/open-source-web/zh/docs',
        component: ComponentCreator('/open-source-web/zh/docs', '106'),
        routes: [
          {
            path: '/open-source-web/zh/docs/tags',
            component: ComponentCreator('/open-source-web/zh/docs/tags', '8f4'),
            exact: true
          },
          {
            path: '/open-source-web/zh/docs/tags/docusaurus',
            component: ComponentCreator('/open-source-web/zh/docs/tags/docusaurus', 'be6'),
            exact: true
          },
          {
            path: '/open-source-web/zh/docs',
            component: ComponentCreator('/open-source-web/zh/docs', '9c5'),
            routes: [
              {
                path: '/open-source-web/zh/docs/AboutUs/',
                component: ComponentCreator('/open-source-web/zh/docs/AboutUs/', 'f22'),
                exact: true,
                sidebar: "AboutUsSidebar"
              },
              {
                path: '/open-source-web/zh/docs/Changelog_Blog/',
                component: ComponentCreator('/open-source-web/zh/docs/Changelog_Blog/', '937'),
                exact: true,
                sidebar: "ChangelogBlogSidebar"
              },
              {
                path: '/open-source-web/zh/docs/Changelog_Blog/Blog/',
                component: ComponentCreator('/open-source-web/zh/docs/Changelog_Blog/Blog/', '759'),
                exact: true,
                sidebar: "ChangelogBlogSidebar"
              },
              {
                path: '/open-source-web/zh/docs/Changelog_Blog/Changelog/',
                component: ComponentCreator('/open-source-web/zh/docs/Changelog_Blog/Changelog/', '015'),
                exact: true,
                sidebar: "ChangelogBlogSidebar"
              },
              {
                path: '/open-source-web/zh/docs/greeting',
                component: ComponentCreator('/open-source-web/zh/docs/greeting', '64c'),
                exact: true
              },
              {
                path: '/open-source-web/zh/docs/Home/home_1',
                component: ComponentCreator('/open-source-web/zh/docs/Home/home_1', '5df'),
                exact: true,
                sidebar: "HomeSidebar"
              },
              {
                path: '/open-source-web/zh/docs/Home/home_2',
                component: ComponentCreator('/open-source-web/zh/docs/Home/home_2', 'cc7'),
                exact: true,
                sidebar: "HomeSidebar"
              },
              {
                path: '/open-source-web/zh/docs/intro',
                component: ComponentCreator('/open-source-web/zh/docs/intro', '471'),
                exact: true
              },
              {
                path: '/open-source-web/zh/docs/QuickStart/',
                component: ComponentCreator('/open-source-web/zh/docs/QuickStart/', 'a33'),
                exact: true,
                sidebar: "QuickStartSidebar"
              },
              {
                path: '/open-source-web/zh/docs/TechnicalDocs/',
                component: ComponentCreator('/open-source-web/zh/docs/TechnicalDocs/', '9f9'),
                exact: true,
                sidebar: "TechnicalDocsSidebar"
              },
              {
                path: '/open-source-web/zh/docs/TechnicalDocs/APP/',
                component: ComponentCreator('/open-source-web/zh/docs/TechnicalDocs/APP/', 'b6c'),
                exact: true,
                sidebar: "TechnicalDocsSidebar"
              },
              {
                path: '/open-source-web/zh/docs/TechnicalDocs/FirmWare/',
                component: ComponentCreator('/open-source-web/zh/docs/TechnicalDocs/FirmWare/', '553'),
                exact: true,
                sidebar: "TechnicalDocsSidebar"
              },
              {
                path: '/open-source-web/zh/docs/TechnicalDocs/HardWare/',
                component: ComponentCreator('/open-source-web/zh/docs/TechnicalDocs/HardWare/', '319'),
                exact: true,
                sidebar: "TechnicalDocsSidebar"
              },
              {
                path: '/open-source-web/zh/docs/TechnicalDocs/HardWare/nihao',
                component: ComponentCreator('/open-source-web/zh/docs/TechnicalDocs/HardWare/nihao', '539'),
                exact: true,
                sidebar: "TechnicalDocsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/open-source-web/zh/',
    component: ComponentCreator('/open-source-web/zh/', '24e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
