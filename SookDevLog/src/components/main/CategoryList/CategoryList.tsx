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
		<div className="sticky top-[79px] col-span-1 p-6 my-4 border rounded-lg h-fit">
			<h2 className="font-bold text-xl mb-6">Category</h2>
			<div className="flex gap-3 flex-wrap h-fit mt-4">
				{Object.entries(categoryList).map(([name, count]) => {
					return (
						<Link
							to={`/?category=${name}`}
							key={name}
							className={`${
								name === selectedCategory
									? "  transition text-sky-600 border-transparent bg-blue-100 ring-sky-400 ring-opacity-60  ring-offset-2 focus:outline-none focus:ring-2"
									: "text-gray-400"
							}   px-2 py-1 rounded-2xl border text-sm w-fit text-center h-[30px] `}
						>
							{name} ({count})
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default CategoryList;
