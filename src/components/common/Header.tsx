import { Link } from "gatsby";
import React, { FC, useState } from "react";
import { ISearchKeywords } from "@src/interface/Ilayout";
import Tooltip from "./Tooltip/Tooltip";
import Search from "./Search";
const Header: FC<ISearchKeywords> = ({ handleSearchKeyword, setKeyword }) => {
	const [tooltip, setTooltip] = useState<boolean>(false);
	const [isNight, setIsNight] = useState(false);
	return (
		<section className="sticky top-0 z-40 w-full backdrop-blur  flex-none transition-colors duration-500 lg:z-50 border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-white lg:bg-white/90 supports-backdrop-blur:bg-white/30 dark:bg-white/80 ">
			<div className="mx-auto default-layout">
				<div className="py-4 border-slate-900/10  lg:border-0 dark:border-slate-300/10 ">
					<div className="relative flex items-center justify-between">
						<div className="flex h-fit items-center ">
							<Link
								to="/"
								className="font-medium cursor-pointer mr-6 flex-none overflow-hidden md:w-auto transition text-text-primary "
							>
								SookDev
							</Link>
							<Search />
						</div>

						<nav className="text-sm leading-6 font-semibold text-slate-700 ">
							<ul className="flex space-x-8">
								<li>
									<Link
										to="/about"
										className="cursor-pointer transition hover:text-sky-500 dark:hover:text-sky-400"
									>
										About Me
									</Link>
								</li>
								<li>
									<div
										onMouseEnter={() => setTooltip(true)}
										onMouseLeave={() => setTooltip(false)}
										className="relative hidden lg:flex items-center ml-auto"
									>
										<Link
											to="?category=daily"
											className="dark:text-slate-200 cursor-not-allowed transition "
										>
											Daily
										</Link>
										{tooltip && (
											<Tooltip
												position={"top-10 right-0"}
												text={"개발 준비중 입니다!"}
												width={"w-[150px]"}
											/>
										)}
									</div>
								</li>
								<li>
									<button
										onClick={() => setIsNight(!isNight)}
										className="text-[20px] cursor-not-allowed transition hover:text-sky-500 dark:hover:text-sky-400"
									>
										{isNight ? "🌜" : "🌞"}
									</button>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
