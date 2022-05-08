import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { FC } from "react";

export interface IProfileImgProps {
	profileImage: IGatsbyImageData;
}

const ProfileImage: FC<IProfileImgProps> = ({ profileImage }) => {
	return (
		<>
			<GatsbyImage image={profileImage} alt="Profile Image" />
			<div className="w-[100px] h-[100px] rounded my-4 bg-blue-300 flex justify-center items-center">
				<h1 className="text-[70px]"> 👩🏻‍💻</h1>
			</div>
		</>
	);
};

export default ProfileImage;
