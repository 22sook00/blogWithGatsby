import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import "@src/components/main/PostItem/postItem.css";
import { Link } from "gatsby";

const PostItem = (node) => {
	return (
		<Link
			to={node.fields?.slug}
			className="bg-white hover:bg-slate-400/10 dark:highlight-white/5 cursor-pointer flex gap-4 border rounded-lg shadow-sm p-6 my-4 transition hover:backdrop-opacity-10 "
			key={node.idx}
		>
			<p className="text-xl ">
				{String(node.idx).length === 1 ? `0${node.idx + 1}` : node.idx + 1}
			</p>

			<div className="w-full">
				<div className="h-fit flex justify-between items-center">
					<h1 className=" text-xl  ">{node.frontmatter?.title}</h1>
					<p className="text-text-light text-sm">{node.frontmatter?.date}</p>
				</div>
				<div className="h-[96px]">
					<p className="text-sm my-2 text-text-light">
						{node.frontmatter.summary}
					</p>
					<p
						className="summaryText"
						// className="text-sm text-clip overflow-hidden "
						dangerouslySetInnerHTML={{ __html: node.html }}
						//dangerouslySetInnerHTML 블로그 정리하기!
					/>
				</div>
				<ul className="flex gap-2 mt-2">
					{node.frontmatter?.categories?.map((category: any, idx: number) => (
						<li
							key={idx}
							className={`border ${
								category === "Daily"
									? "border-yellow-400"
									: category === "React" ||
									  category === "Typescript" ||
									  category === "Next.js"
									? "border-sky-400"
									: category === "Web" || category === "App"
									? "border-green-600"
									: "border-pink-400"
							}   w-fit  px-2 py-1 rounded-lg text-[10px]`}
						>
							{category}
						</li>
					))}
				</ul>
			</div>
			<GatsbyImage
				image={node.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData}
				alt="Gatsby Image"
				className="w-[20%] h-[160px] object-cover rounded-md"
			/>
		</Link>
	);
};

export default PostItem;
