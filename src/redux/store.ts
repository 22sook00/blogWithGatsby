import { configureStore } from "@reduxjs/toolkit";
import postReducer from "@src/redux/slice/postSlice";
import darkmodeReducer from "@src/redux/slice/darkmodeSlice";

export const store = configureStore({
	reducer: {
		//all difference slices in here!
		posts: postReducer,
		darkMode: darkmodeReducer,
	},
});

//javascript 가 아닌, typescript 에서 필요한것!
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//import { configureStore } from "@reduxjs/toolkit";
//import themeSlice from "@src/redux/slice/darkmodeSlice";
//import postReducer from "@src/redux/slice/postSlice";

//export default configureStore({
//	reducer: { darkMode: themeSlice, posts: postReducer },
//});
