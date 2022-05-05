# 😈 Sook Blog with Gatsby

```
Created blog based on
[ {💎 : react} , { 💠 : Typescript} , {🌪 : tailwind css} ]
```

### Basic Install

```js

/* step 1_install gatsby cli */
npm install -g gatsby-cli

/* step 2_Create gatsby project name on terminal */
gatsby new projectName

//! if you install gatsby without cli , use below code
npx gatsby-cli new projectName
```

### Typescript Install ( optional )

```js
/* step 3_Install typescript  */
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

### Tailwindcss Install ( optional )

```js
/* step 7_Install both tailwind and postcss and it makes tailwind.config.js & postcss.config.js automatically */
npm install -D tailwindcss postcss autoprefixer gatsby-plugin-postcss

npx tailwindcss init -p

/* step 8_Apply postcss on gatsby-plugin */
module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    // ...
  ],
}

/* step 9_Apply routes on tailwind.config.js */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

/* step 10_Create global.css and put below code in */
route : './src/styles/global.css'

@tailwind base;
@tailwind components;
@tailwind utilities;

/* step 11_Apply global css which has put tailwind codes in on gatsby-browser.js */
import './src/styles/global.css'
```

<h6> And now you can open your project typing only "gatsby develop" 🙌🏼 </h6>
