import React from 'react';
import AccountsGrid from '../components/AccountsGrid/AccountsGrid';
import Account from '../components/AccountDetails/Account';
import AboutTab from '../components/AboutTab';

export const Main = ({ currentTab }) => {
	function renderMainContent() {
		switch (currentTab.id) {
			case 1:
				return <AccountsGrid />;
			case 2:
				return <AboutTab />;
			default:
				return <Account currentTab={currentTab} />;
		}
	}

	return renderMainContent();
};

export default Main;
