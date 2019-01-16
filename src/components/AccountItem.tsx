import React, { useState } from 'react';
import {
  Typography,
  Paper,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { MoreVert } from '@material-ui/icons';
import * as speakeasy from 'speakeasy';
import { Account } from '../types';

const useStyles = makeStyles(theme => ({
  flex: {
    flex: 1,
  },
  container: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'row',
  },
  timer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  menuIconButton: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit,
  },
}));

interface Props {
  account: Account;
  remainingSeconds: number;
}

export const AccountItem = (props: Props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  return (
    <Paper elevation={1} className={classes.container}>
      <div className={classes.flex}>
        <Typography>{props.account.name}</Typography>
        <Typography variant="headline">
          {speakeasy.totp({ secret: props.account.secret })}
        </Typography>
      </div>
      <div className={classes.timer}>
        <IconButton
          aria-owns={anchorEl ? 'account-menu' : undefined}
          aria-haspopup="true"
          onClick={event => setAnchorEl(event.currentTarget)}
          className={classes.menuIconButton}
        >
          <MoreVert fontSize="small" />
        </IconButton>
        <Menu
          id="account-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => null}>Edit</MenuItem>
          <MenuItem onClick={() => null}>Delete</MenuItem>
        </Menu>
        <Typography>{props.remainingSeconds}</Typography>
      </div>
    </Paper>
  );
};
