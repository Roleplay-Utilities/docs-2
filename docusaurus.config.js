module.exports = {
  title: 'Mega Utilities Public Wiki',
  tagline: 'PublicWiki',
  url: 'https://megautilities-publicwiki.vercel.app/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'MegaUtilities', // Usually your GitHub org/user name.
  projectName: 'Public Wiki', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Mega Utilities Public WIki',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
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
              label: 'Guide',
              to: 'docs/Guide',
            },
            {
              label: 'Article Example',
              to: 'docs/ArticleExample',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Wiki',
              href: 'https://megautilitieswiki.herokuapp.com/en/home',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/J9N6evPF8Y',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/MegaUtilities',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Roleplay-Utilities',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mega Utilities Public Wiki`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
