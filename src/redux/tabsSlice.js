import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tabs: [
		{
			id: 1,
			title: 'accounts',
			delete: false,
		},
	],
	currentTab: {
		id: 1,
		title: 'accounts',
		delete: false,
	},
};

export const tabsSlice = createSlice({
	name: 'tabs',
	initialState: initialState,
	reducers: {
		setTab: (state, action) => {
			state.currentTab = action.payload;
		},
		addTab: (state, action) => {
			state.tabs.push(action.payload);
			state.currentTab = action.payload;
		},
		closeTab: (state, action) => {
			state.tabs = state.tabs.filter((tab) => tab.id !== action.payload);
			if (state.currentTab.id === action.payload) {
				state.currentTab = state.tabs[state.tabs.length - 1];
			}
		},
	},
});

export const { setTab, addTab, closeTab } = tabsSlice.actions;
export const selectTabs = (state) => state.tabs.tabs;
export const selectCurrentTab = (state) => state.tabs.currentTab;

// Set Tab Async
export const setTabAsync = (id, account) => async (dispatch, getState) => {
	const state = getState();
	let existingTab = state.tabs.tabs.find((tab) => tab.id === id);

	if (existingTab) {
		dispatch(setTab(existingTab));
	} else if (id === 2) {
		const newTab = {
			id: 2,
			type: 'about',
			title: 'about',
			delete: true,
		};
		dispatch(addTab(newTab));
	} else {
		const newTab = {
			id: account.id,
			type: 'accounts',
			title: account.Name.slice(0, 20),
			delete: true,
		};
		dispatch(addTab(newTab));
	}
};

export default tabsSlice.reducer;
