import React from 'react';
import dayjs from 'dayjs';
import { blueGrey, orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	info: {
		color: 'white',
		borderWidth: '4px',
		borderStyle: 'solid',
		borderColor: blueGrey[900],
		borderRadius: '.25rem',
		backgroundColor: orange[900],
		margin: theme.spacing(1),
		padding: theme.spacing(2),
	},
	infoSection: {
		display: 'inline-block',
		textAlign: 'center',
		width: '50%',
	},
}));

export default function AccountInfoSection({ account }) {
	const classes = useStyles();

	return (
		<div className={classes.info}>
			<div className={classes.infoSection}>
				<div>Created By: {account.CreatedBy.Name}</div>
				<div>{dayjs(account.CreatedDate).format('MMM DD, YYYY hh:mm A')}</div>
			</div>
			<div className={classes.infoSection}>
				<div>Last Modified By: {account.LastModifiedBy.Name}</div>
				<div>
					{dayjs(account.LastModifiedDate).format('MMM DD, YYYY hh:mm A')}
				</div>
			</div>
		</div>
	);
}
