
import React, { FC } from "react";

const Introduction = () => {
	return (
		<header className="flex flex-col lg:flex-row gap-8 justify-center w-full items-center lg:justify-start">
			<div
				className={`flex justify-center items-center box-border  rounded-[50%] 
                 border-[4px] border-sky-300 transition hover:opacity-80 hover:animate-spin-slow 
									hover:border-b-sky-400
									w-[180px] h-[180px] lg:w-[240px] lg:h-[240px]
                  `}
			>
				<div className="w-[160px] h-[160px] lg:w-[220px] lg:h-[220px]">
					<div className="shadow-lg w-[160px] h-[160px] lg:w-[220px] lg:h-[220px] overflow-hidden rounded-[50%] object-cover">
						<img
							src="profile.png"
							alt="l"
							className="object-cover object-right-bottom "
						/>
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-3xl lg:text-[44px]">Hello,</h1>
				<h2 className="text-lg lg:text-xl my-2">
					Welcome to the Sookyoung's devlog 🙌🏼
				</h2>
				<div className="text-sm lg:text-base text-justify">
					<h3>
						I'm Junior <b>Frontend</b> Developer, Sookyoung Lee.
						<br />
						Now I'm working at "
						<a
							target={"_blank"}
							href="https://stay.enkor.kr/"
							className="underline  underline-offset-2 cursor-pointer transition text-text-dark hover:text-text-light"
						>
							Enkorwithus",
						</a>{" "}
						a foreigner housing platform.
						<br className="hidden lg:block" />I keep studying for better web
						usability and data optimization. <br className="hidden lg:block" />
						The main stack is
						<span className="text-text-primary border-text-tag-blue tag-layout">
							React
						</span>
						<span className="text-text-primary border-text-tag-blue tag-layout">
							TypeScript
						</span>
						<span className="text-text-primary border-text-tag-blue tag-layout">
							Next.js
						</span>
						.
						<br />I am interested in app development and am currently studying
						<span className="text-text-primary border-text-primary tag-layout">
							Flutter.
						</span>
					</h3>
				</div>
			</div>
		</header>
	);
};

export default Introduction;
