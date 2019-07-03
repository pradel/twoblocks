import React, { useState, useContext } from 'react';
import {
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Theme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { MoreVert } from '@material-ui/icons';
import { Account } from '../types';
import { DeleteAccount } from './DeleteAccount';
import { File } from '../utils/accounts';
import { ThemeContext } from '../utils/theme';

const useStyles = makeStyles((theme: Theme) => ({
  leftContainer: {
    flex: 1,
    marginTop: theme.spacing(),
  },
  name: {
    marginBottom: theme.spacing(),
  },
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(),
    paddingBottom: theme.spacing(),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.palette.background.paper,
  },
  timer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

interface Props {
  index: number;
  account: Account;
  remainingSeconds: number;
  setFile: (file: File) => void;
}

export const AccountItem = (props: Props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const theme = useContext(ThemeContext);

  const handleRequestDelete = () => {
    setAnchorEl(null);
    setDeleteModalOpen(true);
  };

  let code;
  try {
    code = otplib.authenticator.generate(props.account.secret); // eslint-disable-line
    // Insert a space in the middle of the code for better readability
    code = [code.slice(0, 3), ' ', code.slice(3)].join('');
  } catch (error) {
    code = error.message;
  }

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          <Typography variant="caption" className={classes.name}>
            {props.account.name}
          </Typography>
          <Typography
            variant="h5"
            color={theme === 'light' ? 'primary' : 'initial'}
          >
            {code}
          </Typography>
        </div>
        <div className={classes.timer}>
          <IconButton
            aria-owns={anchorEl ? 'account-menu' : undefined}
            aria-haspopup="true"
            onClick={event => setAnchorEl(event.currentTarget)}
          >
            <MoreVert fontSize="small" />
          </IconButton>
          <Menu
            id="account-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            {/* <MenuItem onClick={() => null}>Edit</MenuItem> */}
            <MenuItem onClick={handleRequestDelete}>Delete</MenuItem>
          </Menu>
          <Typography>{props.remainingSeconds}</Typography>
        </div>
      </div>

      <DeleteAccount
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        accountIndex={props.index}
        account={props.account}
        setFile={props.setFile}
      />
    </React.Fragment>
  );
};
