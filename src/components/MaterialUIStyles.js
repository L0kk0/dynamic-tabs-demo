import { blueGrey, orange, red, yellow } from '@material-ui/core/colors';

export const modalStyles = (theme) => {
	return {
		paperModal: {
			color: 'white',
			border: '2px solid #000',
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
			textAlign: 'center',
			backgroundColor: blueGrey[800],
			backgroundSize: '10px 10px',
			backgroundImage:
				'repeating-linear-gradient(45deg, #303030aa 0, #303030aa 0.5px, #20202000 0, #20202000 50%)',
		},
		info: {
			color: 'white',
			textAlign: 'center',
			width: '100%',
			borderWidth: '4px',
			borderStyle: 'solid',
			borderColor: blueGrey[900],
			borderRadius: '.25rem',
			backgroundColor: orange[900],
			padding: '.5rem',
			marginTop: '.5rem',
			marginBottom: '2rem',
		},
		infoSection: {
			marginLeft: '1rem',
			marginRight: '1rem',
			textShadow: '0px 0px 6px #000000',
		},
	};
};

export const textFieldStyles = (theme) => {
	return {
		textFieldGridItem: {
			marginTop: '1rem',
			marginBottom: '1rem',
			padding: theme.spacing(1),
			width: '100%',
		},
		textField: {
			backgroundColor: orange[900],
			color: 'white',
			borderColor: blueGrey[900],
			borderWidth: '4px',
			borderStyle: 'solid',
			borderRadius: '.25rem',
			width: '100%',
			textAlign: 'center !important',
		},
		textFieldLabelRoot: {
			color: 'white',
			paddingLeft: '2rem',
			paddingRight: '2rem',
		},
		textFieldLabelFocused: {
			borderColor: orange[900],
			borderStyle: 'solid',
			borderWidth: '4px',
			borderRadius: '.5rem',
			borderBottomLeftRadius: 0,
			borderBottomRightRadius: 0,
			backgroundColor: blueGrey[900],
			padding: '.5rem',
			paddingLeft: '2rem',
			paddingRight: '2rem',
			top: '-1.5rem',
			textAlign: 'center !important',
			color: 'white !important',
		},
		textFieldLabelShrink: {
			color: 'white',
		},
		textFieldLabelMultiLineFocused: {
			borderColor: orange[900],
			borderStyle: 'solid',
			borderWidth: '4px',
			borderRadius: '.5rem',
			borderBottomLeftRadius: 0,
			borderBottomRightRadius: 0,
			backgroundColor: blueGrey[900],
			color: 'white !important',
			padding: '.5rem',
			paddingLeft: '2rem',
			paddingRight: '2rem',
			top: '-1.5rem !important',
			textAlign: 'center !important',
		},
		textFieldLabelMultiLineShrink: {
			color: 'white',
			paddingLeft: '2rem',
			paddingRight: '2rem',
		},
		textFieldInputRoot: {
			color: 'white',
		},
		textFieldInputFocused: {},
		notchedOutline: {
			borderWidth: '0px',
			borderColor: 'transparent !important',
		},
		info: {
			color: 'white',
			textAlign: 'center',
			width: '100%',
			borderWidth: '4px',
			borderStyle: 'solid',
			borderColor: blueGrey[900],
			borderRadius: '.25rem',
			backgroundColor: orange[900],
			padding: '.5rem',
			marginTop: '.5rem',
			marginBottom: '2rem',
		},
		infoSection: {
			marginLeft: '1rem',
			marginRight: '1rem',
			textShadow: '0px 0px 6px #000000',
		},
	};
};

export const notesAndContactStyles = (theme) => {
	return {
		grid: {
			display: 'flex',
			borderWidth: '4px',
			borderStyle: 'solid',
			borderColor: blueGrey[900],
			backgroundColor: orange[900],
			borderRadius: '.5rem',
			margin: theme.spacing(1),
		},
		itemDiv: {
			display: 'grid',
			alignContent: 'space-evenly',
			padding: theme.spacing(2),
			textAlign: 'center',
			width: '100%',
			minWidth: '8rem',
			backgroundColor: 'transparent',
			overflow: 'hidden',
		},
		editButton: {
			color: 'white',
			height: '3rem',
			width: '3rem',
			'&:hover': {
				backgroundColor: orange[800],
			},
			cursor: 'pointer',
		},
		header: {
			color: 'white',
			textAlign: 'center',
			width: '100%',
		},
		button: {
			marginLeft: theme.spacing(2),
			color: 'white',
			'&:hover': {
				color: orange[900],
			},
		},
	};
};

export const tabPanelStyles = (theme) => {
	return {
		tabPanel: {
			marginTop: theme.spacing(4),
			padding: theme.spacing(3),
		},
		tabContent: {
			padding: theme.spacing(2),
			marginTop: '3rem',
			borderWidth: '4px',
			borderStyle: 'solid',
			borderColor: blueGrey[900],
			borderRadius: '0.75rem',
			backgroundColor: blueGrey[700],
			backgroundSize: '10px 10px',
			backgroundImage:
				'repeating-linear-gradient(45deg, #303030aa 0, #303030aa 0.5px, #20202000 0, #20202000 50%)',
		},
	};
};

export const buttonStyles = (theme) => {
	return {
		buttonContainer: {
			textAlign: 'center',
		},
		button: {
			marginTop: '1rem',
			marginLeft: '1rem',
			color: 'white',
		},
		sideBarButton: {
			marginTop: theme.spacing(4),
			padding: theme.spacing(1),
			color: 'white',
			width: '80%',
		},
		buttonOrange: {
			backgroundColor: orange[900],
			'&:hover': {
				backgroundColor: orange[800],
			},
		},
		buttonRed: {
			backgroundColor: red[900],
			'&:hover': {
				backgroundColor: red[800],
			},
		},
		buttonYellow: {
			backgroundColor: yellow[900],
			'&:hover': {
				backgroundColor: yellow[800],
			},
		},
		menuButton: {
			color: orange[900],
			'&:hover': {
				backgroundColor: blueGrey[700],
			},
		},
	};
};

export const layoutStyles = (theme) => {
	const drawerWidth = 240;
	return {
		root: {
			display: 'flex',
		},
		content: {
			flexGrow: 1,
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.leavingScreen,
			}),
			marginLeft: -drawerWidth,
		},
		contentShift: {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		},
		appBar: {
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.leavingScreen,
			}),
			boxShadow: 'none',
		},
		appBarShift: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		toolBar: {
			backgroundColor: blueGrey[800],
		},

		hide: {
			display: 'none',
		},
		title: {
			flexGrow: 1,
			color: orange[900],
		},
		drawer: {
			width: drawerWidth,
			boxShadow: 'none',
		},
		drawerPaper: {
			width: drawerWidth,
			backgroundColor: blueGrey[800],
		},
		drawerHeader: {
			display: 'flex',
			padding: theme.spacing(1, 1),
			marginBottom: theme.spacing(4),
			...theme.mixins.toolbar,
			justifyContent: 'flex-end',
		},
		drawerCollapse: {
			color: orange[800],
			'&:hover': {
				backgroundColor: blueGrey[700],
			},
		},
		sideBar: {
			margin: '1.5rem',
			marginTop: '3rem',
			color: 'white',
			textAlign: 'center',
		},
	};
};
