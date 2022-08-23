import { Link } from "gatsby";
import React, { FC, useState } from "react";
import { ISearchKeywords } from "@src/interface/Ilayout";
import Tooltip from "./Tooltip/Tooltip";

const Header: FC<ISearchKeywords> = ({
	handleSearchKeyword,
	setKeyword,
}) => {

	const [tooltip , setTooltip] = useState<boolean>(false)
	return (
		<section className="sticky top-0 z-40 w-full backdrop-blur  flex-none transition-colors duration-500 lg:z-50 border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-white lg:bg-white/90 supports-backdrop-blur:bg-white/30 dark:bg-white/80 ">
			<div className="max-w-8xl mx-auto default-layout">
				<div className="py-4 border-slate-900/10  lg:border-0 dark:border-slate-300/10 ">
					<div className="relative flex items-center justify-between">
						<Link
							to="/"
							className="font-medium cursor-pointer mr-6 flex-none overflow-hidden md:w-auto transition text-text-primary "
						>
							SookDev
						</Link>
						<form onSubmit={handleSearchKeyword}>
							<input
								placeholder="🔎 Search keywords"
								onChange={(e) => setKeyword(e.target.value)}
								className="
							transition text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-200/10 rounded-full py-1 px-3  items-center 
							inline-flex justify-center border border-transparent bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2
							"
							/>
						</form>
						<div 
						onMouseEnter={()=>setTooltip(true)}
						onMouseLeave={()=>setTooltip(false)}
						className="relative hidden lg:flex items-center ml-auto">
							<nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
								<ul className="flex space-x-8">
									<li>
										<Link
											to="/post/front"
											className=" cursor-not-allowed transition hover:text-sky-500 dark:hover:text-sky-400"
										>
											Front
										</Link>
									</li>
									<li>
										<Link
											to="/post/dev"
											className="cursor-not-allowed transition hover:text-sky-500 dark:hover:text-sky-400"
										>
											Dev
										</Link>
									</li>
									<li>
										<Link
											to="/daily"
											className="cursor-not-allowed transition hover:text-sky-500 dark:hover:text-sky-400"
										>
											Daily
										</Link>
									</li>
								</ul>
							</nav>
							{tooltip && 
							<Tooltip 
							position={'top-10 right-0'}
							text={'개발 준비중 입니다!'}/>
							}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
