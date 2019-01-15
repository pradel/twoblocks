import React from 'react';
import { Typography, Paper, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Edit } from '@material-ui/icons';
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
}));

interface Props {
  account: Account;
  remainingSeconds: number;
}

export const AccountItem = (props: Props) => {
  const classes = useStyles();

  return (
    <Paper elevation={1} className={classes.container}>
      <div className={classes.flex}>
        <Typography>{props.account.name}</Typography>
        <Typography variant="headline">
          {speakeasy.totp({ secret: props.account.secret })}
        </Typography>
      </div>
      <div className={classes.timer}>
        <IconButton>
          <Edit fontSize="small" />
        </IconButton>
        <Typography>{props.remainingSeconds}</Typography>
      </div>
    </Paper>
  );
};
