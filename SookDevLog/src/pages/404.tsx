import React from "react";

const NotFoundPage = () => {
	return (
		<div className="text-center w-full h-[100vh] flex flex-col gap-2 justify-center items-center">
			<h1 className="text-[68px] mb-6">404</h1>
			<p>찾을 수 없는 페이지입니다 😲</p>
			<p> 다른 콘텐츠를 보러 가보시겠어요?</p>
			<a
				href="/"
				// className="mt-6 text-sm rounded-md shadow-md border w-fit h-fit px-4 py-2 transition hover:bg-hover-gray-bg"
				className="btn-primary"
			>
				메인으로
			</a>
		</div>
	);
};

export default NotFoundPage;
