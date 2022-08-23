import React, { FC } from "react";

interface Props {
	spinItemColor?: string;
	width?: string;
	height?: string;
}

const Loading: FC<Props> = ({ spinItemColor, width, height }) => {
	return (
		<span
			className={`box-border border-[4px] border-sky-300 opacity-70 rounded-[50%] ${
				spinItemColor ? `border-b-[${spinItemColor}]` : `border-b-sky-500`
			}   ${width ? width : "w-4 lg:w-6"}
       
						
			${height ? height : "h-4 lg:h-6 "}
        				     inline-block animate-spin 
            `}
		></span>
	);
};

export default Loading;
