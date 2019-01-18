import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';
import { removeAccount, File } from '../utils/accounts';
import { Account } from '../types';

interface Props {
  open: boolean;
  onClose: () => void;
  setFile: (file: File) => void;
  account: Account;
  accountIndex: number;
}

export const DeleteAccount = ({
  open,
  onClose,
  setFile,
  account,
  accountIndex,
}: Props) => {
  const handleDelete = async () => {
    // TODO try catch
    // TODO loading during account deletion
    const file = await removeAccount(accountIndex);
    onClose();
    setFile(file);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete {account.name}?</DialogTitle>
      <DialogContent>
        <DialogContentText>TODO text</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDelete} color="primary" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
