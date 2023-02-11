export interface CareerDataProps {
	id: number;
	date: string;
	project: string;
	working: boolean;
	type: string;
}

export interface ContactDataProps {
	id: number;
	type: string;
	link: string;
	desc: string;
}

export const careerData: CareerDataProps[] = [
	{ id: 1, date: "2022.09-", project: "스퀘어스", working: true, type: "work" },
	{
		id: 2,
		date: "2021.11-2022-09",
		project: "엔코 위더스",
		working: false,
		type: "work",
	},
	{
		id: 3,
		date: "2021.5-2021.10",
		project: "코드스테이츠 30기 풀스택 과정 수료",
		working: false,
		type: "learn",
	},
	{
		id: 4,
		date: "2022.09-2022.10",
		project: "코드스테이츠 39기 프로젝트 멘토참여",
		working: false,
		type: "outOffice",
	},
	{
		id: 5,
		date: "2022.11-2022.12",
		project: "코드스테이츠 40기 프로젝트 멘토참여",
		working: false,
		type: "outOffice",
	},
];

export const contactData: ContactDataProps[] = [
	{ id: 1, type: "Git", link: "https://github.com/22sook00", desc: "" },
	{ id: 2, type: "Email", link: "22sook00@gmail.com", desc: "" },
	{
		id: 3,
		type: "Linked in",
		link: "https://www.linkedin.com/in/%EC%88%99%EC%98%81-%EC%9D%B4-939155256/",
		desc: "",
	},
	{
		id: 4,
		type: "Instagram",
		link: "https://www.instagram.com/sook_dev/",
		desc: "일상을 볼 수 있어요",
	},
];
