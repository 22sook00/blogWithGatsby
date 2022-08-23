import { Link } from "gatsby";
import React, { FC, ReactNode, useCallback, useEffect, useState } from "react";

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
	const [isShowShadow, setIsShowShadow] = useState<boolean>(false);
	const handleCheckScroll = useCallback(() => {
		const scrollY = window.scrollY;
		scrollY < 420 ? setIsShowShadow(false) : setIsShowShadow(true);
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleCheckScroll);
		return () => {
			window.removeEventListener("scroll", handleCheckScroll);
		};
	}, [handleCheckScroll]);

	//console.log('categoryList',categoryList)

	return (
		<div
			className={`lg:sticky top-[63px] lg:top-[79px] z-50 bg-white col-span-1 py-4 pb-8 lg:p-6 lg:mt-4 mb-4 lg:border lg:rounded-lg h-fit ${
				isShowShadow && "border-b"
			}`}
		>
			<h2 className="hidden lg:block font-bold text-xl mb-6">Category</h2>
			<div className="flex gap-3 flex-wrap h-fit lg:mt-4">
				{Object.entries(categoryList).map(([name, count]) => {
					return (
						<Link
							to={`/?category=${name}`}
							key={name}
							className={`${
								name === selectedCategory
									? "  transition text-sky-600 border-transparent bg-blue-100 ring-sky-400 ring-opacity-60  ring-offset-2 focus:outline-none focus:ring-2"
									: "text-gray-400"
							}   px-2 py-1 rounded-2xl border text-xs lg:text-sm w-fit text-center h-[30px] `}
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
