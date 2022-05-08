import Loading from "@src/components/common/Loader/Loading";
import useInfiniteScroll from "@src/hooks/useInfiniteScroll";
import React, { FC, useEffect } from "react";
import PostItem from "../PostItem/PostItem";

interface IProps {
	postList: any;
	filteryBycategory: any;

	containerRef?: any;
}

const PostList: FC<IProps> = ({
	filteryBycategory,
	postList,
	containerRef,
}) => {
	return (
		<div ref={containerRef} className="relative ">
			{postList.map(({ node }: any, idx: number) => (
				<PostItem
					{...node}
					link="https://www.google.co.kr/"
					key={node.id}
					idx={idx}
				/>
			))}
			<div
				className={`${
					filteryBycategory[1] === postList.length
						? "hidden"
						: " inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-slate-900 absolute"
				}`}
			>
				<Loading />
			</div>
		</div>
	);
};

export default PostList;
