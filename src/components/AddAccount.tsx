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
import { addAccount, File } from '../utils/accounts';

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
  setFile: (file: File) => void;
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
  const [errors, setErrors] = useState({
    name: false,
    secret: false,
  });

  const handleChange = (name: string) => (event: any) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = async () => {
    setErrors({ name: false, secret: false });

    if (!values.name || values.name === '') {
      setErrors({ ...errors, name: true });
      return;
    }
    if (!values.secret || values.secret === '') {
      setErrors({ ...errors, secret: true });
      return;
    }
    try {
      // TODO loading while adding the account
      const file = await addAccount(values);

      setValues({
        name: '',
        secret: '',
      });
      props.setFile(file);
      props.onClose();
    } catch (error) {
      alert(error.message);
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
              error={errors.name}
            />

            <TextField
              id="secret"
              label="Key"
              value={values.secret}
              onChange={handleChange('secret')}
              margin="normal"
              error={errors.secret}
            />
          </form>
        </Grid>
      </Grid>
    </Dialog>
  );
};
