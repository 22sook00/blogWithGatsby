---
date: "2022-06-26"
title: "PWA ( Procressive Web App )"
categories: ["PWA", "Web"]
summary: "웹과 네이티브 앱의 기능 모두의 이점을 갖도록 수 많은 특정 기술과 표준 패턴을 사용해 개발된 웹 앱 "
thumbnail: "./pwa.png"
---

# PWA란 ?

Google I/O 2016에서 처음 소개된 PWA는 Progressive Web Apps 의 약자로,
PWA는 웹과 네이티브 앱의 기능 모두의 이점을 갖도록 수 많은 특정 기술과 표준 패턴을 사용해 개발된 웹 앱이다.

<b>세가지 개념 : 기능, 안정성 및 설치 용이성 보장 </b>

일부 기능은 아직 웹에서 접근할 수 없지만 새로운 API와 향후 출시될 API에 힘 입어 파일 시스템 액세스, 미디어 제어, 앱 배지 및 완전한 클립보드 지원과 같은 기능을 웹에서도 이용할 수 있게 될 수도 있다.

최신 API, 웹 어셈블리, 새로운 API와 향후 출시될 API를 배경으로 웹 애플리케이션은 그 어느 때보다 많은 기능을 제공하며 이러한 기능은 계속해서 증가하고 있다.

<img src = './compareWzplattform.png' alt='플랫폼 비교'>

프로그레시브 웹 앱(PWA)은 최신 API로 구축 및 강화되어 뛰어난 기능, 신뢰성 및 설치 용이성을 제공하는 동시에 단일 코드베이스로 누구에게나 어디서나 모든 장치에서 도달할 수 있다.

## 장점

App스러움
PWA의 특징이라면 App스러움이라고 할 수 있습니다. 마치 App처럼 홈스크린에 아이콘을 설치하여 APP처럼 쉽게 바로가기를 실현할 수 있습니다.
Push 메시지 기능
App의 중요 특징 중 하나인 Push가 가능하다는 것입니다. 원래 웹은 클라이언트에서 서버로 요청이 있어야만 결과물을 보내주는 형태로 구현이 되는데 Push는 반대로 클라이언트의 요청이 없더라도 서버의 필요에 의해서 클라이언트에게 데이터를 보낼 수 있는 기능입니다. 보통 쪽지나 Notice형태로 제공됩니다.
Offline 접속 기능
PWA가 캐싱이 되기 때문에 Offline이거나 속도가 느린 상태에서도 미리 다운로드 되어 있는 정보를 계속 볼 수 있습니다.
보안
PWA는 HTTPS에서만 사용이 가능하기 때문에 일반 인터넷 데이터에 비해 보안이 강화된 상태라고 할 수 있습니다.

## 어떻게 사용할까?

<b>service-worker.js</b>

Service Workers는 PWA의 핵심으로 캐싱은 어떻게 할 것인지 요청시 캐시를 먼저 보여줄지 웹서버를 통해서 먼저 보여줄지, push 등등에 대한 프로그래밍하는 기술. PWA의 거의 80%에 해당하는 기술이라고 보면 된다.

```js
const CACHE_NAME = "offline";
const OFFLINE_URL = "offline.html";

self.addEventListener("install", function (event) {
	console.log("[ServiceWorker] Install");

	event.waitUntil(
		(async () => {
			const cache = await caches.open(CACHE_NAME);
			// Setting {cache: 'reload'} in the new request will ensure that the response
			// isn't fulfilled from the HTTP cache; i.e., it will be from the network.
			await cache.add(new Request(OFFLINE_URL, { cache: "reload" }));
		})(),
	);

	self.skipWaiting();
});

self.addEventListener("activate", (event) => {
	console.log("[ServiceWorker] Activate");
	event.waitUntil(
		(async () => {
			// Enable navigation preload if it's supported.
			// See https://developers.google.com/web/updates/2017/02/navigation-preload
			if ("navigationPreload" in self.registration) {
				await self.registration.navigationPreload.enable();
			}
		})(),
	);

	// Tell the active service worker to take control of the page immediately.
	self.clients.claim();
});

self.addEventListener("fetch", function (event) {
	// console.log('[Service Worker] Fetch', event.request.url);
	if (event.request.mode === "navigate") {
		event.respondWith(
			(async () => {
				try {
					const preloadResponse = await event.preloadResponse;
					if (preloadResponse) {
						return preloadResponse;
					}

					const networkResponse = await fetch(event.request);
					return networkResponse;
				} catch (error) {
					console.log(
						"[Service Worker] Fetch failed; returning offline page instead.",
						error,
					);

					const cache = await caches.open(CACHE_NAME);
					const cachedResponse = await cache.match(OFFLINE_URL);
					return cachedResponse;
				}
			})(),
		);
	}
});
```

### manifest.json

manifest.json은 설치할 때 아이콘은 무얼 사용하고 아이콘을 눌렀을때 접속할 페이지는 무엇인지, 배경색은 무슨색으로 할 것인지 등등..에 대한 설정파일이라고 보시면 됩니다.

```
//example

{
  "short_name": "Weather",
  "name": "Weather - Do I need an umbrella?",
  "description": "Weather forecast information",
  "icons": [
    {
      "src": "https://via.placeholder.com/48",
      "sizes": "48x48",
      "type": "image/png"
    },
  ],
  "start_url": "/",
  "background_color": "#3367D6",
  "display": "standalone",
  "scope": "/",
  "theme_color": "#3367D6"
}

```

## 번외 - app icon editor 소개

Link to 👉🏼 https://maskable.app/editor

해당 링크에서 앱의 메인 아이콘으로 사용할 이미지를 편집 후 manifest.json 에 업데이트 한다.

```js
{
  …
  "icons": [
    …
    {
      "src": "path/to/regular_icon.png",
      "sizes": "196x196",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "path/to/maskable_icon.png",
      "sizes": "196x196",
      "type": "image/png",
      "purpose": "maskable" // <-- New property value `"maskable"`
    },
    …
  ],
  …
}
```

출처 https://web.dev/progressive-web-apps/#codelabs
