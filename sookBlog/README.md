# 😈 Sook Blog with Gatsby

```
Created blog based on
[ {💎 : react} , { 💠 : Typescript} , {🌪 : tailwind css} ]
```

### Install

```js

/* step 1_install gatsby cli */
npm install -g gatsby-cli

/* step 2_Create gatsby project name on terminal */
gatsby new projectName

//! if you install gatsby without cli , use below code
npx gatsby-cli new projectName

/* step 3_Install typescript (optional) */
yarn add typescript --dev
yarn add gatsby-plugin-typescript

//! if you apply typescript on your project, please follow below steps

/* step 4_Create tsconfig.json */
yarn tsc --init

/* step 5_Modify gatsby-config.js */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-typescript`,	// -> that has been added!
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}

/* step 6_Modify gatsby-node.js */

const path = require('path');

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        //! if you wan to import file like
        // import Test from "@src/components/Test";
        '@src': path.resolve(__dirname, 'src'),
      },
    },
  });
};

```

<h6> And now you can open your project typing only "yarn develop" 🙌🏼 </h6>
