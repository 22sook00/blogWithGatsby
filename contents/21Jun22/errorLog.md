---
date: "2022-06-21"
title: "지옥의 에러로그"
categories: ["BugFix", "Git", "Deploy"]
summary: "환경변수는 정말 조심히 건드리자."
thumbnail: "./err1.png"
---

## Before I start ..

한 페이지를 가져올때 maximum value는 10MB라고 한다. 현재 위의 사진을 보면 메모리 사용량이 720MB인 것을 보면 굉장히 많은 메모리를 사용하고 있는 것으로 보여진다.

결국 프로덕션 서버에서만 에러로그를 확인할 수 있는 sentry 를 install 할때
환경변수를 건드린게 문제.
node.env === 'production' ? ~~

이런식으로 코드짰는데 이게문제
환경변수는 건드리지말자!
