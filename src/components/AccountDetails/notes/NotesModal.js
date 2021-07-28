import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import dayjs from 'dayjs';
import {
	createNoteAsync,
	updateNoteAsync,
	deleteNoteAsync,
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

export default function NotesModal({
	accountId,
	selectedNote,
	handleClose,
	open,
	newNote,
	setNewNote,
}) {
	const dispatch = useDispatch();
	const modalClasses = useModalStyles();
	const textFieldClasses = useTextFieldStyles();
	const buttonClasses = useButtonStyles();

	const [note, setNote] = React.useState({
		id: '',
		Note: '',
		CreatedBy: { id: '', Email: '' },
		CreatedDate: '',
		LastModifiedBy: { id: '', Email: '' },
		LastModifiedDate: '',
	});

	const handleChange = (event) => {
		setNote({ ...note, [event.target.name]: event.target.value });
	};

	useEffect(() => {
		setNote({
			id: selectedNote.id || '',
			Note: selectedNote.Note || '',
			CreatedBy: selectedNote.CreatedBy || {},
			CreatedDate: selectedNote.CreatedDate || '',
			LastModifiedBy: selectedNote.LastModifiedBy || {},
			LastModifiedDate: selectedNote.LastModifiedDate || '',
		});
		// eslint-disable-next-line
	}, [selectedNote]);

	const submitNoteForm = (e) => {
		e.preventDefault();
		const submitter = e.nativeEvent.submitter.name;

		if (submitter === 'create') {
			dispatch(createNoteAsync(accountId, note));
			setNewNote(false);
			handleClose();
		}

		if (submitter === 'update') {
			dispatch(updateNoteAsync(accountId, note));
			handleClose();
		}
	};

	const deleteNote = () => {
		dispatch(deleteNoteAsync(accountId, note.id));
		handleClose();
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			TransitionComponent={Transition}
			keepMounted
			fullWidth={true}
		>
			<div className={modalClasses.paperModal}>
				<h2>{newNote ? 'Create' : 'Update'} Note</h2>
				{note && (
					<form onSubmit={submitNoteForm}>
						<Grid container spacing={1} className={modalClasses.gridContainer}>
							<Grid item className={textFieldClasses.textFieldGridItem} xs={12}>
								<TextField
									InputLabelProps={{
										classes: {
											root: textFieldClasses.textFieldLabelRoot,
											focused: textFieldClasses.textFieldLabelMultiLineFocused,
											shrink: textFieldClasses.textFieldLabelMultiLineShrink,
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
									label='Notes'
									variant='outlined'
									multiline
									rows={20}
									color='primary'
									name='Note'
									value={note.Note}
									onChange={handleChange}
								/>
							</Grid>
						</Grid>
						{!newNote && (
							<React.Fragment>
								<div className={modalClasses.info}>
									<div className={modalClasses.infoSection}>
										Created By: {note.CreatedBy && note.CreatedBy.Name}
									</div>
									<div className={modalClasses.infoSection}>
										Created On:{' '}
										{dayjs(note.CreatedDate).format('MMM DD, YYYY hh:mm A')}
									</div>
								</div>
								<div className={modalClasses.info}>
									<div className={modalClasses.infoSection}>
										Last Modified By:{' '}
										{note.LastModifiedBy && note.LastModifiedBy.Name}
									</div>
									<div className={modalClasses.infoSection}>
										Last Modified On:{' '}
										{dayjs(note.LastModifiedDate).format(
											'MMM DD, YYYY hh:mm A'
										)}
									</div>
								</div>
							</React.Fragment>
						)}
						<Button
							className={clsx(buttonClasses.button, buttonClasses.buttonYellow)}
							variant='contained'
							color='secondary'
							onClick={handleClose}
						>
							Cancel
						</Button>
						{newNote && (
							<Button
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
						{!newNote && (
							<React.Fragment>
								<Button
									className={clsx(
										buttonClasses.button,
										buttonClasses.buttonRed
									)}
									variant='contained'
									onClick={deleteNote}
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
