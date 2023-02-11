import { configureStore } from "@reduxjs/toolkit";
import postReducer from "@src/redux/slice/postSlice";
import darkmodeReducer from "@src/redux/slice/darkmodeSlice";

export const store = configureStore({
	reducer: {
		posts: postReducer,
		darkMode: darkmodeReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//import { configureStore } from "@reduxjs/toolkit";
//import themeSlice from "@src/redux/slice/darkmodeSlice";
//import postReducer from "@src/redux/slice/postSlice";

//export default configureStore({
//	reducer: { darkMode: themeSlice, posts: postReducer },
//});
