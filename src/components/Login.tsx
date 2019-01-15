import React from 'react';
import { Button, Typography } from '@material-ui/core';
import * as blockstack from 'blockstack';

export const Login = () => {
  return (
    <div>
      <Typography>Looks like you are not logged in</Typography>
      <Button onClick={() => blockstack.redirectToSignIn()}>Login</Button>
    </div>
  );
};
