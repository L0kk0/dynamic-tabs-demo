import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import dayjs from 'dayjs';
import {
	createContactAsync,
	updateContactAsync,
	deleteContactAsync,
} from '../../../redux/accountSlice';
import {
	modalStyles,
	textFieldStyles,
	buttonStyles,
} from '../../MaterialUIStyles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const useModalStyles = makeStyles((theme) => modalStyles(theme));
const useTextFieldStyles = makeStyles((theme) => textFieldStyles(theme));
const useButtonStyles = makeStyles((theme) => buttonStyles(theme));

export default function ContactsModal({
	accountId,
	selectedContact,
	handleClose,
	open,
	newContact,
	setNewContact,
}) {
	const dispatch = useDispatch();
	const modalClasses = useModalStyles();
	const textFieldClasses = useTextFieldStyles();
	const buttonClasses = useButtonStyles();

	const [contact, setContact] = React.useState({
		id: '',
		Salutation: '',
		FirstName: '',
		LastName: '',
		Phone: '',
		MobilePhone: '',
		Email: '',
		CreatedBy: {},
		CreatedDate: '',
		LastModifiedBy: {},
		LastModifiedDate: '',
	});

	const handleChange = (event) => {
		setContact({ ...contact, [event.target.name]: event.target.value });
	};

	useEffect(() => {
		setContact({
			id: selectedContact.id || '',
			Salutation: selectedContact.Salutation || '',
			FirstName: selectedContact.FirstName || '',
			LastName: selectedContact.LastName || '',
			Phone: selectedContact.Phone || '',
			MobilePhone: selectedContact.MobilePhone || '',
			Email: selectedContact.Email || '',
			CreatedBy: selectedContact.CreatedBy || {},
			CreatedDate: selectedContact.CreatedDate || '',
			LastModifiedBy: selectedContact.LastModifiedBy || {},
			LastModifiedDate: selectedContact.LastModifiedDate || '',
		});
		// eslint-disable-next-line
	}, [selectedContact]);

	const submitContactForm = (e) => {
		e.preventDefault();
		const submitter = e.nativeEvent.submitter.name;

		if (submitter === 'create') {
			dispatch(createContactAsync(accountId, contact));
			setNewContact(false);
			handleClose();
		}

		if (submitter === 'update') {
			dispatch(updateContactAsync(accountId, contact));
			handleClose();
		}
	};

	const deleteContact = () => {
		dispatch(deleteContactAsync(accountId, contact.id));
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
				<h2>{newContact ? 'Create' : 'Update'} Contact</h2>
				{contact && (
					<form onSubmit={submitContactForm}>
						<Grid container spacing={1} className={modalClasses.gridContainer}>
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
									label='Salutation'
									variant='outlined'
									color='primary'
									name='Salutation'
									value={contact.Salutation}
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
									label='First Name'
									variant='outlined'
									color='primary'
									name='FirstName'
									value={contact.FirstName}
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
									label='Last Name'
									variant='outlined'
									color='primary'
									name='LastName'
									value={contact.LastName}
									onChange={handleChange}
									required
								/>
							</Grid>
						</Grid>
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
									label='Phone'
									variant='outlined'
									color='primary'
									name='Phone'
									value={contact.Phone}
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
									label='MobilePhone'
									variant='outlined'
									color='primary'
									name='MobilePhone'
									value={contact.MobilePhone}
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
									label='Email'
									variant='outlined'
									color='primary'
									name='Email'
									value={contact.Email}
									onChange={handleChange}
									required
								/>
							</Grid>
						</Grid>
						{!newContact && (
							<React.Fragment>
								<div className={modalClasses.info}>
									<div className={modalClasses.infoSection}>
										Created By: {contact.CreatedBy && contact.CreatedBy.Name}
									</div>
									<div className={modalClasses.infoSection}>
										Created On:{' '}
										{dayjs(contact.CreatedDate).format('MMM DD, YYYY hh:mm A')}
									</div>
								</div>
								<div className={modalClasses.info}>
									<div className={modalClasses.infoSection}>
										Last Modified By:{' '}
										{contact.LastModifiedBy && contact.LastModifiedBy.Name}
									</div>
									<div className={modalClasses.infoSection}>
										Last Modified On:{' '}
										{dayjs(contact.LastModifiedDate).format(
											'MMM DD, YYYY hh:mm A'
										)}
									</div>
								</div>
							</React.Fragment>
						)}
						<Button
							className={clsx(buttonClasses.button, buttonClasses.buttonRed)}
							variant='contained'
							color='secondary'
							onClick={handleClose}
						>
							Cancel
						</Button>
						{newContact && (
							<Button
								//onClick={(e) => submitContactForm(e, 'create')}
								className={clsx(
									buttonClasses.button,
									buttonClasses.buttonOrange
								)}
								variant='contained'
								type='submit'
								name='create'
							>
								Create
							</Button>
						)}
						{!newContact && (
							<React.Fragment>
								<Button
									className={clsx(
										buttonClasses.button,
										buttonClasses.buttonRed
									)}
									variant='contained'
									onClick={deleteContact}
								>
									Delete
								</Button>
								<Button
									className={clsx(
										buttonClasses.button,
										buttonClasses.buttonOrange
									)}
									variant='contained'
									name='update'
									type='submit'
								>
									Update
								</Button>
							</React.Fragment>
						)}
					</form>
				)}
			</div>
		</Dialog>
	);
}
