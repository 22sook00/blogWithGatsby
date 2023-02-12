import { Link } from "gatsby";
import React, { FC, useEffect, useState } from "react";
import { ISearchKeywords } from "@src/interface/Ilayout";
import Tooltip from "./Tooltip/Tooltip";
import Search from "./Search";
import { changeMode } from "@src/redux/slice/darkmodeSlice";
const Header: FC<ISearchKeywords> = ({ handleSearchKeyword, setKeyword }) => {
	const [tooltip, setTooltip] = useState<boolean>(false);
	const [isNight, setIsNight] = useState<boolean>(true);

	//const { darkMode } = useSelector((state: any) => state.darkMode);
	//const theme = darkMode ? "dark" : "light";
	//const dispatch = useDispatch();

	//const handleToggleMode = () => {
	//	setIsNight(!isNight);
	//	dispatch(changeMode(isNight));
	//};

	//useEffect(() => {
	//	document.documentElement.setAttribute("theme", theme);
	//}, [theme]);

	const handleToggleMode = () => {
		if (localStorage.getItem("theme") === "dark") {
			// 다크모드 -> 기본모드
			localStorage.removeItem("theme"); // 다크모드 삭제
			document.documentElement.classList.remove("dark"); // html class에서 dark클래스 삭제 !
			setIsNight(true);
		} else {
			// 기본모드 -> 다크모드
			document.documentElement.classList.add("dark"); // html의 class에 dark 클래스 추가 !
			localStorage.setItem("theme", "dark"); // localstorage에 dark를 추가해서 ! useEffect에서 처음에 검사해서 다크모드인지 판단해주려고 !
			setIsNight(false);
		}
	};

	useEffect(() => {
		// 처음에 다크모드인지 판단해서 뿌려주기 !! ( 나중에는 상태관리를 해도 괜찮습니다 ! )
		if (localStorage.getItem("theme") === "dark") {
			document.documentElement.classList.add("dark");
		}
	}, []);

	return (
		<section className=" sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-white lg:bg-white/90 supports-backdrop-blur:bg-white/30 dark:bg-slate-800 dark:text-slate-200 ">
			<div className="mx-auto default-layout">
				<div className="py-4 border-slate-900/10  lg:border-0 dark:border-slate-300/10 ">
					<div className="relative flex items-center justify-between">
						<div className="flex h-fit items-center ">
							<Link
								to="/"
								className="font-medium cursor-pointer mr-6 flex-none overflow-hidden md:w-auto transition text-text-primary dark:text-text-tint "
							>
								SookDev
							</Link>
							<Search />
						</div>

						<nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
							<ul className="flex space-x-8">
								<li className="hidden lg:block">
									<Link
										to="/about"
										className="cursor-pointer transition hover:text-sky-500 dark:hover:text-sky-400 "
									>
										About Me
									</Link>
								</li>
								<li className="hidden lg:block">
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
										onClick={handleToggleMode}
										className="text-[24px] transition hover:text-sky-500 dark:hover:text-sky-400"
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
