import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
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
				<h2 className="text-xl mb-2">
					Welcome to the development study & daily blog 🙌🏼
				</h2>
				<h3>
					I'm Junior Frontend Developer, Sookyoung Lee
					<br />
					and currently working at "
					<Link to="https://stay.enkor.kr/">
						<a
							target={"_blank"}
							className="cursor-pointer transition text-text-dark hover:text-text-light"
						>
							Enkorwithus",
						</a>
					</Link>{" "}
					a foreigner housing platform.
					<br />I keep studying for better web usability and data optimization.{" "}
					<br />
					The main stack is React / TypeScript / Next.js
					<br /> I'm interested in app development,so I am studying Flutter.
				</h3>
			</div>
		</header>
	);
};

export default Introduction;
