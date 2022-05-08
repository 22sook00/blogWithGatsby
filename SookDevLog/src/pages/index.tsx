import React, { FunctionComponent, useMemo } from "react";

import { graphql, Link } from "gatsby";
import ProfileImage from "@src/components/main/ProfileImage/ProfileImage";
import LayoutDefault from "@src/components/common/Layout/LayoutDefault";
import Introduction from "@src/components/main/Introduction/Introduction";
import CategoryList from "@src/components/main/CategoryList/CategoryList";
import PostList from "@src/components/main/PostList/PostList";
import Header from "@src/components/common/Header";
import Footer from "@src/components/common/Footer";
import queryString, { ParsedQuery } from "query-string";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IndexPage = ({
	location: { search },
	data: {
		allMarkdownRemark: { edges },
	},
}) => {
	const image = getImage(edges[0].node.frontmatter.thumbnail);
	const parsed: ParsedQuery<string> = queryString.parse(search);
	console.log("parsed", parsed, "search?", search);
	const selectedCategory: string =
		typeof parsed.category !== "string" || !parsed.category
			? "All"
			: parsed.category;

	const categoryList = useMemo(
		() =>
			edges.reduce(
				(
					list: any,
					{
						node: {
							frontmatter: { categories },
						},
					}: any,
				) => {
					categories.forEach((category) => {
						if (list[category] === undefined) list[category] = 1;
						else list[category]++;
					});

					list["All"]++;

					return list;
				},
				{ All: 0 },
			),
		[],
	);

	return (
		<main>
			<Header />
			<LayoutDefault>
				<Link to="/info/">To Info</Link>
				<Introduction profileImage={image} />
				<CategoryList
					selectedCategory={selectedCategory}
					categoryList={categoryList}
				/>
				<PostList selectedCategory={selectedCategory} posts={edges} />
			</LayoutDefault>
			<Footer />
		</main>
	);
};

export default IndexPage;

export const getPostList = graphql`
	query getPostList {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
		) {
			edges {
				node {
					id
					frontmatter {
						title
						summary
						date(formatString: "YYYY.MM.DD.")
						categories
						thumbnail {
							childImageSharp {
								gatsbyImageData(
									quality: 100
									placeholder: BLURRED
									formats: [AUTO, WEBP, AVIF]
									transformOptions: { fit: INSIDE, cropFocus: ATTENTION }
									layout: CONSTRAINED
									width: 368
								)
							}
						}
					}
				}
			}
		}
	}
`;
