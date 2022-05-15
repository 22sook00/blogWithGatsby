import Footer from "@src/components/common/Footer";
import Header from "@src/components/common/Header";
import LayoutDefault from "@src/components/common/Layout/LayoutDefault";
import { graphql } from "gatsby";
import React from "react";

const PostDetail = ({
	data: {
		allMarkdownRemark: { edges },
	},
}) => {
	const data = edges[0]?.node.frontmatter;
	const contents = edges[0]?.node.html;

	return (
		<>
			<Header />
			<LayoutDefault>
				<p>markdown 나타내기 </p>
				<div dangerouslySetInnerHTML={{ __html: contents }} />

				<Footer />
			</LayoutDefault>
		</>
	);
};

export default PostDetail;

export const queryMarkdownDataBySlug = graphql`
	query queryMarkdownDataBySlug($slug: String) {
		allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
			edges {
				node {
					html
					frontmatter {
						title
						summary
						date(formatString: "YYYY.MM.DD.")
						categories
						thumbnail {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
				}
			}
		}
	}
`;
