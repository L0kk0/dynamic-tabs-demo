import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { getAccountsAsync, selectAccounts } from '../../redux/accountSlice';
import TablePagination from '@material-ui/core/TablePagination';
import AccountGridItem from './AccountGridItem';
import Button from '@material-ui/core/Button';
import NewAccountModal from './NewAccountModal';
import { tabPanelStyles, buttonStyles } from '../MaterialUIStyles';
import clsx from 'clsx';

const useTabPanelStyles = makeStyles((theme) => tabPanelStyles(theme));
const useButtonStyles = makeStyles((theme) => buttonStyles(theme));

export default function AccountsTable() {
	const tabPanelClasses = useTabPanelStyles();
	const buttonClasses = useButtonStyles();
	const dispatch = useDispatch();
	const accounts = useSelector(selectAccounts);

	useEffect(() => {
		if (!accounts) {
			dispatch(getAccountsAsync());
		}
	}, [accounts, dispatch]);

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(1);
	};

	let accountsToDisplay;

	if (accounts) {
		if (page === 0) {
			accountsToDisplay = accounts.slice(0, (page + 1) * rowsPerPage);
		} else {
			accountsToDisplay = accounts.slice(
				page * rowsPerPage,
				(page + 1) * rowsPerPage
			);
		}
	}

	const [openAccountModal, setOpenAccountModal] = React.useState(false);
	const handleOpenAccountModal = () => {
		setOpenAccountModal(true);
	};

	const handleCloseAccountModal = () => {
		setOpenAccountModal(false);
	};
	return (
		<div className={tabPanelClasses.tabPanel}>
			<div className={tabPanelClasses.tabContent}>
				<Button
					className={clsx(buttonClasses.button, buttonClasses.buttonOrange)}
					variant='contained'
					onClick={handleOpenAccountModal}
				>
					Create Account
				</Button>
				<NewAccountModal
					open={openAccountModal}
					handleClose={handleCloseAccountModal}
				/>
				{accounts && (
					<TablePagination
						className={buttonClasses.pagination}
						classes={
							{
								//root: classes.pagination,
								//menuItem: classes.menuItem,
								//caption: classes.menuItem,
								//selectIcon: classes.selectIcon,
							}
						}
						component='div'
						count={accounts.length}
						page={page}
						onPageChange={handleChangePage}
						rowsPerPage={rowsPerPage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				)}
				{accounts &&
					accountsToDisplay.map((account) => (
						<AccountGridItem key={account.id} account={account} />
					))}
				{accounts && (
					<TablePagination
						className={buttonClasses.pagination}
						classes={{
							root: buttonClasses.pagination,
							menuItem: buttonClasses.ul,
							selectIcon: buttonClasses.selectIcon,
						}}
						component='div'
						count={accounts.length}
						page={page}
						onPageChange={handleChangePage}
						rowsPerPage={rowsPerPage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				)}
			</div>
		</div>
	);
}
