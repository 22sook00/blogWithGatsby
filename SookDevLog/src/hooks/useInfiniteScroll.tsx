import { MutableRefObject, useState, useEffect, useRef, useMemo } from "react";

export type useInfiniteScrollType = {
	containerRef: MutableRefObject<HTMLDivElement | null>;
	postList: any[];
};

const NUMBER_OF_ITEMS_PER_PAGE = 3;

const useInfiniteScroll = function (
	selectedCategory: string,
	posts: any[],
): useInfiniteScrollType {
	//useRef wrapper 설정하기

	const containerRef: MutableRefObject<HTMLDivElement | null> =
		useRef<HTMLDivElement>(null);
	//몇개씩 끊어서 보여줄건지 지정하기 : 선택된 tag 에 따라 숫자를 나눠줘야 하기 떄문에 다음과같은 식 작성.
	const [count, setCount] = useState<number>(1);

	const postListByCategory = useMemo<any[]>(
		() =>
			posts.filter(
				({
					node: {
						frontmatter: { categories },
					},
				}: any) =>
					selectedCategory !== "All"
						? categories.includes(selectedCategory)
						: true,
			),
		[selectedCategory],
	);
	//지정한 숫자 노드의갯수만큼 도달했을때 다음 데이터 불러올, observer 설정
	const observer: IntersectionObserver = new IntersectionObserver(
		(entries, observer) => {
			if (!entries[0].isIntersecting) return;

			//너무 바로 로딩되는 느낌이 있어 추가함.
			setTimeout(() => {
				setCount((value) => value + 1);
			}, 2000);
			observer.disconnect();
		},
	);
	// console.log("count?", count);
	useEffect(() => setCount(1), [selectedCategory]);

	useEffect(() => {
		if (
			NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
			containerRef.current === null ||
			containerRef.current.children.length === 0
		)
			return;

		observer.observe(
			containerRef.current.children[containerRef.current.children.length - 1],
		);
	}, [count, selectedCategory]);

	return {
		containerRef,
		postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
	};
};

export default useInfiniteScroll;
