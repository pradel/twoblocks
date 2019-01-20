import React, { useState } from 'react';
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
import { Loader } from './Loader';

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
  const [loading, setLoading] = useState(false);

  const reset = () => {
    setLoading(false);
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      const file = await removeAccount(accountIndex);
      onClose();
      reset();
      setFile(file);
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete {account.name}?</DialogTitle>
      {loading && <Loader />}
      {!loading && (
        <DialogContent>
          <DialogContentText>
            Do you really want to delete {account.name}?
          </DialogContentText>
        </DialogContent>
      )}
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
