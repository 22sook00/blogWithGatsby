import React, { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

interface IPostListProps {
	edges: any;
}

const PostList: FC<IPostListProps> = ({ edges }) => {
	console.log("data:", edges);
	return (
		<section className="bg-white m-auto grid grid-cols-3 gap-4">
			{edges.map((posting, idx: number) => {
				return (
					<article className="border rounded shadow-sm p-4 my-4" key={idx}>
						<GatsbyImage
							image={
								posting.node.frontmatter.thumbnail.childImageSharp
									.gatsbyImageData
							}
							alt="Gatsby Image"
						/>
						<h1 className=" text-teal-600 font-bold">
							제목 : {posting.node.frontmatter.title}
						</h1>
						<p> {posting.node.frontmatter.date}</p>
					</article>
				);
			})}
		</section>
	);
};

export default PostList;
