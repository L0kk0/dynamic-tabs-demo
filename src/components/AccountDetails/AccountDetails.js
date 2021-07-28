import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { updateAccountAsync } from '../../redux/accountSlice';
import AccountInfoSection from './AccountInfoSection';
import Button from '@material-ui/core/Button';
import { textFieldStyles, buttonStyles } from '../MaterialUIStyles';
import clsx from 'clsx';

const useTextFieldStyles = makeStyles((theme) => textFieldStyles(theme));
const useButtonStyles = makeStyles((theme) => buttonStyles(theme));

export default function AccountGrid({ account, currentAccount, setAccount }) {
	const dispatch = useDispatch();
	const textFieldClasses = useTextFieldStyles();
	const buttonClasses = useButtonStyles();

	const handleChange = (event) => {
		setAccount({ ...account, [event.target.name]: event.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(updateAccountAsync(account));
	};

	return (
		<form onSubmit={onSubmit}>
			<Grid container spacing={0}>
				<Grid
					item
					className={textFieldClasses.textFieldGridItem}
					xs={12}
					sm={12}
					md={6}
					lg={3}
					xl={3}
				>
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
				<Grid
					item
					className={textFieldClasses.textFieldGridItem}
					xs={12}
					sm={12}
					md={6}
					lg={3}
					xl={3}
				>
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
				<Grid
					item
					className={textFieldClasses.textFieldGridItem}
					xs={12}
					sm={12}
					md={6}
					lg={3}
					xl={3}
				>
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
				<Grid
					item
					className={textFieldClasses.textFieldGridItem}
					xs={12}
					sm={12}
					md={6}
					lg={3}
					xl={3}
				>
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
			<AccountInfoSection account={account} />
			<div className={buttonClasses.buttonContainer}>
				<Button
					className={clsx(buttonClasses.button, buttonClasses.buttonOrange)}
					variant='contained'
					name='update'
					type='submit'
				>
					Update Account
				</Button>
			</div>
		</form>
	);
}
