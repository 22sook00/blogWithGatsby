---
date: "2023-01-02"
title: "리액트쿼리와 캐싱"
categories: ["react", "reactquery", "react query", "web"]
summary: "react-query의 컨셉부터 사용법까지 세부적으로 뜯어보자"
thumbnail: "./reactquery.png"
---

## 🪢  리액트쿼리 컨셉

### **stale-while-revalidate (**RFC 5861)

SWR 방식이라고 보통 부르며, 서버에서 이미 변경이 되어 낡은(stale) 데이터를 revalidate 하는 동안 캐시가 가진 stale response 를 반환하는 개념이다.

비동기 데이터 소스에 대해 쿼리라는 고유키를 통해 관리하며 데이터 상태를 `fresh`, `fetching`, `stale`, `inactive`로 표현한다.

`staleTime`을 통해 프레시한 컨텐츠가 낡은 컨텐츠로 전환되는 시간을 설정하여 캐싱된 컨텐츠 특성에 따라 유효 시간을 개별 설정해줄 수 있다.

즉, 서버로의 요청이 아니라 **메모리에서 가져와** 더 빠른시간내에 응답을 하기 위해서 사용.

<aside>
🪣 **fresh**

- 새롭게 추가된 쿼리 & 만료되지 않은 쿼리
- 컴포넌트가 업데이트 되더라도 데이터 재 요청 X
</aside>

<aside>
🪣 **fetching**

- 요청 중인 쿼리
- </aside>

<aside>
🪣 **stale**

- 만료된 쿼리
- 컴포넌트가 마운트, 업데이트 시 데이터 재 요청 O
</aside>

<aside>
🪣 **inactive**

- 비 활성화된 쿼리
- 특정 시간이 지나면 가비지 컬렉터(GC)에 의해 제거
</aside>

브라우저에서는 header의 cache-control를 통해 네트워크 요청의 캐시를 관리하는데 다음 Cache-Contol 을 보면,

<aside>
🕶️ Cache-Control : max-age=600, stale-while-revalidate=30

</aside>

**max-age =600 :** 1~60초에 요청이 들어오면 캐시는 신선하므로 바로 가져가 사용한다.

61~120초 요청에 들어오면 캐시는 stale 상태 신선하지 않은 상태가 된다. 그래서 우선 캐시된 값을 내보내고 서버로 값을 refetch,

즉 fresh 한 상태로 바꾸기 위해 요청을 보내고 응답을 받아오면 캐시된 값을 교체해준다.

**_⇒ 뒤에서 다시 설명!_**

### zero-config

기본적으로 다음과 같이 세팅이 되어있어 별도로 config 설정을 해주지 않아도 된다.

> staleTime : default 0
>
> cacheTime : default 5분 (60*5*1000)
>
> refetchOnMount, refetchOnWindowFocus, refetchOnReconnect : true
>
> retry : default 3번
>
> retryDelay : default exponential backoff function

하지만 refetchOnMount, refetchOnWindowFocus, refetchOnReconnect 가 true 로 되어있기 때문에 staleTime 이 default 인 0인 상태에서 데이터가 Stale 할때마다 계속 refetch 를 하기때문에 상황에 따라 설정을 변경해주는것이 좋다.

만약 stale 타임이 30초라면 화면에 마운트됐을때

10초후에 사라지고 10초후에 보여지고 아직 30초가 안되어있을때는 프레쉬한 데이터

마운트가 되더라도 다시 리페치가 일어나지 않는다.

내부의 쿼리캐시 값들이 프레쉬하다고 느껴지면 리페치를 하지 않는다.

캐시전략이 필요하다면 쓰겠지만 아니라면 거의 만질필요는 없다.

요약 (Zero-config 일 경우)

1. query의 cached data 는 언제나 stale 취급
2. 각 시점에서 data 가 stale 하면 항상 refetch 가 발생
3. inactive query 들은 캐시타임 만료 시 가비지컬렉터에 의해 처리
4. query 실패 시 세번까지는 retry 발생

### 세가지 컨셉

**서버 데이터 가져오기 (Queries)**

`get` 요청. useQuery 훅을 사용하며, 쿼리키에는 문자열과 배열을 넣을 수 있다.

캐시스토리지는 쿼리키를 바라보고 저장, 변경 한다. 쿼리 키가 다르면 캐싱도 별도로 관리한다.

**서버 데이터 업데이트(Mutations)**

`post` `put/patch` `delete` 요청. useMutation훅 사용.

**쿼리 무효화 (Query Invalidation)**

쿼리 데이터가 stale 상태로 바뀌기만을 기다릴 수만은 없는 케이스가 있다.

예를 들어 게시글에 댓글을 작성한 후에는 서버에서 댓글 목록을 다시 가져올 필요가 있다.

이와 같은 경우에는 지정한 `staleTime` 이 지나기 전에 직접 쿼리를 무효화해서 데이터를 새로 가져오도록 해야 한다.

⇒한마디로, 바로 **최신화** 시키는 작업이라고 볼 수 있다.

## 🪢  Stale time 과 Cache time

### Stale time

stale : 낡은, 신선하지 않은 의 뜻. 유효기간으로 생각하면 쉽다.

얼마의 시간이 흐른 후 데이터를 낡은취급 할건지 뜻한다. 이 시점이 지날때 refetch 를 한다.

다시말해, data revalidating이 필요한 시점까지 얼마의 기간이 남았는지에 대해 설정하는 옵션으로,

stale time 을 아무것도 설정하지 않을 경우 default 값은 0 으로, 서버에 들어오는 데이터와 브라우저단에서 보여주는 데이터의 간극없이 refetch 가 바로바로 된다는 뜻이다.

주식, 코인시장이나 데이터가 실시간으로 빠르게 변해야 할 경우 0으로 지정해두어도 되지만, 이런경우가 아니라면 stale time 을 지정하여 과도한 refetch 가 이뤄지는것을 막을 수 있다.

다음 상황에서 기존 데이터를 stale 되었다고 판단하고 다시 업데이트 한다.

- 새로운 쿼리 인스턴스 ( refetchOnMount )
- 윈도우가 다시 포커스 되었을 때 (탭전환등) (refetchOnWindowFocus)
- 네트워크가 끊겼다가 다시 연결되었을 때 (refetchOnReconnect)
- refetch interval 설정에 따라 다시 데이터를 호출할 때 (refetchInterval)

v3 부터는 `QueryClient.setQueryDefaults` 을 이용하여 특정 쿼리 키 값에만 staleTime 을 지정할 수 있다.

### Cache time

얼마만큼 메모리에 있을것인가

데이터가 캐시스토리지에 저장되는 시간. 최대시간은 default 5분으로, 5분이 지나면 가비지콜렉터가 유효하지 않은 값으로 판단하여 수집해간다.

stale time이 유효기간이라면, cache time 은 캐싱된 데이터가 메모리에 얼마나 남아있느냐

```jsx
//example

const { data } = useQuery("users", getUsers, {
	staleTime: 5000,
	cacheTime: 1000 * 60 * 5,
});
```

> 쉬운 예시 )
> 숙영이는 배가고파 배달의민족 어플을 통해 떡볶이를 주문 하였다.
> 주문직후 숙영이의 핸드폰에는 주문접수 전으로 보이나, 사장님은 바로 주문접수를 하고 음식을 만들기 시작한다.
> **⇒ 이때 숙영핸드폰에 보이는(client) 떡볶이 주문데이터 상태는 stale 한 것이다.**

리액트쿼리를 사용하지 않는다면 API 다시 찌르는 동안 로더가 돌겠지만 리액트쿼리는 캐시에있는 데이터를 우선적으로 보여준다.

만약, staleTime 30초, cache 를 5분동안 (600초 기본) 으로 설정하였다면

600초가 지난 30초 동안은 낡은데이터를 우선적으로 보여주고 그동안 백그라운드에서는 리페치하고 있다.

✅ **stale 타임은 cache 타임보다 길수 없다!!**

## 🪢 리액트쿼리 플로우

### 리액트쿼리의 흐름상태

![스크린샷 2023-01-02 오후 11.05.36.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4bf373f9-6128-4384-91f6-ba3f59cb1a0f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-02_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.05.36.png)

fetching이 먼저 일어나고

만약 stale time을 0보다 크게 설정할 경우 stale time이 만료되기 전까지는 fresh 상태를 유지하고 만료되면 stale상태가 된다.

스크린에서는 사용되는동안 계속 stale 한 상태로 유지가 된다. (active)

스크린에서 날라가면 쿼리가 inactive 상태가 된다.

내부 메모리에는 캐시타임이 만료되기 전까지 갖고있고 캐시타임이 지나면 가비지 컬렉터가 소환해가면서 메모리에서 삭제가 된다.

### QueryClient의 전역상태관리

그렇다면 과연 리액트쿼리는 어떤방식으로 전역에서 데이터를 가져올수 있는것일까? 답은 context 에 있다!

![스크린샷 2023-01-02 오후 11.23.20.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2a009e5a-4a48-4616-b0cd-13e84267aadc/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-02_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.23.20.png)

쿼리클라이언트의 내부구조를 뜯어보면 context 로 이루어져있다.

그렇기 때문에 Provider 로 외부에 한번 감싸주는 이유이다!

```jsx
**import { QueryClient, QueryClientProvider } from "react-query";**

**const queryClient = new QueryClient();**
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		**<QueryClientProvider client={queryClient}>**
			<UserContextProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</UserContextProvider>
		**</QueryClientProvider>**
	</React.StrictMode>,
);
```

[GitHub - TanStack/query: 🤖 Powerful asynchronous state management, server-state utilities and data fetching for TS/JS, React, Solid, Svelte and Vue.](https://github.com/TanStack/query)

## 🪢  리액트쿼리 옵션

- **cacheTime** : unused 또는 inactive 캐시 데이터가 메모리에서 유지될 시간. 기본값은 5분이며 설정한 시간을 초과하면 가비지콜렉터가 메모리에서 제거한다.
- **staleTime** : 쿼리 데이터가 fresh 에서 stale로 전환되는데 걸리는 시간. 기본값은 `0`이다.`Infinity`로 설정하면 쿼리 데이터는 직접 캐시를 무효화할 때까지 fresh 상태로 유지된다.캐시는 메모리에서 관리되므로 브라우저 새로고침 후에는 다시 가져온다. 보통 쉽게 변하지 않는 컴포넌트에 한해 staleTime을 지정한다.
- **isLoading** : 캐시가 없는 상태에서 데이터 요청 중인 상태
- **isFetching** : 캐시의 유무 상관없이 데이터 요청 중인 상태, 데이터가 fetch될 때 `true`, 캐싱 데이터가 있어서 백그라운드에서 fetch되더라도 `true`
- isError : 서버 요청 실패에 대한 상태
- Infinity : 쿼리 데이터는 캐시에서 제거되지 않는다.
- **enabled** :  `false` 값이 전달되면 쿼리가 비활성화된다.데이터 요청에 사용할 파라미터가 유효한 값일 때만 true를 할당하는 식으로 활용할 수 있다.
- **onSuccess** : 쿼리 함수가 성공적으로 데이터를 가져왔을 때 호출되는 함수.
- **onError** : 쿼리 함수에서 오류가 발생했을 때 호출되는 함수.
- onSettled : 쿼리 함수의 성공, 실패 두 경우 모두 실행된다.
- keepPreviousData : 쿼리 키(ex.페이지 번호)가 변경되어서 새로운 데이터를 요청하는 동안에도 마지막 data값을 유지한다. 페이지네이션을 구현할 때 유용하다. 캐시되지 않은 페이지를 가져올 때 화면에서 목록이 사라지는 깜빡임 현상을 방지할 수 있다.
- isPreviousData : 값으로 현재의 쿼리 키에 해당하는 값인지 확인할 수 있다.
- initialData : 캐시된 데이터가 없을 때 표시할 초기값. placeholder로 전달한 데이터와 달리 캐싱이 된다. 브라우저 로컬 스토리지에 저장해 둔 값으로 데이터를 초기화할 때 사용할 수 있을 것이다.
- refetchOnWindowFocus : 윈도우가 다시 포커스되었을 때 데이터를 호출할 것인지 여부. 기본값은 `true`이므로 필요없다고 판단되면 끄면 된다.
- refetchOnMount : 컴포넌트 마운트 시 새로운 데이터 패칭. default는 true로, false일 경우 마운트 시 새로운 데이터를 가지고 오지 않는다.
- refetchInterval : 지정한 시간 간격 만큼 데이터 패칭. 브라우저에 포커스가 없을 때 실행되지 않는다.
- refetchIntervalInBackground : default 는 false. 브라우저에 포커스가 없어도 refetchInterval에서 지정한 시간 간격만큼 데이터 패칭

## 🪢  리액트쿼리 사용 전후 비교

> 온보딩 기간에 만든 게시판제작 코드를 가져와봤습니다🙌🏻
> 리액트쿼리를 사용하지않았을때와 비교하였으니 어떤점이 간결해지고 편해졌는지 확인해주세요!

### 사용전

### useQuery (get)

```jsx

	const postID = useParams().id;
  const [commentList, setCommentList] = useState([]);
	const [comment, setComment] = useState("");
	const [isFocus, setIsFocus] = useState(false);
  const [isLoading , setIsLoading] = useState(false);
  const [isErr , setIsErr] = useState(false)


	//get 요청
  useEffect(()=>{
		const getCommentList = async () => {
      if(!postID) return;
			try{
				const resp = await GETCOMMENTLIST({ post_id: postID })
				setIsLoading(true)
				setTimeout(()=>{
					setIsLoading(false)
					setCommentList(resp)
				},1500)
			}catch(err){
				setIsErr(true)
				console.dir('err::',err!)
			}

		}
	getCommentList()

 },[])

	//별도의 상태없이 useQuery 에서 가져온 값을 바로 뿌려주고 있다.
	{commentList**?**.data**?**.map((comment, idx) => {
					return (
						<li key={idx}>
							<p>{comment.name}</p>
							<p>{comment.comment}</p>
							<p>{comment.created_at}</p>
							<div className="comment-button-box">
								<SmallButton
									onClick={() => handleDeleteComment.mutate(comment.id)}
									text={"삭제"}
									disabled={comment.user_id !== userInfo.id}
								/>
							</div>
						</li>
				);
	})}

isLoading && <Loading />
isErr && <Error />
```

```jsx

	const postID = useParams().id;
	const queryClient = useQueryClient();
	const [comment, setComment] = useState("");
	const [isFocus, setIsFocus] = useState(false);


	//get 요청
	const { data: commentList , isLoading, isError } = useQuery(["**getCommentList**", postID], () =>
		GETCOMMENTLIST({ post_id: postID }),
		{
			enabled: !!postID,//postID 가 유효한 값일때만 받아온다.
			retry: 1, //디폴트값은 3. 데이터를 제대로 fetch 못할경우 계속 재시도 하는것이아니라 한번만 재시도 한다.
		},
	);

  if(isLoading) return <Loading />
  if(isError) return <Error />


	//별도의 상태없이 useQuery 에서 가져온 값을 바로 뿌려주고 있다.
	{**commentList.data.map**((comment, idx) => {
					return (
						<li key={idx}>
							<p>{comment.name}</p>
							<p>{comment.comment}</p>
							<p>{comment.created_at}</p>
							<div className="comment-button-box">
								<SmallButton
									onClick={() => handleDeleteComment.mutate(comment.id)}
									text={"삭제"}
									disabled={comment.user_id !== userInfo.id}
								/>
							</div>
						</li>
				);
	})}
```

### 사용전

```jsx
// 같은컴포넌트가 아니라면 props drilling 혹은 클라이언트 상태관리툴을 이용해 가져온다.
const PostComment = ({commentList, setCommentList}) =>
{
	id,
	title,
	content,
	createdAt,
	updatedAt
} = commentList

	const handleDeleteComment = useCallback(async (commentID) => {
			try{
				await DELETECOMMENT({ comment_id: commentID })
				const filtering = commentList.filter((list)=>list.id !== commentID)
				setCommontList(filtering)
			}catch(err){
				console.dir(err)
			}
	},[])
}
```

### useMutation (delete)

```jsx
const PostComment = () => 	{
const queryClient = useQueryClient();

	//delete 요청
	const handleDeleteComment = useMutation(
		(commentID) => DELETECOMMENT({ comment_id: commentID }),
		{
			onSuccess: () => queryClient.invalidateQueries("**getCommentList**"),
			onError: (error) => {
				console.dir(error);
			},
		},
	);
...
}
```

### 사용전

```jsx
const PostComment = ({commentList, setCommentList}) =>
{
	id,
	title,
	content,
	createdAt,
	updatedAt
} = commentList

const [comment, setComment] = useState("");

const handleSubmitComment = useCallback(async() => {
		const sendingData = {
				post_id: postID,
				user_id: userInfo.id,
				name: userInfo.name,
				comment
		}
		try{
			const response = await ADDCOMMENT(sendingData),
			const today = new Date()
			//ui에 맞게 편집작업 해줘야 한다. 이게 상당히 노가다.
			//상황에 따라 엄청난 prosp drilling 해줘야 할 수 있음.
				setCommentList([{response, content:{response.content}, updatedAt:today}] ,...commentList)

		}catch(err){
			console.dir(err)
		}

},[commentList,comment])

}
```

### useMutation (post)

```jsx
const PostComment = () => {
	const queryClient = useQueryClient();
	const [comment, setComment] = useState("");

	const addCommentMutation = useMutation(
		(commentData) => ADDCOMMENT(commentData),
		{
			onSuccess: () => {
				setComment("");
				return queryClient.invalidateQueries("**getCommentList**");
			},
			onError: (error) => {
				console.dir(error);
			},
		},
	);

	const handleSubmitComment = (e) => {
		e.preventDefault();
		addCommentMutation.mutate({
			post_id: postID,
			user_id: userInfo.id,
			name: userInfo.name,
			comment,
		});
	};
};
```

> 세가지 모두 다 **getCommentList** 키를 바라보고 있어 별도로 import 하거나 상태를 props 하지 않아도 바로 invalidate 하여 값을 변경할 수 있다.
> 이때, getCommentList 라는 엔티티에 담긴 값이 그대로라면 그 값은 다시 refetching 하지 않기 때문에 서버부담이 적어지는 장점도 있다**.**

## 🧶 결론

### 그래서 좋은게 뭔데?

**더 좋은 UX 제공🌟🌟🌟🌟🌟**

사용자는 FCP (first contentful paint) 이후 유의미한 정보로 보여지는 server state를 업데이트 되기 전까지 볼 수 있으므로, 더 좋은 UX를 제공받는다.

확실히 캐시에서 우선적으로 보여주기 때문에 불필요한 로딩 인디케이터를 안볼수 있어 좋다.

**업데이트 및 동기화, 에러 핸들링, 로딩 등의 비동기 과정의 편리함🌟🌟🌟🌟🌟**

Redux를 사용했을땐 redux-thunk, redux-observable, redux-saga 등의 미들웨어를 사용해 서버 데이터 요청 액션이 들어오면 API를 호출하여 redux 상태를 업데이트하는 방식을 사용했다.

이는 상당히 무거운 뿐만 아니라 다양한 서버요청툴로 인한 선택 고민과 러닝커브, 한번 더 클라이언트 서버를 변경해야 한다는 점에서 번거로웠다.

하지만 React Query는 기본적으로 함수형 컴포넌트 안에서 훅 형태로 사용하며 굳이 서버 상태를 다른 장소에 저장할 필요가 없다. 쿼리무효화 하나면 끝!!

Redux같은 전역 상태 저장소의 store에 동기적으로 업데이트되는 데이터와 액션만 남길 수 있어 크기를 줄이고, Saga는 아예 대체해버린다.

server state 를 사용하게 되므로서 UI적인 상태관리나 로그인정보같은 공통상태관리정도만 client state 로 store 관리할 수 있기 때문에 상당히 편리하다.

또한 로딩과 에러핸들링도 옵션으로 제공하고 있기 때문에 따로 상태를 만들지 않아도 된다는 장점이 있다.

**변경된 부분만 sever 요청하기 때문에 부담이 적다🌟🌟🌟**

캐시메모리는 쿼리키를 바라보고 있다고 앞서 말했다.

메모리에 남아있는 쿼리 키의 값이 변경이 될때, 동일한 값들은 서버로 fetch 하지 않아 서버부담이 적어진다.

**직관적인 API 호출코드🌟🌟🌟🌟🌟**

redux 는 보일러플레이트도 많고 복잡하고 무거움. (redux-saga, redux-persist , redux-thunk.. middleware.. 🔥)

바로 API 만 불러오며 서버상태관리 가능하니 코드가 깔끔해보인다.

**편리한 DevTool**

[https://react-query.tanstack.com/devtools](https://react-query.tanstack.com/devtools)

redux 나 react-hook-form 처럼 dev tool 이 있어 stale time 이나 cache time 같은 동작원리를 더 잘 이해할 수 있다.

**그 외**

- useInfiniteQuery
- typescript , graphQl, Next.js,svelt 대응 가능
- queries 파일 분리 하여 보다 더 깔끔한 코드작성 가능!
