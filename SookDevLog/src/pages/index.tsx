import React, { FunctionComponent } from "react";

import { Link } from "gatsby";
import ProfileImage from "@src/components/main/ProfileImage/ProfileImage";
import LayoutDefault from "@src/components/common/Layout/LayoutDefault";
import Introduction from "@src/components/main/Introduction/Introduction";
import CategoryList from "@src/components/main/CategoryList/CategoryList";

const CATEGORY_LIST = {
	All: 5,
	Web: 3,
	Mobile: 2,
};

const IndexPage: FunctionComponent = function () {
	return (
		<LayoutDefault>
			<Link to="/info/">To Info</Link>
			<Introduction />
			<CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
		</LayoutDefault>
	);
};

export default IndexPage;
