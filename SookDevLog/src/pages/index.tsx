import React, { FunctionComponent } from "react";

import { graphql, Link } from "gatsby";
import ProfileImage from "@src/components/main/ProfileImage/ProfileImage";
import LayoutDefault from "@src/components/common/Layout/LayoutDefault";
import Introduction from "@src/components/main/Introduction/Introduction";
import CategoryList from "@src/components/main/CategoryList/CategoryList";
import PostList from "@src/components/main/PostList/PostList";
import Header from "@src/components/common/Header";
import Footer from "@src/components/common/Footer";

const IndexPage = ({
	data: {
		allMarkdownRemark: { edges },
	},
}) => {
	return (
		<main>
			<Header />
			<LayoutDefault>
				<Link to="/info/">To Info</Link>
				<Introduction />
				{/* <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} /> */}
				<PostList edges={edges} />
				<PostList edges={edges} />
				<PostList edges={edges} />
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
