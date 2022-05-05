import { Link } from "gatsby";
import React, { FC, ReactNode } from "react";

type CategoryItemProps = {
	active: boolean;
};

type GatsbyLinkProps = {
	children: ReactNode;
	className?: string;
	to: string;
} & CategoryItemProps;

export interface ICategoryListProps {
	selectedCategory: string;
	categoryList: {
		[key: string]: number;
	};
}

const CategoryList: FC<ICategoryListProps> = ({
	selectedCategory,
	categoryList,
}) => {
	return (
		<div>
			{Object.entries(categoryList).map(([name, count]) => {
				console.log("mn", name, "select:", selectedCategory);
				return (
					<Link
						to={`/?category=${name}`}
						key={name}
						className={`${
							name === selectedCategory
								? "font-bold text-text-tag-blue"
								: "text-purple-500"
						} flex`}
					>
						#{name}({count})
					</Link>
				);
			})}
		</div>
	);
};

export default CategoryList;
