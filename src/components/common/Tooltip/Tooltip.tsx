import React, { FC } from "react";

interface TooltipProps {
	text: string;
	position?: string;
	width?: string;
}

const Tooltip: FC<TooltipProps> = ({ text, position, width }) => {
	return (
		<aside
			className={`${width} bg-white animate-pulse  transition ease-in-out duration-200 rounded-md text-sm shadow drop-shadow-md p-4 absolute ${position}`}
		>
			{text}
		</aside>
	);
};

export default Tooltip;
