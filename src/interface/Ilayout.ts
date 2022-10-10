import { SetStateAction } from "react";

export interface ISearchKeywords {
	setKeyword?: React.Dispatch<SetStateAction<string>>;
	handleSearchKeyword?: (e) => void;
	searchArr?: {
		categories: string[];
		date: string;
		summary: string;
		thumbnail?: any;
		title: string;
	}[];
}
export interface ILayoutProps extends ISearchKeywords {
	title: string;
	description?: string;
	url?: string;
	image?: string;
	children: React.ReactNode;
	fullWidth?: boolean;
}
