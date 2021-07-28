import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	accounts: null,
};

export const accountSlice = createSlice({
	name: 'accounts',
	initialState,
	reducers: {
		getAccounts: (state, action) => {
			state.accounts = action.payload;
		},
		createAccount: (state, action) => {
			state.accounts.push(action.payload);

			state.accounts.sort(function (a, b) {
				if (a.Name < b.Name) {
					return -1;
				}
				if (a.Name > b.Name) {
					return 1;
				}
				return 0;
			});
		},
		updateAccount: (state, action) => {
			const index = state.accounts.findIndex(
				(account) => account.id === action.payload.id
			);

			state.accounts[index] = action.payload;
		},
		deleteAccount: (state, action) => {
			state.accounts = state.accounts.filter(
				(account) => account.id !== action.payload
			);
		},
		createContact: (state, action) => {
			const accountIndex = state.accounts.findIndex(
				(account) => account.id === action.payload.accountId
			);

			const now = new Date(Date.now());

			let account = {
				...state.accounts[accountIndex],
				LastModifiedDate: now.toISOString(),
				LastModifiedBy: {
					id: '001100010010011110100001101101110011',
					Name: 'Demo User',
				},
			};

			let contact = {
				id: uuidv4(),
				Salutation: action.payload.contact.Salutation,
				FirstName: action.payload.contact.FirstName,
				LastName: action.payload.contact.LastName,
				Phone: action.payload.contact.Phone,
				MobilePhone: action.payload.contact.MobilePhone,
				Email: action.payload.contact.Email,
				CreatedDate: now.toISOString(),
				CreatedBy: {
					id: '001100010010011110100001101101110011',
					Name: 'Demo User',
				},
				LastModifiedDate: now.toISOString(),
				LastModifiedBy: {
					id: '001100010010011110100001101101110011',
					Name: 'Demo User',
				},
			};
			account.Contacts.unshift(contact);

			state.accounts.splice(accountIndex, 1, account);
		},
		updateContact: (state, action) => {
			const accountIndex = state.accounts.findIndex(
				(account) => account.id === action.payload.accountId
			);

			const contactIndex = state.accounts[accountIndex].Contacts.findIndex(
				(contact) => contact.id === action.payload.contact.id
			);

			const now = new Date(Date.now());

			let account = {
				...state.accounts[accountIndex],
				LastModifiedDate: now.toISOString(),
				LastModifiedBy: {
					id: '001100010010011110100001101101110011',
					Name: 'Demo User',
				},
			};

			let contact = {
				...state.accounts[accountIndex].Contacts[contactIndex],
				Salutation: action.payload.contact.Salutation,
				FirstName: action.payload.contact.FirstName,
				LastName: action.payload.contact.LastName,
				Phone: action.payload.contact.Phone,
				MobilePhone: action.payload.contact.MobilePhone,
				Email: action.payload.contact.Email,
				LastModifiedDate: now.toISOString(),
				LastModifiedBy: {
					id: '001100010010011110100001101101110011',
					Name: 'Demo User',
				},
			};

			account.Contacts[contactIndex] = contact;
			state.accounts[accountIndex] = account;
		},
		deleteContact: (state, action) => {
			const accountIndex = state.accounts.findIndex(
				(account) => account.id === action.payload.accountId
			);

			const contactIndex = state.accounts[accountIndex].Contacts.findIndex(
				(contact) => contact.id === action.payload.contactId
			);

			state.accounts[accountIndex].Contacts.splice(contactIndex, 1);
		},
		createNote: (state, action) => {
			const accountIndex = state.accounts.findIndex(
				(account) => account.id === action.payload.accountId
			);

			const now = new Date(Date.now());

			let account = {
				...state.accounts[accountIndex],
				LastModifiedDate: now.toISOString(),
				LastModifiedBy: {
					id: '001100010010011110100001101101110011',
					Name: 'Demo User',
				},
			};

			let note = {
				id: uuidv4(),
				Note: action.payload.note.Note,
				CreatedDate: now.toISOString(),
				CreatedBy: {
					id: '001100010010011110100001101101110011',
					Name: 'Demo User',
				},
				LastModifiedDate: now.toISOString(),
				LastModifiedBy: {
					id: '001100010010011110100001101101110011',
					Name: 'Demo User',
				},
			};
			account.Notes.unshift(note);

			state.accounts.splice(accountIndex, 1, account);
		},
		updateNote: (state, action) => {
			const accountIndex = state.accounts.findIndex(
				(account) => account.id === action.payload.accountId
			);

			const noteIndex = state.accounts[accountIndex].Notes.findIndex(
				(note) => note.id === action.payload.note.id
			);

			const now = new Date(Date.now()).toISOString();

			let account = {
				...state.accounts[accountIndex],
				LastModifiedDate: now,
				LastModifiedBy: {
					id: '001100010010011110100001101101110011',
					Name: 'Demo User',
				},
			};

			let note = {
				...state.accounts[accountIndex].Notes[noteIndex],
				Note: action.payload.note.Note,
				LastModifiedDate: now,
				LastModifiedBy: {
					id: '001100010010011110100001101101110011',
					Name: 'Demo User',
				},
			};

			account.Notes[noteIndex] = note;
			state.accounts[accountIndex] = account;
		},
		deleteNote: (state, action) => {
			const accountIndex = state.accounts.findIndex(
				(account) => account.id === action.payload.accountId
			);

			const noteIndex = state.accounts[accountIndex].Notes.findIndex(
				(note) => note.id === action.payload.noteId
			);

			state.accounts[accountIndex].Notes.splice(noteIndex, 1);
		},
	},
});

export const {
	getAccounts,
	createAccount,
	updateAccount,
	deleteAccount,
	createContact,
	updateContact,
	deleteContact,
	createNote,
	updateNote,
	deleteNote,
} = accountSlice.actions;

export const selectCurrentAccount = (state) => {
	return state.accounts.accounts.find(
		(account) => account.id === state.tabs.currentTab.id
	);
};

export const selectAccounts = (state) => state.accounts.accounts;

// Load Accounts Async
export const getAccountsAsync = () => async (dispatch) => {
	fetch('/data/crm.json', {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			json.sort(function (a, b) {
				if (a.Name < b.Name) {
					return -1;
				}
				if (a.Name > b.Name) {
					return 1;
				}
				return 0;
			});
			dispatch(getAccounts(json));
		})
		.catch((error) => {
			console.log(error);
		});
};

// Create Account Async
export const createAccountAsync = (account) => async (dispatch) => {
	dispatch(createAccount(account));
};

// Update Account Async
export const updateAccountAsync = (account) => async (dispatch) => {
	let updatedAccount = {
		...account,
		LastModifiedDate: new Date(Date.now()).toISOString(),
		LastModifiedBy: {
			id: '001100010010011110100001101101110011',
			Name: 'Demo User',
		},
	};
	dispatch(updateAccount(updatedAccount));
};

// Delete Account Async
export const deleteAccountAsync = (id) => async (dispatch) => {
	dispatch(deleteAccount(id));
};

// Create Contact Async
export const createContactAsync = (accountId, contact) => async (dispatch) => {
	dispatch(createContact({ accountId: accountId, contact: contact }));
};

// Update Contact Async
export const updateContactAsync = (accountId, contact) => async (dispatch) => {
	dispatch(updateContact({ accountId: accountId, contact: contact }));
};

// Delete Contact Async
export const deleteContactAsync =
	(accountId, contactId) => async (dispatch) => {
		dispatch(deleteContact({ accountId: accountId, contactId: contactId }));
	};

// Create Note Async
export const createNoteAsync = (accountId, note) => async (dispatch) => {
	dispatch(createNote({ accountId: accountId, note: note }));
};

// Update Note Async
export const updateNoteAsync = (accountId, note) => async (dispatch) => {
	dispatch(updateNote({ accountId: accountId, note: note }));
};

// Delete Note Async
export const deleteNoteAsync = (accountId, noteId) => async (dispatch) => {
	dispatch(deleteNote({ accountId: accountId, noteId: noteId }));
};

export default accountSlice.reducer;
