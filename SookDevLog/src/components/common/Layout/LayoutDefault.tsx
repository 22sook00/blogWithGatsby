import React, { FC } from "react";

interface ILayoutProps {
	children: React.ReactNode;
}

const LayoutDefault: FC<ILayoutProps> = ({ children }) => {
	return <div className="w-full m-auto p-6">{children}</div>;
};

export default LayoutDefault;
