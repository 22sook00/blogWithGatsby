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
