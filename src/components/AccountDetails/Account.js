import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { selectCurrentAccount } from '../../redux/accountSlice';
import AccountDetails from './AccountDetails';
import AccountContacts from './contacts/AccountContacts';
import AccountNotes from './notes/AccountNotes';
import Button from '@material-ui/core/Button';
import { deleteAccountAsync } from '../../redux/accountSlice';
import { closeTab } from '../../redux/tabsSlice';
import { tabPanelStyles, buttonStyles } from '../MaterialUIStyles';
import clsx from 'clsx';

const useTabPanelStyles = makeStyles((theme) => tabPanelStyles(theme));
const useButtonStyles = makeStyles((theme) => buttonStyles(theme));
const useStyles = makeStyles((theme) => ({
	header: {
		color: 'white',
		textAlign: 'center',
		width: '100%',
		marginBottom: '2.5rem',
		fontSize: '1.5rem',
	},
}));

export default function Account() {
	const classes = useStyles();
	const tabPanelClasses = useTabPanelStyles();
	const buttonClasses = useButtonStyles();
	const dispatch = useDispatch();
	const currentAccount = useSelector(selectCurrentAccount);
	const [account, setAccount] = useState({
		id: '',
		Name: '',
		Phone: '',
		City: '',
		State: '',
		CreatedBy: {},
		CreatedDate: new Date(),
		LastModifiedBy: {},
		LastModifiedDate: new Date(),
		Contacts: [],
		Notes: [],
	});

	useEffect(() => {
		if (currentAccount) {
			setAccount(currentAccount);
		}
	}, [currentAccount]);

	const deleteAccount = () => {
		dispatch(closeTab(currentAccount.id));
		dispatch(deleteAccountAsync(currentAccount.id));
	};

	return (
		<div className={tabPanelClasses.tabPanel}>
			<div className={tabPanelClasses.tabContent}>
				<h3 className={classes.header}>Account Details</h3>
				<AccountDetails
					account={account}
					currentAccount={currentAccount}
					setAccount={setAccount}
				/>
				<AccountContacts accountId={account.id} contacts={account.Contacts} />
				<AccountNotes accountId={account.id} notes={account.Notes} />
				<div className={buttonClasses.buttonContainer}>
					<Button
						className={clsx(buttonClasses.button, buttonClasses.buttonRed)}
						variant='contained'
						onClick={deleteAccount}
					>
						Delete Account
					</Button>
				</div>
			</div>
		</div>
	);
}
