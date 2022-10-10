import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = [];

export const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setAllPostList: (state, action: PayloadAction<any>) => {
			return action.payload;
		},
	},
});

export const { setAllPostList } = postSlice.actions;
//export const selectOrderedItem = (state: RootState) => state.posts;

export default postSlice.reducer;
