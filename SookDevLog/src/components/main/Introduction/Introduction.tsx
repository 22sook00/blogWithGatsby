import { IGatsbyImageData } from "gatsby-plugin-image";
import React, { FC } from "react";
import ProfileImage, { IProfileImgProps } from "../ProfileImage/ProfileImage";

const Introduction: FC<Partial<IProfileImgProps>> = ({ profileImage }) => {
	return (
		<>
			<ProfileImage profileImage={profileImage} />
			<div>
				<h1>Nice to Meet You,</h1>
				<h3>I'm Junior Frontend Developer Sook.</h3>
			</div>
		</>
	);
};

export default Introduction;
