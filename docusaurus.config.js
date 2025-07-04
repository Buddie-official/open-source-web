// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BUDDIE",
  // tagline: "An open-source project for the future of voice interaction — fully open hardware design, firmware code, and mobile app integration",
  customFields: {
    homepageContent: {
      en: {
        title: 'BUDDIE',
        sections: [
          { title: 'Open Hardware Design', description: 'We provide full access to Buddie’s PCB...' },
          { title: 'Customizable Firmware', description: 'Built on ESP32-S3, the Buddie firmware supports...' },
          { title: 'Full Mobile Integration', description: 'We open-sourced the Buddie mobile app...' },
        ],
      },
      zh: {
        title: 'BUDDIE',
        sections: [
          { title: '开放的硬件设计', description: '我们公开了 Buddie 耳机的 PCB、原理图与 BOM 表...' },
          { title: '可自定义的固件系统', description: '基于 ESP32-S3，Buddie 固件支持蓝牙连接、语音处理与 LCD 显示...' },
          { title: '完整的移动端配套', description: '我们开源了 Buddie App 的核心逻辑，涵盖设备配对、语音控制与用户设置...' },
        ],
      },
    },
  },


  favicon: "img/fig_logo.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://github.com/Buddie-official",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/open-source-web/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Buddie-official", // Usually your GitHub org/user name.
  projectName: "open-source-web", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    localeConfigs: {
      zh: {
        label: "中文",
        direction: "ltr", // 方向
      },
      en: {
        label: "English",
        direction: "ltr", // 方向
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: "default", // 用于区分多实例插件
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful optioMasonUninstall emmylua_lsns to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        pages: {}, // ✅ 显式启用 pages
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        // indexPages: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        // docsRouteBasePath: ['/docs'], // 如果你改了路由可以配置这个
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/buddie-social-card.jpg",
      colorMode: {
        defaultMode: 'dark',     // 👈 默认主题为 dark
        disableSwitch: false,    // 是否禁用切换按钮（true 则用户无法切换）
        respectPrefersColorScheme: false, // 是否尊重用户系统偏好（这里设为 false 才始终用 dark）
      },

      navbar: {
        title: "Buddie",
        logo: {
          alt: "Buddie Logo",
          src: "img/fig_logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "QuickStartSidebar",
            position: "left",
            label: "Quick Start",
          },
          {
            type: "docSidebar",
            sidebarId: "TechnicalDocsSidebar",
            position: "left",
            label: "Technical Docs",
          },
          {
            type: "docSidebar",
            sidebarId: "ChangelogBlogSidebar",
            position: "left",
            label: "Changelog & Blog",
          },
          {
            type: "docSidebar",
            sidebarId: "AboutUsSidebar",
            position: "left",
            label: "About Us",
          },
          {
            href: "https://github.com/Buddie-official/open-source-web",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "X",
                href: "https://x.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
