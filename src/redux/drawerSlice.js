import { createSlice } from '@reduxjs/toolkit';

export const tabsSlice = createSlice({
	name: 'drawer',
	initialState: {
		open: true,
	},
	reducers: {
		openDrawer: (state) => {
			state.open = true;
		},
		closeDrawer: (state) => {
			state.open = false;
		},
	},
});

export const { openDrawer, closeDrawer } = tabsSlice.actions;
export const selectDrawerStatus = (state) => state.drawer.open;
export default tabsSlice.reducer;
