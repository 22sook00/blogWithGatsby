import React from "react";

const Header = () => {
	return (
		<div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/90 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
			<div className="max-w-8xl mx-auto">
				<div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
					<div className="relative flex items-center">
						<a className="cursor-pointer mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto transition text-sky-600 hover:dark:text-sky-400">
							SookBlog
						</a>
						<input
							placeholder="Search icon 올 부분"
							onChange={(e) => e.target.value}
							className="transition text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3 hidden xl:flex items-center hover:bg-sky-400/20"
						/>
						<div className="relative hidden lg:flex items-center ml-auto">
							<nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
								<ul className="flex space-x-8">
									<li>
										<a
											className="transition hover:text-sky-500 dark:hover:text-sky-400"
											href="/post/front"
										>
											Front
										</a>
									</li>
									<li>
										<a
											className="transition hover:text-sky-500 dark:hover:text-sky-400"
											href="/post/dev"
										>
											Dev
										</a>
									</li>
									<li>
										<a
											className="transition hover:text-sky-500 dark:hover:text-sky-400"
											href="/daily"
										>
											Daily
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
