import React, { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

interface IPostListProps {
	edges: any;
}

const PostList: FC<IPostListProps> = ({ edges }) => {
	console.log("data:", edges);
	return (
		// <div className="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
		<section className="relative rounded-lg m-auto ">
			{edges.map((posting, idx: number) => {
				console.log(posting.node.html);
				return (
					<article
						className="bg-white cursor-pointer flex gap-4 border rounded shadow-sm p-4 my-4 transition hover:backdrop-opacity-10 "
						key={idx}
					>
						<GatsbyImage
							image={
								posting.node.frontmatter.thumbnail.childImageSharp
									.gatsbyImageData
							}
							alt="Gatsby Image"
							className="w-[30%] rounded-md"
						/>
						<div className="w-full">
							<div className="h-fit flex justify-between items-center">
								<h1 className=" text-2xl  font-bold">
									{posting.node.frontmatter.title}
								</h1>
								<p className="text-text-light">
									{posting.node.frontmatter.date}
								</p>
							</div>
							<div>
								<p className="text-sm my-2">
									{posting.node.frontmatter.summary}
								</p>
								<p
									// className="text-sm"
									dangerouslySetInnerHTML={{ __html: posting.node?.html }}
									//dangerouslySetInnerHTML 블로그 정리하기!
								/>
							</div>
						</div>
					</article>
				);
			})}
			{edges.map((posting, idx: number) => {
				console.log(posting.node.html);
				return (
					<article
						className="bg-white cursor-pointer flex gap-4 border rounded shadow-sm p-4 my-4"
						key={idx}
					>
						<GatsbyImage
							image={
								posting.node.frontmatter.thumbnail.childImageSharp
									.gatsbyImageData
							}
							alt="Gatsby Image"
							className="w-[30%] rounded-md"
						/>
						<div className="w-full">
							<div className="h-fit flex justify-between items-center">
								<h1 className=" text-2xl  font-bold">
									{posting.node.frontmatter.title}
								</h1>
								<p className="text-text-light">
									{posting.node.frontmatter.date}
								</p>
							</div>
							<div>
								<p className="text-sm my-2">
									{posting.node.frontmatter.summary}
								</p>
								<p
									// className="text-sm"
									dangerouslySetInnerHTML={{ __html: posting.node?.html }}
									//dangerouslySetInnerHTML 블로그 정리하기!
								/>
							</div>
						</div>
					</article>
				);
			})}
			<div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-slate-900 absolute" />
		</section>
	);
};

export default PostList;
