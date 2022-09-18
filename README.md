# 😈 Sook Blog with Gatsby

#### <span>Created blog based on [ {💎 : react} , { 💠 : Typescript} , {🌪 : tailwind css} ]</span>

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

/* step 8_Apply postcss on gatsby-config */
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

<hr />

### Directory

#### contents

블로그 포스트 관련 파일들을 저장하기 위한 디렉토리.

#### src

##### - components

##### - pages

페이지의 역할을 하는 컴포넌트를 저장하기 위한 디렉토리.
기본적으로 브라우저에서 pages 디렉토리에 있는 파일의 이름을 통해 페이지에 접근할 수 있기 때문에 페이지의 역할이 아닌 컴포넌트들은 해당 디렉토리에 저장하지 않는다.
또한, 페이지의 템플릿 파일에서만 Query 정의가 가능하다. 일반적인 컴포넌트에서는 변수로서 정의가 불가능하고, StaticQuery라는 기능을 통해 정의가능.

##### - hooks

Custom Hooks을 저장하기 위한 디렉토리.

##### - templates

게시글 페이지와 같이 페이지의 역할을 하면서 같은 형식의 여러 콘텐츠를 보여주는 컴포넌트를 저장하기 위한 디렉토리.

Gatsby에서 제공하는 API를 통해 이 디렉토리에 저장된 템플릿 컴포넌트로 여러 페이지를 만든다.

pages 디렉토리와는 다르게 파일명으로 페이지에 접근이 불가하다.

### posting category 규칙

- 포스팅 카테고리의 대분류는 웹 / 앱 / 자바스크립트 / 스타일 / 네트워크 / 데브옵스 / 버그픽스 / 리뷰 / ETC
- 웹 관련 프레임워크 , 라이브러리 관련 사항들이 온다.
  - react
  - next.js
  - redux-toolkit
- 앱 관련 개념 , 설치방법 , 프레임워크 , 라이브러리 사항들이 온다.
  - xcode 설치방법
  - react-native
  - flutter
  - ionic ..
- 자바스크립트는 알고리즘 및 많이 쓰일법한 기능들을 작성한다.
  - intersectionObserver
  - div contentEditable
- 스타일에는 스타일 관련 css 라이브러리 소개 및 기능만 오도록 한다.
  - tailwindcss
  - scss
  - styled-component
  - headless ui
  - fade in 효과 css 로 구현하기 .. (ex)
- 네트워크에는 컴퓨터 용어개념 및 cs 공부 요소를 넣도록 한다.
  - pwa
  - 용어정리 모음집
- 데브옵스에는 배포관련 사항들이 온다.
  - AWS route 53 / s3 / cloud front / beanstalk ..
  - Vercel
  - docker
- 버그픽스에는 카테고리 상관없이 겪었던 에러와 해결방식을 작성한다.
- 리뷰에는 개발관련 서적 및 제품을 리뷰하여 글로 남기도록 한다.
- ETC 는 그 외의 모든 사항들을 작성한다.
