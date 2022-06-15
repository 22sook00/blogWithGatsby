---
date: "2022-06-06"
title: "gatsbyBuildError"
categories: ["BugFix"]
summary: "gatsbyBuildError "
thumbnail: "./gatsbyBuildError.png"
---

## gatsby Build Error

와씨 해결했다. 돌았다.

ERROR #98123 WEBPACK
Generating JavaScript bundles failed

```
styles.065fb0e1226cdde6ac27.css from Css Minimizer
Error: Unexpected '/'. Escaping special characters with \ may help.
    at /Users/enkor_leesookyoung/Desktop/BellaPrivate/blogWithGatsby/SookDevLog/styles.065fb0e1226cdde6ac27.css:1304:2
    at Root._error (/Users/enkor_leesookyoung/Desktop/BellaPrivate/blogWithGatsby/SookDevLog/node_modules/postcss-selector-parser/dist/parser.js:174:16)
    at Root.error (/Users/enkor_leesookyoung/Desktop/BellaPrivate/blogWithGatsby/SookDevLog/node_modules/postcss-selector-parser/dist/selectors/root.js:43:19)
    at Parser.error (/Users/enkor_leesookyoung/Desktop/BellaPrivate/blogWithGatsby/SookDevLog/node_modules/postcss-selector-parser/dist/parser.js:740:21)
    at Parser.unexpected (/Users/enkor_leesookyoung/Desktop/BellaPrivate/blogWithGatsby/SookDevLog/node_modules/postcss-selector-parser/dist/parser.js:758:17)
    at Parser.combinator (/Users/enkor_leesookyoung/Desktop/BellaPrivate/blogWithGatsby/SookDevLog/node_modules/postcss-selector-parser/dist/parser.js:656:12)
    at Parser.parse (/Users/enkor_leesookyoung/Desktop/BellaPrivate/blogWithGatsby/SookDevLog/node_modules/postcss-selector-parser/dist/parser.js:1101:14)
    at Parser.loop (/Users/enkor_leesookyoung/Desktop/BellaPrivate/blogWithGatsby/SookDevLog/node_modules/postcss-selector-parser/dist/parser.js:1043:12)
    at new Parser (/Users/enkor_leesookyoung/Desktop/BellaPrivate/blogWithGatsby/SookDevLog/node_modules/postcss-selector-parser/dist/parser.js:164:10)
    at Processor._root (/Users/enkor_leesookyoung/Desktop/BellaPrivate/blogWithGatsby/SookDevLog/node_modules/postcss-selector-parser/dist/processor.js:53:18)
    at Processor._runSync (/Users/enkor_leesookyoung/Desktop/BellaPrivate/blogWithGatsby/SookDevLog/node_modules/postcss-selector-parser/dist/processor.js:100:21)

File: styles.065fb0e1226cdde6ac27.css
```

css와 자바스크립트 쪽에서 웹팩 번들에러가 났다.
처음엔 테일윈드 문제인줄 알았지만 알고보니
이건 테일윈드의 문제가 아니라 css 파일에 온전치 못한 주석이 있기때문에 빌드에러가 난거였음.

버그 픽스 참조링크 👉🏼 https://github.com/ngneat/tailwind/issues/109
