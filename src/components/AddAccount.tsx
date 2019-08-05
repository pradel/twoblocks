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
  Theme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { addAccount, File } from '../utils/accounts';
import { Loader } from './Loader';
import { icons } from '../utils/icons';

const useStyles = makeStyles((theme: Theme) => ({
  flex: {
    flex: 1,
  },
  loadingContainer: {
    marginTop: 56 + theme.spacing(2),
  },
  container: {
    marginTop: 56,
  },
  formContainer: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  formControlIcon: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  selectMenuIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  iconImage: {
    marginRight: theme.spacing(2),
  },
}));

interface Props {
  open: boolean;
  onClose: () => void;
  setFile: (file: File) => void;
}

function Transition(props: any) {
  return <Slide direction="up" {...props} />;
}

export const AddAccount = (props: Props) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: '',
    secret: '',
    icon: undefined,
  });
  const [errors, setErrors] = useState({
    name: false,
    secret: false,
  });
  const [loading, setLoading] = useState(false);

  const reset = () => {
    setValues({
      name: '',
      secret: '',
      icon: undefined,
    });
    setErrors({ name: false, secret: false });
    setLoading(false);
  };

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
      setLoading(true);
      const file = await addAccount(values);

      reset();
      props.setFile(file);
      props.onClose();
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  };

  return (
    <Dialog fullScreen open={props.open} TransitionComponent={Transition}>
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
          <Button color="inherit" onClick={handleSubmit} disabled={loading}>
            save
          </Button>
        </Toolbar>
      </AppBar>

      {loading && <Loader className={classes.loadingContainer} />}

      {!loading && (
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12}>
            <form
              className={classes.formContainer}
              noValidate
              autoComplete="off"
            >
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

              <FormControl className={classes.formControlIcon}>
                <InputLabel htmlFor="icon">Icon</InputLabel>
                <Select
                  value={values.icon}
                  onChange={handleChange('icon')}
                  inputProps={{
                    id: 'icon',
                  }}
                  classes={{
                    selectMenu: classes.selectMenuIcon,
                  }}
                >
                  {Object.keys(icons).map(key => (
                    <MenuItem key={key} value={key}>
                      <img
                        width="25"
                        src={icons[key].url}
                        alt={key}
                        className={classes.iconImage}
                      />
                      {icons[key].name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </form>
          </Grid>
        </Grid>
      )}
    </Dialog>
  );
};
