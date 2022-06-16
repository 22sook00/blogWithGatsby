import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import ProfileImage, { IProfileImgProps } from "../ProfileImage/ProfileImage";

const Introduction = () => {
	const width = 300;
	return (
		<header className="flex gap-8">
			<div
				className={` flex justify-center items-center  box-border  rounded-[50%] 
                 border-[4px] border-sky-300 transition hover:opacity-80 hover:animate-spin-slow 
									hover:border-b-sky-400
									w-[240px] h-[240px]
                  `}
			>
				<div className="w-[220px] h-[220px]">
					<div className="shadow-lg w-[220px] h-[220px]  overflow-hidden rounded-[50%] object-cover">
						<img
							src="profile.png"
							alt="l"
							className="object-cover object-right-bottom "
						/>
					</div>
				</div>
			</div>
			<div>
				<h1 className=" text-[44px]">Hello,</h1>
				<h2 className="text-xl mb-2">Welcome to the Bella's devlog 🙌🏼</h2>
				<h3>
					I'm Junior Frontend Developer, Bella || Sookyoung Lee
					<br />
					and currently working at "
					<a
						target={"_blank"}
						href="https://stay.enkor.kr/"
						className="cursor-pointer transition text-text-dark hover:text-text-light"
					>
						Enkorwithus",
					</a>
					a foreigner housing platform.
					<br />I keep studying for better web usability and data optimization.{" "}
					<br />
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
					<br /> I'm interested in app development,so I am studying
					<span className="text-text-primary border-text-primary tag-layout">
						Flutter.
					</span>
				</h3>
			</div>
		</header>
	);
};

export default Introduction;
