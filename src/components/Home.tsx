import React, { useState, useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  CircularProgress,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Theme,
  Link,
} from '@material-ui/core';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import { MoreVert, Keyboard, PhotoCamera } from '@material-ui/icons';
import { AccountList } from './AccountList';
import { AddAccount } from './AddAccount';
import { AddAccountScan } from './AddAccountScan';
import { ThemeContext } from '../context/ThemeContext';
import { FileContext } from '../context/FileContext';
import { userSession } from '../utils/blockstack';

const useStyles = makeStyles((theme: Theme) => ({
  flex: {
    flex: 1,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  container: {
    marginTop: 56,
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  emptyContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    flexDirection: 'column',
  },
  emptyImage: {
    height: 130,
    maxWidth: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  linkDivider: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

interface Props {
  setTheme: (theme: 'light' | 'dark') => void;
}

export const Home = ({ setTheme }: Props) => {
  const classes = useStyles();

  const theme = useContext(ThemeContext);
  const { file } = useContext(FileContext);

  const [speedDialOpen, setSpeedDialOpen] = useState(false);
  const [addAccountScanOpen, setAddAccountScanOpen] = useState(false);
  const [addAccountModalOpen, setAddAccountModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const menuOpen = Boolean(anchorEl);

  const handleSpeedDialClick = () => {
    setSpeedDialOpen(!speedDialOpen);
  };

  const handleSpeedDialClose = () => {
    setSpeedDialOpen(false);
  };

  const handleSelectCamera = () => {
    handleSpeedDialClose();
    setAddAccountScanOpen(true);
  };

  const handleSelectManual = () => {
    handleSpeedDialClose();
    setAddAccountModalOpen(true);
  };

  const handleSelectLightTheme = () => {
    setTheme('light');
    setAnchorEl(null);
  };

  const handleSelectDarkTheme = () => {
    setTheme('dark');
    setAnchorEl(null);
  };

  const handleLogout = () => {
    userSession.signUserOut(window.location.origin);
  };

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            Twoblocks
          </Typography>

          <IconButton
            aria-owns={anchorEl ? 'main-menu' : undefined}
            aria-haspopup="true"
            onClick={event => setAnchorEl(event.currentTarget)}
            color="inherit"
          >
            <MoreVert fontSize="small" />
          </IconButton>
          <Menu
            id="main-menu"
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={() => setAnchorEl(null)}
          >
            {theme === 'dark' && (
              <MenuItem onClick={handleSelectLightTheme}>Light theme</MenuItem>
            )}
            {theme === 'light' && (
              <MenuItem onClick={handleSelectDarkTheme}>Dark theme</MenuItem>
            )}
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Grid container className={classes.container}>
        {!file && (
          <Grid item xs={12} className={classes.loadingContainer}>
            <CircularProgress />
          </Grid>
        )}

        {file && file.accounts.length === 0 && (
          <Grid item xs={12} className={classes.emptyContainer}>
            <img
              src="/undraw_authentication_fsn5.svg"
              alt="authentication illustration"
              className={classes.emptyImage}
            />
            <Typography gutterBottom align="center">
              Empty account list
            </Typography>
            <Typography variant="caption" align="center">
              Use the + button to add a new account
            </Typography>
          </Grid>
        )}

        {file && (
          <Grid item xs={12}>
            <AccountList file={file} />
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography gutterBottom align="center">
            <Link href="https://twitter.com/leopradel">Twitter</Link>
            <span className={classes.linkDivider}>|</span>
            <Link href="https://github.com/pradel/twoblocks">Github</Link>
            <span className={classes.linkDivider}>|</span>
            <Link
              href={`https://github.com/pradel/twoblocks/commit/${process.env.REACT_APP_COMMIT_REF}`}
            >
              {process.env.NODE_ENV === 'development'
                ? 'development'
                : `${process.env.REACT_APP_COMMIT_REF &&
                    process.env.REACT_APP_COMMIT_REF.substring(0, 6)}...`}
            </Link>
          </Typography>
        </Grid>
      </Grid>

      <AddAccount
        open={addAccountModalOpen}
        onClose={() => setAddAccountModalOpen(false)}
      />

      <AddAccountScan
        open={addAccountScanOpen}
        onClose={() => setAddAccountScanOpen(false)}
      />

      {file && (
        <SpeedDial
          ariaLabel="Actions"
          className={classes.fab}
          icon={<SpeedDialIcon />}
          open={speedDialOpen}
          onClick={handleSpeedDialClick}
          onClose={handleSpeedDialClose}
        >
          <SpeedDialAction
            icon={<PhotoCamera />}
            tooltipTitle="Scan a barcode"
            tooltipOpen
            onClick={handleSelectCamera}
          />
          <SpeedDialAction
            icon={<Keyboard />}
            tooltipTitle="Enter manually"
            tooltipOpen
            onClick={handleSelectManual}
          />
        </SpeedDial>
      )}
    </React.Fragment>
  );
};
