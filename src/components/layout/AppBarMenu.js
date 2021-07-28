import React from 'react';
import clsx from 'clsx';
import TabsMenu from './TabsMenu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { layoutStyles, buttonStyles } from '../MaterialUIStyles';
import { makeStyles } from '@material-ui/core/styles';

const useLayoutStyles = makeStyles((theme) => layoutStyles(theme));
const useButtonStyles = makeStyles((theme) => buttonStyles(theme));

export const AppBarMenu = ({ resetState, handleDrawerOpen, open }) => {
	const layoutClasses = useLayoutStyles();
	const buttonClasses = useButtonStyles();

	return (
		<AppBar
			position='fixed'
			className={clsx(layoutClasses.appBar, {
				[layoutClasses.appBarShift]: open,
			})}
		>
			<Toolbar className={layoutClasses.toolBar}>
				<IconButton
					aria-label='open drawer menu'
					onClick={handleDrawerOpen}
					className={clsx(buttonClasses.menuButton, open && layoutClasses.hide)}
				>
					<MenuIcon />
				</IconButton>
				<Typography className={layoutClasses.title} variant='h6' noWrap>
					Dynamic Tabs Demo
				</Typography>
				<IconButton className={buttonClasses.menuButton} onClick={resetState}>
					<ExitToAppIcon />
				</IconButton>
			</Toolbar>
			<TabsMenu open={open} />
		</AppBar>
	);
};

export default AppBarMenu;
