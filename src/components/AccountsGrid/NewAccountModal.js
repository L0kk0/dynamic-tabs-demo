import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { createAccountAsync } from '../../redux/accountSlice';
import { setTabAsync } from '../../redux/tabsSlice';
import { v4 as uuidv4 } from 'uuid';
import {
	modalStyles,
	textFieldStyles,
	buttonStyles,
} from '../MaterialUIStyles';
import { makeStyles } from '@material-ui/core/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const useModalStyles = makeStyles((theme) => modalStyles(theme));
const useTextFieldStyles = makeStyles((theme) => textFieldStyles(theme));
const useButtonStyles = makeStyles((theme) => buttonStyles(theme));

export default function NewAccountModal({ handleClose, open }) {
	const dispatch = useDispatch();
	const modalClasses = useModalStyles();
	const textFieldClasses = useTextFieldStyles();
	const buttonClasses = useButtonStyles();

	const [account, setAccount] = useState({
		id: uuidv4(),
		Name: '',
		Phone: '',
		City: '',
		State: '',
		CreatedBy: {
			id: '001100010010011110100001101101110011',
			Name: 'Demo User',
		},
		CreatedDate: new Date(Date.now()).toISOString(),
		LastModifiedBy: {
			id: '001100010010011110100001101101110011',
			Name: 'Demo User',
		},
		LastModifiedDate: new Date(Date.now()).toISOString(),
		Contacts: [],
		Notes: [],
	});

	const handleChange = (event) => {
		setAccount({ ...account, [event.target.name]: event.target.value });
	};

	const submitAccountForm = (e) => {
		e.preventDefault();
		dispatch(createAccountAsync(account));
		dispatch(setTabAsync(account.id, account));
		setAccount({
			id: uuidv4(),
			Name: '',
			Phone: '',
			City: '',
			State: '',
			CreatedBy: {
				id: '001100010010011110100001101101110011',
				Name: 'Demo User',
			},
			CreatedDate: new Date(Date.now()).toISOString(),
			LastModifiedBy: {
				id: '001100010010011110100001101101110011',
				Name: 'Demo User',
			},
			LastModifiedDate: new Date(Date.now()).toISOString(),
			Contacts: [],
			Notes: [],
		});

		handleClose();
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			TransitionComponent={Transition}
			keepMounted
			classes={modalClasses.gridContainer}
		>
			<div className={modalClasses.paperModal}>
				<h2>Create New Account</h2>
				{account && (
					<form onSubmit={submitAccountForm}>
						<Grid container spacing={1}>
							<Grid item className={textFieldClasses.textFieldGridItem} xs={12}>
								<TextField
									InputLabelProps={{
										classes: {
											root: textFieldClasses.textFieldLabelRoot,
											focused: textFieldClasses.textFieldLabelFocused,
											shrink: textFieldClasses.textFieldLabelShrink,
										},
									}}
									InputProps={{
										classes: {
											root: textFieldClasses.textFieldInputRoot,
											input: textFieldClasses.textFieldInputInput,
											focused: textFieldClasses.textFieldInputFocused,
											notchedOutline: textFieldClasses.notchedOutline,
										},
									}}
									inputProps={{ style: { textAlign: 'center' } }}
									className={textFieldClasses.textField}
									label='Company Name'
									variant='outlined'
									color='primary'
									name='Name'
									value={account.Name}
									onChange={handleChange}
									required
								/>
							</Grid>
							<Grid item className={textFieldClasses.textFieldGridItem} xs={12}>
								<TextField
									InputLabelProps={{
										classes: {
											root: textFieldClasses.textFieldLabelRoot,
											focused: textFieldClasses.textFieldLabelFocused,
											shrink: textFieldClasses.textFieldLabelShrink,
										},
									}}
									InputProps={{
										classes: {
											root: textFieldClasses.textFieldInputRoot,
											input: textFieldClasses.textFieldInputInput,
											focused: textFieldClasses.textFieldInputFocused,
											notchedOutline: textFieldClasses.notchedOutline,
										},
									}}
									inputProps={{ style: { textAlign: 'center' } }}
									className={textFieldClasses.textField}
									label='Phone'
									variant='outlined'
									color='primary'
									name='Phone'
									value={account.Phone}
									onChange={handleChange}
									required
								/>
							</Grid>
							<Grid item className={textFieldClasses.textFieldGridItem} xs={12}>
								<TextField
									InputLabelProps={{
										classes: {
											root: textFieldClasses.textFieldLabelRoot,
											focused: textFieldClasses.textFieldLabelFocused,
											shrink: textFieldClasses.textFieldLabelShrink,
										},
									}}
									InputProps={{
										classes: {
											root: textFieldClasses.textFieldInputRoot,
											input: textFieldClasses.textFieldInputInput,
											focused: textFieldClasses.textFieldInputFocused,
											notchedOutline: textFieldClasses.notchedOutline,
										},
									}}
									inputProps={{ style: { textAlign: 'center' } }}
									className={textFieldClasses.textField}
									label='City'
									variant='outlined'
									color='primary'
									name='City'
									value={account.City}
									onChange={handleChange}
									required
								/>
							</Grid>
							<Grid item className={textFieldClasses.textFieldGridItem} xs={12}>
								<TextField
									InputLabelProps={{
										classes: {
											root: textFieldClasses.textFieldLabelRoot,
											focused: textFieldClasses.textFieldLabelFocused,
											shrink: textFieldClasses.textFieldLabelShrink,
										},
									}}
									InputProps={{
										classes: {
											root: textFieldClasses.textFieldInputRoot,
											input: textFieldClasses.textFieldInputInput,
											focused: textFieldClasses.textFieldInputFocused,
											notchedOutline: textFieldClasses.notchedOutline,
										},
									}}
									inputProps={{ style: { textAlign: 'center' } }}
									className={textFieldClasses.textField}
									label='State'
									variant='outlined'
									color='primary'
									name='State'
									value={account.State}
									onChange={handleChange}
									required
								/>
							</Grid>
						</Grid>
						<Button
							className={clsx(buttonClasses.button, buttonClasses.buttonRed)}
							variant='contained'
							color='secondary'
							onClick={handleClose}
						>
							Cancel
						</Button>
						<Button
							className={clsx(buttonClasses.button, buttonClasses.buttonOrange)}
							variant='contained'
							type='submit'
							name='create'
						>
							Create
						</Button>
					</form>
				)}
			</div>
		</Dialog>
	);
}
