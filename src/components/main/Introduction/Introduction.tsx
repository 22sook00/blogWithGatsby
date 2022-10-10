import React, { FC } from "react";

import Typical from "react-typical";
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
				{/*<Typical
        steps={['Hello', 1000, 'Hello world!', 500]}
        loop={Infinity}
        wrapper="p"
      />*/}
				<h2 className="text-lg lg:text-xl mt-2 mb-1">
					Welcome to the Sookyoung's devlog 🙌🏼
				</h2>
				<div className="text-sm lg:text-base text-justify">
					<h3>
						I'm Junior <b>Frontend</b> Developer, Sookyoung Lee.
						<br />
						{/* about me 에 넣기*/}
						{/*Currently, I am working for a company that operates a
						<a
							target={"_blank"}
							href="https://stay.enkor.kr/"
							className="underline  underline-offset-2 cursor-pointer transition text-text-dark hover:text-text-light"
						>
							website builder system
						</a>
						and
						<a
							target={"_blank"}
							href="https://stay.enkor.kr/"
							className="underline  underline-offset-2 cursor-pointer transition text-text-dark hover:text-text-light"
						>
							anti-corruption program
						</a>*/}
						The main stack is
						<span className="text-text-primary border-text-tag-blue tag-layout">
							<Typical
								steps={[
									"React",
									1000,
									"React / TypeScript",
									1000,
									"React / TypeScript / Next.js",
									1000,
								]}
								loop={Infinity}
								wrapper={"span"}
							/>
						</span>
						<br className="hidden lg:block" />I keep studying for better web
						usability and data optimization. <br className="hidden lg:block" />I
						am interested in app development and am currently studying
						<span className="text-text-primary border-text-primary tag-layout">
							React Native
						</span>
						<br />
						<span>Want to know more about me? 👉🏻 </span>
						<span>
							<a
								href="/about"
								className="underline  underline-offset-2 cursor-pointer transition text-text-dark hover:text-text-light"
							>
								About Me
							</a>
						</span>
					</h3>
				</div>
			</div>
		</header>
	);
};

export default Introduction;
