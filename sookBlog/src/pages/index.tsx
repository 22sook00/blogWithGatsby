// import Test from "../components/Test";
import Header from "@src/components/header";
import Layout from "@src/components/layout";
import Seo from "@src/components/seo";
import Test from "@src/components/Test";
import React from "react";

const index = () => {
	return (
		<>
			<Layout>
				<Header />
				<Test />
			</Layout>
		</>
	);
};

export default index;
