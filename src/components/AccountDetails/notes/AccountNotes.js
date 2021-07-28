import React from 'react';
import NotesModal from './NotesModal';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import dayjs from 'dayjs';
import { notesAndContactStyles } from '../../MaterialUIStyles';
import { makeStyles } from '@material-ui/core/styles';

const useNotesAndContactStyles = makeStyles((theme) =>
	notesAndContactStyles(theme)
);
export default function AccountNotes({ accountId, notes }) {
	const classes = useNotesAndContactStyles();
	const [openNotesModal, setOpenNotesModal] = React.useState(false);
	const [newNote, setNewNote] = React.useState(false);
	const [note, setNote] = React.useState({});

	const handleOpenNotesModal = (note) => {
		setNote(note);
		setOpenNotesModal(true);
	};

	const handleCloseNotesModal = () => {
		setNote({});
		setNewNote(false);
		setOpenNotesModal(false);
	};

	const createNewNote = () => {
		setNewNote(true);
		setOpenNotesModal(true);
	};

	return (
		<div>
			<h3 className={classes.header}>
				Notes{'     '}
				<IconButton
					aria-label='Edit Contact'
					edge='start'
					className={classes.button}
					onClick={createNewNote}
				>
					<AddCircleIcon />
				</IconButton>
			</h3>
			{notes.map((note) => (
				<Grid
					key={note.id}
					container
					justifyContent='center'
					alignItems='center'
					spacing={0}
				>
					<Grid item className={classes.grid} xs={12}>
						<div
							className={classes.itemDiv}
							onClick={() => handleOpenNotesModal(note)}
							style={{ width: '10%' }}
						>
							<IconButton className={classes.editButton}>
								<EditIcon />
							</IconButton>
						</div>
						<div className={classes.itemDiv} style={{ width: '40%' }}>
							{`${note.Note}`}
						</div>
						<div className={classes.itemDiv} style={{ width: '50%' }}>
							<div>Created By: {note.CreatedBy.Name}</div>
							<div>
								{dayjs(note.CreatedDate).format('MMM DD, YYYY hh:mm A')}
							</div>
							<br />
							<div>Last Modified By: {note.LastModifiedBy.Name}</div>
							<div>
								{dayjs(note.LastModifiedDate).format('MMM DD, YYYY hh:mm A')}
							</div>
						</div>
					</Grid>
				</Grid>
			))}
			<NotesModal
				accountId={accountId}
				selectedNote={note}
				open={openNotesModal}
				handleClose={handleCloseNotesModal}
				newNote={newNote}
				setNewNote={setNewNote}
			/>
		</div>
	);
}
