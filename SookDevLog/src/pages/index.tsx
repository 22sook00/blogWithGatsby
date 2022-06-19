import React, { FC, FunctionComponent, useMemo } from "react";

import { graphql, Link } from "gatsby";
import ProfileImage from "@src/components/main/ProfileImage/ProfileImage";
import LayoutDefault from "@src/components/common/Layout/LayoutDefault";
import Introduction from "@src/components/main/Introduction/Introduction";
import CategoryList from "@src/components/main/CategoryList/CategoryList";
import Header from "@src/components/common/Header";
import Footer from "@src/components/common/Footer";
import queryString, { ParsedQuery } from "query-string";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PostList from "@src/components/main/PostList/PostList";
import useInfiniteScroll from "@src/hooks/useInfiniteScroll";
import { Helmet } from "react-helmet";

export interface FrontmatterProps {
	categories: string[];
	title: string;
	date: string;
	summary: string;
	thumbnail?: {
		childImageSharp: {
			gatsbyImageData?: any;
		};
	};
}
export interface AllMarkdownRemarkProps {
	node: {
		fields: { slug: string };
		frontmatter: FrontmatterProps;
		id: number;
	};
}
export interface TemplateProps {
	location: { search };
	data: {
		site: {
			siteMetadata: {
				title: string;
				description: string;
				siteUrl: string;
			};
		};
		allMarkdownRemark: {
			edges: Array<AllMarkdownRemarkProps>;
		};
		file: {
			childImageSharp: {
				gatsbyImageData: any;
			};
			publicURL: string;
		};
	};
}

const IndexPage: FC<TemplateProps> = ({
	// location: { href },

	location: { search },
	data: {
		allMarkdownRemark: { edges },
		site: {
			siteMetadata: { title, description, siteUrl },
		},
		// file: {
		// 	childImageSharp: { gatsbyImageData },
		// 	publicURL,
		// },
	},
}) => {
	// const image = getImage(edges[0].node.frontmatter.thumbnail);
	// const parsed: ParsedQuery<string> = queryString.parse(href);

	const frontmatter = edges.map((data) => data.node.frontmatter);
	const parsed: ParsedQuery<string> = queryString.parse(search);
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
					categories.forEach((category: string) => {
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

	const { containerRef, postList } = useInfiniteScroll(selectedCategory, edges);

	const filteryBycategory = Object.entries(categoryList).filter(
		(el) => el[0] === selectedCategory,
	);

	const searchKeywords = edges.map(
		(allPost: Pick<AllMarkdownRemarkProps, "node">) => {
			const searchData = [
				...allPost.node.frontmatter.categories,
				...allPost?.node?.frontmatter?.title.split(" "),
			];
			return searchData;
		},
	);
	console.log("searchKeywords", searchKeywords);
	const matchingData = frontmatter.filter((data: FrontmatterProps) => {});

	return (
		<main>
			<LayoutDefault
				title={title}
				description={description}
				url={siteUrl}
				// image={publicURL}
			>
				<Introduction />
				<section className="lg:grid grid-cols-4 gap-4 mt-4 lg:mt-16 ">
					<CategoryList
						selectedCategory={selectedCategory}
						categoryList={categoryList}
					/>
					<PostList
						postList={postList}
						filteryBycategory={filteryBycategory[0]}
						containerRef={containerRef}
					/>
				</section>
				<Footer />
			</LayoutDefault>
		</main>
	);
};

export default IndexPage;

export const getPostList = graphql`
	query getPostList {
		site {
			siteMetadata {
				title
				description
				siteUrl
			}
		}
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
		) {
			edges {
				node {
					id
					fields {
						slug
					}
					frontmatter {
						title
						summary
						date(formatString: "YYYY.MM.DD.")
						categories
						thumbnail {
							childImageSharp {
								gatsbyImageData(width: 768, height: 400)
							}
						}
					}
				}
			}
		}
		file(name: { eq: "profile-image" }) {
			childImageSharp {
				gatsbyImageData(width: 120, height: 120)
			}
			publicURL
		}
	}
`;
// export const getPostList = graphql`
// 	query getPostList {
// 		allMarkdownRemark(
// 			sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
// 		) {
// 			edges {
// 				node {
// 					id
// 					fields {
// 						slug
// 					}
// 					html
// 					frontmatter {
// 						title
// 						summary
// 						date(formatString: "YYYY.MM.DD.")
// 						categories
// 						thumbnail {
// 							childImageSharp {
// 								gatsbyImageData(
// 									quality: 100
// 									placeholder: BLURRED
// 									formats: [AUTO, WEBP, AVIF]
// 									transformOptions: { fit: INSIDE, cropFocus: ATTENTION }
// 									layout: CONSTRAINED
// 									width: 368
// 								)
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// `;
