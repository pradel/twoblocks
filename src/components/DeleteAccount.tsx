import React, { useState, useContext } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';
import { Account } from '../types';
import { Loader } from './Loader';
import { FileContext } from '../context/FileContext';

interface Props {
  open: boolean;
  onClose: () => void;
  account: Account;
  accountIndex: number;
}

export const DeleteAccount = ({
  open,
  onClose,
  account,
  accountIndex,
}: Props) => {
  const { removeAccount } = useContext(FileContext);

  const [loading, setLoading] = useState(false);

  const reset = () => {
    setLoading(false);
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await removeAccount(accountIndex);
      onClose();
      reset();
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
        <Button onClick={onClose} color="primary" disabled={loading}>
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          color="primary"
          autoFocus
          disabled={loading}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
