import React from "react";
import Footer from "@src/components/common/Footer";
import LayoutDefault from "@src/components/common/Layout/LayoutDefault";
import "../templates/PostDetailCms.css";
import { careerData, contactData } from "@src/data/career";

const About = () => {
	const working = careerData.filter((el) => el.type === "work");
	const involved = careerData.filter((el) => el.type !== "work");
	return (
		<LayoutDefault title="About Me" fullWidth>
			<section className="title_layout  ">
				<img
					src={"/incafe.png"}
					alt={"aboutme header img"}
					className="image_style object-center"
				/>
				<h1 className="title_style capitalize"></h1>
			</section>
			<div className="content_layout ">
				<section className="grid grid-cols-2 ">
					<div className="flex flex-col justify-center whitespace-normal ">
						<h3 className="m-0 text-xl">프론트엔드 개발자,</h3>
						<h1 className="mt-0 leading-10 text-3xl">
							<b>"이숙영" </b>입니다.
						</h1>
						<p className="text-lg my-2 ">[ Keep Challenging, No excuse ]</p>

						<article className="text-sm leading-6 mt-2">
							<p className="whitespace-pre">
								8년간의 공항생활을 접고 다소 늦은 나이에 개발을 시작했습니다.
							</p>
							<p>"문과, 영문과, 외항사 지상직"</p>
							<p>개발과는 전혀 접점이 보이지 않는 과거를 살아왔지만 </p>
							<p>모든 편견을 없애기 위해 꾸준히 공부하고 기록하려 합니다.</p>
							<p>현재는 어느덧 한번의 이직을 겪은 개발자가 되었습니다.</p>
						</article>
					</div>
					<img
						src="/me.png"
						alt="내사진"
						className="w-[70%] rounded-md shadow m-auto"
					/>
				</section>

				<div className="dashed-horizon-line" />
				<h1 className="text-2xl m-0 mb-4">🛠 Stacks</h1>
				<section className="grid grid-cols-4 gap-3 cursor-default ">
					<article className="p-4 bg-hover-gray-bg rounded-md  text-xs ">
						<h3 className="text-base mb-3 font-medium">Lang & Framework</h3>
						<ul className="flex gap-1 flex-col text-sm">
							<li>Javascript</li>
							<li>Typescript</li>
							<li>React</li>
							<li>Next.js</li>
							<li>PHP</li>
							<li>Node.js</li>
						</ul>
					</article>
					<article className="p-4 bg-hover-gray-bg rounded-md  text-xs ">
						<h3 className="text-base mb-3 font-medium">Library</h3>
						<ul className="flex gap-1 flex-col text-sm">
							<li>Jquery</li>
							<li>Redux, Redux-toolkit</li>
							<li>React-query</li>
							<li>React-hook-form</li>
							<li>Mantine.dev</li>
						</ul>
					</article>

					<article className="p-4 bg-hover-gray-bg rounded-md  text-xs ">
						<h3 className="text-base mb-3 font-medium">Style</h3>
						<ul className="flex gap-1 flex-col text-sm">
							<li>CSS</li>
							<li>Tailwind css</li>
							<li>Styled-component</li>
							<li>Scss</li>
						</ul>
					</article>

					<article className="p-4 bg-hover-gray-bg rounded-md  text-xs ">
						<h3 className="text-base mb-3 font-medium">DevOps / Tool</h3>
						<ul className="flex gap-1 flex-col text-sm">
							<li>AWS</li>
							<li>Vercel</li>
							<li>Jira</li>
							<li>Notion</li>
							<li>Figma</li>
						</ul>
					</article>
				</section>
				<div className="dashed-horizon-line" />
				<section className="grid grid-cols-2 gap-10">
					<div>
						<h1 className="text-2xl mb-4">👩🏻‍💻 Work</h1>
						{working.map((el) => {
							return (
								<div key={el.id} className="mb-2 flex h-fit items-center ">
									<span className="tag-date-style mr-2">{el.date}</span>
									<span className="text-sm ">{el.project}</span>
									{el.working && (
										<span className="flex ml-2">
											<span className="animate-ping  h-2 w-2 rounded-full bg-sky-400 opacity-75"></span>
											<span className="rounded-full absolute h-2 w-2 bg-sky-500"></span>
										</span>
									)}
								</div>
							);
						})}
					</div>

					<div>
						<h1 className="text-2xl mb-4">🙋🏻‍♀️ Involved</h1>
						{involved.map((el) => {
							return (
								<div key={el.id} className="mb-2 flex h-fit items-center ">
									<span className="tag-date-style mr-2">{el.date}</span>
									<span className="text-sm">{el.project}</span>
								</div>
							);
						})}
					</div>
				</section>
				<div className="dashed-horizon-line" />
				<h1 className="text-2xl m-0 mb-4">🛠 Contact</h1>
				<section className="grid grid-cols-2 gap-3">
					{contactData.map((ctc) => {
						return (
							<a
								key={ctc.id}
								href={
									ctc.type === "Email"
										? `mailto:${ctc.link}?cc=${ctc.link}`
										: ctc.link
								}
								target={"_blank"}
							>
								<article className="text-base h-[100px] flex justify-center items-center flex-col cursor-pointer p-4 bg-hover-gray-bg rounded-md transition font-medium hover:bg-item-hover dark:hover:text-text-dark">
									{ctc.type}{" "}
								</article>
							</a>
						);
					})}
				</section>
			</div>
			<Footer />
		</LayoutDefault>
	);
};

export default About;
