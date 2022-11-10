import React, { FC, useEffect, useMemo } from "react";

import { graphql } from "gatsby";
import ProfileImage from "@src/components/main/ProfileImage/ProfileImage";
import LayoutDefault from "@src/components/common/Layout/LayoutDefault";
import Introduction from "@src/components/main/Introduction/Introduction";
import CategoryList from "@src/components/main/CategoryList/CategoryList";
import Footer from "@src/components/common/Footer";
import queryString, { ParsedQuery } from "query-string";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PostList from "@src/components/main/PostList/PostList";
import useInfiniteScroll from "@src/hooks/useInfiniteScroll";
import { TemplateProps } from "@src/interface/IgetDatas";
import { useDispatch } from "react-redux";

import { setAllPostList } from "@src/redux/slice/postSlice";

const IndexPage: FC<TemplateProps> = ({
	location: { search },
	data: {
		allMarkdownRemark: { edges },
		site: {
			siteMetadata: { title, description, siteUrl },
		},
	},
}) => {
	const dispatch = useDispatch();
	const parsed: ParsedQuery<string> = queryString.parse(search);
	//!카테고리
	const selectedCategory: string =
		typeof parsed.category !== "string" || !parsed.category
			? "All"
			: parsed.category;
	const { containerRef, postList } = useInfiniteScroll(selectedCategory, edges);
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

	const filteryBycategory = Object.entries(categoryList).filter(
		(el) => el[0] === selectedCategory,
	);
	const searchArr = edges.map((search) => {
		return {
			link: search.node.fields.slug,
			post: search.node.frontmatter,
		};
	});
	useEffect(() => {
		dispatch(setAllPostList(searchArr));
	}, []);

	return (
		<main className="dark:bg-slate-800">
			<LayoutDefault title={title} description={description} url={siteUrl}>
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
