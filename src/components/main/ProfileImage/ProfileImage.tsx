import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { FC } from "react";

export interface IProfileImgProps {
	profileImage: IGatsbyImageData;
}

const ProfileImage: FC<IProfileImgProps> = ({ profileImage }) => {
	return (
		<>
			<GatsbyImage image={profileImage} alt="Profile Image" />
		</>
	);
};

export default ProfileImage;
