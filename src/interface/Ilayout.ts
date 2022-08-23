import { SetStateAction } from "react";

export interface ISearchKeywords {
	setKeyword?: React.Dispatch<SetStateAction<string>>;
	handleSearchKeyword?: (e) => void;
}
export interface ILayoutProps extends ISearchKeywords {
	title: string;
	description?: string;
	url?: string;
	image?: string;
	children: React.ReactNode;
	fullWidth?: boolean;
}
