import React from 'react';
import { useDispatch } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { setTabAsync } from '../../redux/tabsSlice';
import { layoutStyles, buttonStyles } from '../MaterialUIStyles';
import { makeStyles } from '@material-ui/core/styles';

const useLayoutStyles = makeStyles((theme) => layoutStyles(theme));
const useButtonStyles = makeStyles((theme) => buttonStyles(theme));

function DrawerMenu({ resetState, handleDrawerClose, open }) {
	const layoutClasses = useLayoutStyles();
	const buttonClasses = useButtonStyles();
	const dispatch = useDispatch();

	const openAcountTab = () => {
		dispatch(setTabAsync(2, null));
	};

	return (
		<Drawer
			className={layoutClasses.drawer}
			variant='persistent'
			anchor='left'
			open={open}
			classes={{
				paper: layoutClasses.drawerPaper,
			}}
		>
			<div className={layoutClasses.drawerHeader}>
				<IconButton
					onClick={handleDrawerClose}
					className={buttonClasses.menuButton}
				>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<div className={layoutClasses.sideBar}>
				<Button
					className={clsx(
						buttonClasses.sideBarButton,
						buttonClasses.buttonOrange
					)}
					variant='contained'
					onClick={openAcountTab}
				>
					Open About
				</Button>
				<Button
					className={clsx(
						buttonClasses.sideBarButton,
						buttonClasses.buttonOrange
					)}
					variant='contained'
					onClick={resetState}
				>
					Reset State
				</Button>
				<Button
					className={clsx(
						buttonClasses.sideBarButton,
						buttonClasses.buttonOrange
					)}
					variant='contained'
					onClick={handleDrawerClose}
				>
					Close Sidebar
				</Button>
			</div>
		</Drawer>
	);
}

export default DrawerMenu;
