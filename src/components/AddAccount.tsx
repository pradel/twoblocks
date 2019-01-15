import React, { useState } from 'react';
import {
  Dialog,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Button,
  TextField,
} from '@material-ui/core';
import { SlideProps } from '@material-ui/core/Slide';
import { ArrowBack } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { addAccount } from '../utils/accounts';

const useStyles = makeStyles(theme => ({
  flex: {
    flex: 1,
  },
  container: {
    marginTop: 56,
  },
  formContainer: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
  },
}));

interface Props {
  open: boolean;
  onClose: () => void;
}

function Transition(props: SlideProps) {
  return <Slide direction="up" {...props} />;
}

export const AddAccount = (props: Props) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: '',
    secret: '',
  });

  const handleChange = (name: string) => (event: any) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = async () => {
    // TODO validation messages
    if (values.name !== '' && values.secret !== '') {
      try {
        const file = await addAccount(values);
        // TODO update main store, use context ?
        props.onClose();
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <Dialog
      fullScreen
      open={props.open}
      onClose={props.onClose}
      TransitionComponent={Transition}
    >
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={props.onClose}
            aria-label="Close"
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            Enter account details
          </Typography>
          <Button color="inherit" onClick={handleSubmit}>
            save
          </Button>
        </Toolbar>
      </AppBar>

      <Grid container spacing={24} className={classes.container}>
        <Grid item xs={12}>
          <form className={classes.formContainer} noValidate autoComplete="off">
            <TextField
              id="name"
              label="Account name"
              value={values.name}
              onChange={handleChange('name')}
              margin="normal"
            />

            <TextField
              id="secret"
              label="Key"
              value={values.secret}
              onChange={handleChange('secret')}
              margin="normal"
            />
          </form>
        </Grid>
      </Grid>
    </Dialog>
  );
};
