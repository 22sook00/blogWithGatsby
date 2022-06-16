---
date: "2022-06-16"
title: "AWS Amplify 에서 Vercel 로 배포환경 옮기기"
categories: ["Deploy,"BugFix"]
summary: "amplify and vercel"
thumbnail: "../gatsbyBuildError.png"
---

## AWS Amplify 에서 Vercel 로 배포환경 옮기기

1. 일단 배포
   버셀에서 깃에 연동된 레포를 배포시킨다.

2. 환경변수
   버셀에서 배포한 레포에 기존 환경변수를 설정한다.

3. 도메인
   앰플리파이에 설정된 도메인을 중지시킨 후
   (AWS 의 DNS 서비스는 Route 53 하나!)
   버셀에서 제공하는 CNAME을 route 53에 적용시킨다.
