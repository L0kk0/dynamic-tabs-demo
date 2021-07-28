import React from 'react';
import { selectCurrentTab } from './redux/tabsSlice';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBarMenu from './components/layout/AppBarMenu';
import DrawerMenu from './components/layout/DrawerMenu';
import Main from './pages/Main';
import {
	openDrawer,
	closeDrawer,
	selectDrawerStatus,
} from './redux/drawerSlice';
import { layoutStyles } from './components/MaterialUIStyles';

const useLayoutStyles = makeStyles((theme) => layoutStyles(theme));

function App({ persistor }) {
	const dispatch = useDispatch();
	const open = useSelector(selectDrawerStatus);
	const currentTab = useSelector(selectCurrentTab);
	const layoutClasses = useLayoutStyles();

	const handleDrawerOpen = () => {
		dispatch(openDrawer());
	};

	const handleDrawerClose = () => {
		dispatch(closeDrawer());
	};

	const resetState = () => {
		persistor.pause();
		persistor.purge();
		persistor.persist();
		window.location.reload();
	};

	return (
		<div className={layoutClasses.root}>
			<CssBaseline />
			<AppBarMenu
				open={open}
				handleDrawerOpen={handleDrawerOpen}
				handleDrawerClose={handleDrawerClose}
				resetState={resetState}
			/>
			<DrawerMenu
				open={open}
				handleDrawerClose={handleDrawerClose}
				resetState={resetState}
			/>
			<main
				className={clsx(layoutClasses.content, {
					[layoutClasses.contentShift]: open,
				})}
			>
				<div className={layoutClasses.drawerHeader} />

				<Main
					className={clsx(layoutClasses.content, {
						[layoutClasses.contentShift]: open,
					})}
					currentTab={currentTab}
				/>
			</main>
		</div>
	);
}

export default App;
