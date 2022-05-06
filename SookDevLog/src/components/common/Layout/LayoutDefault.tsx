import React, { FC } from "react";

interface ILayoutProps {
	children: React.ReactNode;
}

const LayoutDefault: FC<ILayoutProps> = ({ children }) => {
	return (
		<div className="w-full h-[calc(100%-60px)] bg-gradient-to-b from-blue-100 via-pink-100 to-white m-auto px-[120px] py-32">
			{children}
		</div>
	);
};

export default LayoutDefault;
