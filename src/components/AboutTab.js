import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { blueGrey, orange } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import GitHubIcon from '@material-ui/icons/GitHub';
import { tabPanelStyles } from './MaterialUIStyles';

const useTabPanelStyles = makeStyles((theme) => tabPanelStyles(theme));

const useStyles = makeStyles((theme) => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
		width: '100%',
		padding: theme.spacing(2),
		margin: theme.spacing(2),
		textAlign: 'center',
		backgroundColor: orange[900],
		color: 'white',
		borderWidth: '4px',
		borderStyle: 'solid',
		borderColor: blueGrey[900],
		borderRadius: '.25rem',
	},
	info: {
		flexGrow: 1,
	},
	header: {
		marginBottom: '3rem',
	},
	p: {
		margin: '2rem',
	},
	gitHub: {
		display: 'grid',
		alignContent: 'space-evenly',
		textAlign: 'center',
		textDecoration: 'none',
		marginTop: '4rem',
		'&:hover': {
			opacity: 0.5,
			textDecoration: 'none !important',
		},
		'&:visited': {
			textDecoration: 'none !important',
		},
		'&:link': {
			textDecoration: 'none !important',
		},
		'&:active': {
			textDecoration: 'none !important',
		},
	},
	gitHubIcon: {
		display: 'inline',
		height: '1rem',
		width: '1rem',
	},
	gitHubInfo: {
		display: 'inline',
		lineHeight: '1.15rem',
		fontSize: '1.15rem',
		color: 'white',
		textDecoration: 'none',

		marginRight: '.5rem',
		'&:hover': {
			textDecoration: 'none !important',
		},
		'&:visited': {
			textDecoration: 'none !important',
		},
		'&:link': {
			textDecoration: 'none !important',
		},
		'&:active': {
			textDecoration: 'none !important',
		},
	},
	gitHubLink: {
		display: 'inline',
		lineHeight: '1rem',

		fontSize: '1rem',
		color: 'white',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'none !important',
		},
		'&:visited': {
			textDecoration: 'none !important',
		},
		'&:link': {
			textDecoration: 'none !important',
		},
		'&:active': {
			textDecoration: 'none !important',
		},
	},
}));

export default function AboutTab() {
	const classes = useStyles();
	const tabPanelClasses = useTabPanelStyles();

	return (
		<div className={tabPanelClasses.tabPanel}>
			<div className={tabPanelClasses.tabContent}>
				<Paper className={classes.paper}>
					<div className={classes.info}>
						<h1 className={classes.header}>Dynamic Tabs Demo App</h1>
						<p className={classes.p}>
							Simple implementation of dynamic tabs using React, Redux, Persist,
							and MaterialUI.
						</p>
						<p className={classes.p}>
							This is a snippet from a project for a client that required being
							able to work with multiple accounts simultaneiously.
						</p>
						<p className={classes.p}>Demo data is loaded from a json file.</p>
						<p className={classes.p}>
							Changes are made to in state only using Redux and Persist.
						</p>
						<p className={classes.p}>
							The logout button in the upper right or the "Reset State" button
							in the sidebar will clear state and reload data from the json
							file.
						</p>
						<p className={classes.p}>
							Tabs are created dynamically by click the edit icon next to an
							account, allowing users to work with multiple accounts within the
							same browser tab.
						</p>
					</div>

					<div className={classes.gitHub}>
						<a
							href='https://github.com/L0kk0/dynamic-tabs-demo'
							target='_blank'
							rel='noreferrer'
							className={classes.gitHubLink}
						>
							<div className={classes.gitHubInfo}>
								<GitHubIcon classes={{ root: classes.gitHubIcon }} />
							</div>
							<div className={classes.gitHubInfo}>Github Repository</div>
						</a>
					</div>
				</Paper>
			</div>
		</div>
	);
}
