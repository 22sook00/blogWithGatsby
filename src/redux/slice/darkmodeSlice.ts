import { createSlice } from "@reduxjs/toolkit";
interface DarkMode {
	darkMode: boolean;
}

const initialState: DarkMode = {
	darkMode: false,
};

const darkmodeSlice = createSlice({
	name: "darkMode",
	initialState,
	reducers: {
		changeMode: (state, action) => {
			return { darkMode: action.payload };
		},
	},
});

export const { changeMode } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
