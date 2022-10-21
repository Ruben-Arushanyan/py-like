// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const packageJson = require('./package.json');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const additonalInfo = {
  generator: 'Docusaurus',
  lastBuildTime: `${new Date().toLocaleString('ru-RU', {timeZone: 'Asia/Yerevan'})} (Asia/Yerevan)`,
  websiteVersion: packageJson.version,
  boilerplateVersion: packageJson._boilerplateVersion,
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Py-like',
  tagline: 'All the Beauty of Python in JavaScript.',
  url: 'https://ruben-arushanyan.github.io',
  baseUrl: '/py-like/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/favicon.ico',
  organizationName: 'Ruben-Arushanyan', // Usually your GitHub org/user name.
  projectName: 'py-like', // Usually your repo name.

  customFields: {
    description: 'Py-like is a JavaScript library that allows coding in JavaScript just like in Python. In JavaScript, Py-like provides a Python-like interface for working with data types, structures, and functions.',
    additonalInfo,
  },

  plugins: [
    [
      'pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        // swRegister: false,
        swCustom: require.resolve('./src/sw.js'),
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'images/300x300.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'images/300x300.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'images/300x300.png',
            color: 'rgb(62, 204, 94)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'images/300x300.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Ruben-Arushanyan/py-like/edit/master/website/',
	  showLastUpdateAuthor: true,
        },
        blog: false,
        // blog: {
        //   blogTitle: 'Blog',
        //   blogDescription: 'Py-like Blog',
        //   blogSidebarTitle: 'All posts',
        //   blogSidebarCount: 'ALL',
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/Ruben-Arushanyan/py-like/edit/master/website/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'images/1200x630.png', // https://docusaurus.io/docs/api/themes/configuration#meta-image
      metadata: [
        {
          name: 'keywords',
          content: 'py-like, python-like, javascript, python, python-in-javascript, js-python-methods, js-python-api, js-python-interface, js-python-tuple, js-python-set',
        },
      ],
      navbar: {
        title: 'Py-like',
        logo: {
          alt: 'Logo',
          src: 'images/icons/icon-72x72.png',
        },
        items: [
          // left
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Docs',
          },
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left',
          // },

          // right
          {
            href: 'https://github.com/Ruben-Arushanyan/py-like',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/introduction',
              },
            ],
          },
          {
            title: 'Channels',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/RubenArushanyan',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/ruben-arushanyan-42bba9235/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/rubenarushanyan24',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/rubenarushanyan24/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/Ruben-Arushanyan/py-like',
              },
              {
                label: 'npm',
                href: 'https://www.npmjs.com/package/py-like',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ruben Arushanyan`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
