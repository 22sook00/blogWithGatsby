import React, { FC } from "react";
import Loading from "@src/components/common/Loader/Loading";
import PostItem from "../PostItem/PostItem";

interface PostListProps {
	postList: any;
	filteryBycategory: any;
	containerRef?: any;
}
const PostList: FC<PostListProps> = ({
	filteryBycategory,
	postList,
	containerRef,
}) => {
	//console.log('filteryBycategory?',filteryBycategory)
	return (
		<div ref={containerRef} className="lg:relative lg:col-span-3  ">
			{postList.map(({ node }: any, idx: number) => (
				<PostItem {...node} link={node.fields.slug} key={node.id} idx={idx} />
			))}
			<div
				className={`${
					filteryBycategory[1] === postList.length
						? "hidden"
						: " inset-x-0 bottom-0 flex justify-center absolute  bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none"

				}`}
			>
				<Loading />
			</div>
		</div>
	);
};

export default PostList;
