import React from 'react';
import Link from '@material-ui/core/Link';
import { useSelector, useDispatch } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CloseIcon from '@material-ui/icons/Close';
import {
	setTabAsync,
	closeTab,
	selectTabs,
	selectCurrentTab,
} from '../../redux/tabsSlice';
import { makeStyles } from '@material-ui/core/styles';
import { blueGrey, grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	tabBar: {
		backgroundColor: grey[800],
		boxShadow: 'none',
		zIndex: 100,
	},
	tabs: {
		backgroundColor: blueGrey[800],
	},
	tab: {
		marginTop: 18,
		backgroundColor: grey[900],
		color: 'white',
		marginLeft: 0,
		marginRight: 24,
		padding: '.5rem',
		minWidth: 0,
		minHeight: 36,
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4,
		'&:hover': {
			opacity: 1,
		},
		a: {
			color: 'red',
		},
	},
	selectedTab: {
		backgroundColor: blueGrey[500],
	},
	tabIndicator: {
		backgroundColor: blueGrey[600],
		minWidth: '0 !important',
	},
	tabBarSpan: {
		zIndex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	tabBarText: {
		zIndex: 1,
		marginLeft: 8,
		marginRight: 8,
		width: '100%',
		lineHeight: 2,
		'&:hover': {
			color: grey[100],
		},
		wordWrap: 'nowrap',
	},
	closeTab: {
		zIndex: 100,
		color: 'white',
		marginRight: 8,
		lineHeight: 20,
		fontSize: 20,
	},
	spacer: {
		backgroundColor: blueGrey[500],
		height: '2rem',
	},
}));

export const TabsMenu = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const tabs = useSelector(selectTabs);
	const currentTab = useSelector(selectCurrentTab);
	return (
		<React.Fragment>
			<Tabs
				value={currentTab.id}
				variant='scrollable'
				scrollButtons='on'
				indicatorColor='secondary'
				className={classes.tabs}
				classes={{
					indicator: classes.tabIndicator,
				}}
			>
				{tabs &&
					tabs.map((tab) => (
						<Tab
							key={tab.id}
							value={tab.id}
							className={classes.tab}
							classes={{ selected: classes.selectedTab }}
							label={
								<span className={classes.tabBarSpan}>
									<span
										className={classes.tabBarText}
										onClick={() => dispatch(setTabAsync(tab.id))}
									>
										<Link
											className={classes.tabBarText}
											to={tab.link}
											underline='none'
											color={'inherit'}
										>
											{tab.title}
										</Link>
									</span>
									{tab.delete && (
										<CloseIcon
											className={classes.closeTab}
											onClick={() => {
												dispatch(closeTab(tab.id));
											}}
										/>
									)}
								</span>
							}
						/>
					))}
			</Tabs>
			<div className={classes.spacer} />
		</React.Fragment>
	);
};

export default TabsMenu;
