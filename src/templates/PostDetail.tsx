import Footer from "@src/components/common/Footer";
import Header from "@src/components/common/Header";
import LayoutDefault from "@src/components/common/Layout/LayoutDefault";
import "./PostDetailCms.css";
import { graphql } from "gatsby";
import React from "react";
import CommentWidget from "@src/components/main/PostItem/CommentWidget";
import moment from "moment";

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
			frontmatter: { title, summary, date, categories },
		},
	} = edges[0];
	// console.log("data", data);
	return (
		<>
			<LayoutDefault
				title={title}
				description={summary}
				url={href}
				fullWidth
				// image={publicURL}
			>
				<section className="title_layout  ">
					<img
						src={data.thumbnail.publicURL}
						alt={"d"}
						className="image_style"
						// className="blur-md overflow-hidden absolute top-0 object-cover"
					/>
					<h1 className="title_style capitalize">{data.title}</h1>
					<p className="text-sm text-text-light my-4">
						{data.date && moment(data.date).format("dddd,MMM,DD YYYY")}
					</p>
				</section>
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
