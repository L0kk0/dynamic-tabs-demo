import React from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { blueGrey, orange } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import { setTabAsync } from '../../redux/tabsSlice';

const useStyles = makeStyles((theme) => ({
	grid: {
		display: 'flex',
		borderWidth: '4px',
		borderStyle: 'solid',
		borderColor: blueGrey[900],
		backgroundColor: orange[900],
		borderRadius: '.25rem',
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
	iconButton: {
		color: 'white',
		height: '3rem',
		width: '3rem',
		'&:hover': {
			backgroundColor: orange[800],
		},
		cursor: 'pointer',
	},
}));

export default function AccountGridItem({ account }) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const openTab = (account) => {
		dispatch(setTabAsync(account.id, account));
	};

	return (
		<Grid container justifyContent='center' alignItems='center' spacing={0}>
			<Grid item className={classes.grid} xs={12}>
				<div className={classes.itemDiv} onClick={() => openTab(account)}>
					<IconButton className={classes.iconButton}>
						<EditIcon />
					</IconButton>
				</div>
				<div className={classes.itemDiv}>{account.Name}</div>
				<div className={classes.itemDiv}>{account.Phone}</div>
				<div className={classes.itemDiv}>
					{account.City}, {account.State}
				</div>
			</Grid>
		</Grid>
	);
}
