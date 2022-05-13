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
							name === selectedCategory
								? " font-medium transition text-sky-600  border border-transparent bg-blue-100 ring-sky-400 p-3 ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2"
								: "text-gray-400"
						} flex  px-4 py-2 rounded-lg border`}
					>
						{name} ({count})
					</Link>
				);
			})}
		</div>
	);
};

export default CategoryList;
