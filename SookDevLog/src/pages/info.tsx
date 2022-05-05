import React, { FunctionComponent } from "react";
import { graphql, Link } from "gatsby";
import LayoutDefault from "@src/components/common/Layout/LayoutDefault";

type InfoPageProps = {
	data: {
		site: {
			siteMetadata: {
				title: string;
				description: string;
				author: string;
			};
		};
	};
};

const InfoPage: FunctionComponent<InfoPageProps> = function ({
	data: {
		site: {
			siteMetadata: { title, description, author },
		},
	},
}) {
	return (
		<LayoutDefault>
			asdf
			<h1 className="text-lg shadow-lg">테일윈드되나?</h1>
			<p className="flex gap-3  text-blue-400 ">
				{" "}
				{title} {description} {author}
			</p>
			<Link to="/">To Main</Link>
		</LayoutDefault>
	);
};

export default InfoPage;

export const metadataQuery = graphql`
	{
		site {
			siteMetadata {
				title
				description
				author
			}
		}
	}
`;
