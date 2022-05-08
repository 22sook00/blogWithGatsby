import React, { FunctionComponent } from "react";

import { graphql, Link } from "gatsby";
import ProfileImage from "@src/components/main/ProfileImage/ProfileImage";
import LayoutDefault from "@src/components/common/Layout/LayoutDefault";
import Introduction from "@src/components/main/Introduction/Introduction";
import CategoryList from "@src/components/main/CategoryList/CategoryList";
import PostList from "@src/components/main/PostList/PostList";
import Header from "@src/components/common/Header";
import Footer from "@src/components/common/Footer";
import queryString, { ParsedQuery } from "query-string";

const IndexPage = ({
	location: { search },
	data: {
		allMarkdownRemark: { edges },
		file: {
			childImageSharp: { gatsbyImageData },
		},
	},
}) => {
	const parsed: ParsedQuery<string> = queryString.parse(search);
	console.log("parsed?", parsed);
	const selectedCategory: string =
		typeof parsed.category !== "string" || !parsed.category
			? "All"
			: parsed.category;
	return (
		<main>
			<Header />
			<LayoutDefault>
				<Link to="/info/">To Info</Link>
				<Introduction />
				{/* <CategoryList
        selectedCategory={selectedCategory}
        categoryList={CATEGORY_LIST}
      /> */}
				<PostList edges={edges} />
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
					html
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
	}
`;
