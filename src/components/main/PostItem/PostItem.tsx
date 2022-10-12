import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import "@src/components/main/PostItem/postItem.css";
import { Link } from "gatsby";

const PostItem = (node) => {
	return (
		<Link to={node.fields?.slug} key={node.idx}>
			<div
				className="bg-white hover:bg-slate-400/10 dark:highlight-white/5 cursor-pointer
			lg:flex gap-4 border rounded-lg shadow-sm lg:p-6 my-4 transition
			hover:backdrop-opacity-10  "
			>
				<GatsbyImage
					image={node.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData}
					alt="Gatsby Image"
					className="lg:hidden w-full h-[120px] object-cover rounded-tr-md rounded-tl-md lg:rounded-md"
				/>
				<p className="hidden lg:block lg:text-xl ">
					{String(node.idx).length === 1 ? `0${node.idx + 1}` : node.idx + 1}
				</p>

				<div className="p-2 lg:p-0 w-full lg:flex lg:justify-between">
					<section>
						<div className="h-fit flex lg:justify-between items-start gap-2 lg:gap-4  lg:items-center">
							<p className="lg:hidden lg:text-xl ">
								{String(node.idx).length === 1
									? `0${node.idx + 1}`
									: node.idx + 1}
							</p>
							<h1 className=" lg:text-xl text-ellipsis truncate  ">
								{node.frontmatter?.title}
							</h1>
						</div>
						<ul className="flex gap-2 my-2 mb-4 lg:mb-2">
							{node.frontmatter?.categories?.map(
								(category: any, idx: number) => (
									<li
										key={idx}
										className={`border ${
											category === "daily"
												? "border-yellow-400"
												: category === "react" ||
												  category === "typescript" ||
												  category === "javascript" ||
												  category === "next.js"
												? "border-sky-400"
												: category === "web" || category === "app"
												? "border-green-600"
												: category === "algorithm"
												? "border-slate-600"
												: category === "git"
												? "border-purple-400"
												: "border-pink-400"
										}   w-fit  px-2 py-1 rounded-lg text-[10px]`}
									>
										{category}
									</li>
								),
							)}
						</ul>{" "}
						<div className="mt-2">
							<p className="text-sm my-2 text-text-light">
								{node.frontmatter.summary}
							</p>
							<p
								className="summaryText"
								dangerouslySetInnerHTML={{ __html: node.html }}
								//dangerouslySetInnerHTML 블로그 정리하기!
							/>
						</div>
					</section>
					<p className="text-text-light text-sm lg:my-2">
						{node.frontmatter?.date}
					</p>
				</div>
				<GatsbyImage
					image={node.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData}
					alt="Gatsby Image"
					className="hidden lg:block w-[20%] h-[160px]  rounded-md"
				/>
			</div>
		</Link>
	);
};

export default PostItem;
