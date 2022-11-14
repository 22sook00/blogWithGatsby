module.exports = {
  siteMetadata: {
    title: `프론트엔드 벨라의 개발블로그`,
    description: `주니어 프론트엔드, 벨라의 고군분투 개발 블로그 입니다.`,
    author: `sookyoung lee`,
    siteUrl: 'https://sook-dev.vercel.app' // 배포 후 변경 예정
  },

  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    //'gatsby-plugin-sitemap',
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://sook-dev.vercel.app',
        sitemap: 'https://sook-dev.vercel.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://sook-dev.vercel.app',
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
        // defaults: {
        //   formats: [`auto`, `webp`],
        //   placeholder: `dominantColor`,
        //   quality: 50,
        //   breakpoints: [750, 1080, 1366, 1920],
        //   backgroundColor: `transparent`,
        //   tracedSVGOptions: {},
        //   blurredOptions: {},
        //   jpgOptions: {},
        //   pngOptions: {},
        //   webpOptions: {},
        //   avifOptions: {},
        // },
      },
    },
  ],
};

//'gatsby-plugin-postcss',