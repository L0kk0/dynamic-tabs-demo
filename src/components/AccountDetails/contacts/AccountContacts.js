import React from 'react';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import ContactsModal from './ContactsModal';
import EditIcon from '@material-ui/icons/Edit';
import { notesAndContactStyles } from '../../MaterialUIStyles';
import { makeStyles } from '@material-ui/core/styles';

const useNotesAndContactStyles = makeStyles((theme) =>
	notesAndContactStyles(theme)
);

export default function AccountContacts({ accountId, contacts }) {
	const classes = useNotesAndContactStyles();
	const [openContactsModal, setOpenContactsModal] = React.useState(false);
	const [newContact, setNewContact] = React.useState(false);
	const [contact, setContact] = React.useState({});

	const handleOpenContactsModal = (contact) => {
		setContact(contact);
		setOpenContactsModal(true);
	};

	const handleCloseContactsModal = () => {
		setContact({});
		setNewContact(false);
		setOpenContactsModal(false);
	};

	const createNewContact = () => {
		setNewContact(true);
		setOpenContactsModal(true);
	};

	return (
		<React.Fragment>
			<h3 className={classes.header}>
				Contacts{'     '}
				<IconButton
					aria-label='Edit Contact'
					edge='start'
					className={classes.button}
					onClick={createNewContact}
				>
					<AddCircleIcon />
				</IconButton>
			</h3>
			{contacts.map((contact) => (
				<Grid
					key={contact.id}
					container
					justifyContent='center'
					alignItems='center'
					spacing={0}
				>
					<Grid item className={classes.grid} xs={12}>
						<div
							className={classes.itemDiv}
							onClick={() => handleOpenContactsModal(contact)}
							style={{ width: '10%' }}
						>
							<IconButton className={classes.editButton}>
								<EditIcon />
							</IconButton>
						</div>
						<div className={classes.itemDiv} style={{ width: '40%' }}>
							{`${contact.Salutation} ${contact.FirstName} ${contact.LastName}`}
						</div>
						<div className={classes.itemDiv} style={{ width: '50%' }}>
							{contact.Phone}
							<br />
							{contact.Email}
						</div>
					</Grid>
				</Grid>
			))}
			<ContactsModal
				accountId={accountId}
				selectedContact={contact}
				open={openContactsModal}
				handleClose={handleCloseContactsModal}
				newContact={newContact}
				setNewContact={setContact}
			/>
		</React.Fragment>
	);
}
