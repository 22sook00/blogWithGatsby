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
		<div className="flex gap-4 mt-20 mb-8 flex-wrap">
			{Object.entries(categoryList).map(([name, count]) => {
				return (
					<Link
						to={`/?category=${name}`}
						key={name}
						className={`${
							name === selectedCategory ? "text-text-primary" : "text-gray-400"
						} flex border px-4 py-2 rounded-lg`}
					>
						{name} ({count})
					</Link>
				);
			})}
		</div>
	);
};

export default CategoryList;
