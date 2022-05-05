import React from "react";
import UsingSSR from "@src/pages/page-2";
import UsingTypescript from "@src/pages/using-typescript";

const Test = () => {
	return (
		<>
			<UsingSSR />
			<UsingTypescript />
			<h1 className="btn-primary ">Gatsby test!</h1>
			<div className="text-[38px] text-teal-400">Test</div>
		</>
	);
};

export default Test;
