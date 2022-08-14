import { Link } from "gatsby";
import React from "react";

const Footer = () => {
	return (
		<footer className="mt-16 lg:mt-24 mb-16  flex flex-col items-end gap-2 default-layout">
			<a
				href="https://github.com/22sook00"
				target="_blank"
				className="flex h-fit items-center gap-1"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					// stroke-width="2"
					strokeWidth="2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
					/>
				</svg>
				<span>Github</span>
			</a>

			<p className="text-sm text-text-light"> @All rights by sookyoung.lee</p>
		</footer>
	);
};

export default Footer;
