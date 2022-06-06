import Footer from "@src/components/common/Footer";
import Header from "@src/components/common/Header";
import LayoutDefault from "@src/components/common/Layout/LayoutDefault";
import "./PostDetailCms.css";
import { graphql } from "gatsby";
import React from "react";
import CommentWidget from "@src/components/main/PostItem/CommentWidget";

const PostDetail = ({
	data: {
		allMarkdownRemark: { edges },
	},
	location: { href },
}) => {
	const data = edges[0]?.node.frontmatter;
	const contents = edges[0]?.node.html;
	const {
		node: {
			html,
			frontmatter: {
				title,
				summary,
				date,
				categories,
				// thumbnail: {
				// 	childImageSharp: { gatsbyImageData },
				// 	publicURL,
				// },
			},
		},
	} = edges[0];

	return (
		<>
			<LayoutDefault
				title={title}
				description={summary}
				url={href}
				// image={publicURL}
			>
				<div
					className="content_layout"
					dangerouslySetInnerHTML={{ __html: contents }}
				/>

				<CommentWidget />
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
							publicURL
						}
					}
				}
			}
		}
	}
`;
