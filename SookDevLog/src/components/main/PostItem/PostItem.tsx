import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const PostItem = (frontmatter, idx) => {
	console.log("frontmatter", frontmatter);
	return (
		<article
			className="bg-white cursor-pointer flex gap-4 border rounded shadow-sm p-4 my-4 transition hover:backdrop-opacity-10 "
			key={idx}
		>
			<GatsbyImage
				image={frontmatter.thumbnail.childImageSharp.gatsbyImageData}
				alt="Gatsby Image"
				className="w-[30%] h-[200px] object-cover rounded-md"
			/>
			<div className="w-full">
				<div className="h-fit flex justify-between items-center">
					<h1 className=" text-2xl  font-bold">{frontmatter.title}</h1>
					<p className="text-text-light">{frontmatter.date}</p>
				</div>
				<div>
					<p className="text-sm my-2">{frontmatter.summary}</p>
					{/* <p
									// className="text-sm"
									dangerouslySetInnerHTML={{ __html: posting.node?.html }}
									//dangerouslySetInnerHTML 블로그 정리하기!
								/> */}
				</div>
			</div>
		</article>
	);
};

export default PostItem;
