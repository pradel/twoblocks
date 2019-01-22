import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  CircularProgress,
  Grid,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import { MoreVert, Keyboard, PhotoCamera } from '@material-ui/icons';
import * as blockstack from 'blockstack';
import { getFile, File } from '../utils/accounts';
import { AccountList } from './AccountList';
import { AddAccount } from './AddAccount';

const useStyles = makeStyles(theme => ({
  flex: {
    flex: 1,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  container: {
    marginTop: 56,
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing.unit * 2,
  },
}));

export const Home = () => {
  const classes = useStyles();
  const [file, setFile] = useState<null | File>(null);
  const [speedDialOpen, setSpeedDialOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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
  };

  const handleSelectManual = () => {
    handleSpeedDialClose();
    setModalOpen(true);
  };

  useEffect(() => {
    getFile()
      .then(file => {
        setFile(file);
      })
      .catch(error => {
        alert(error.message);
      });
  }, [false]);

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
            <MenuItem
              onClick={() => blockstack.signUserOut(window.location.origin)}
            >
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Grid container className={classes.container}>
        {!file && (
          <Grid item xs={12} className={classes.loadingContainer}>
            <CircularProgress />
          </Grid>
        )}

        {file && (
          <Grid item xs={12}>
            <AccountList file={file} setFile={setFile} />
          </Grid>
        )}
      </Grid>

      <AddAccount
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        setFile={setFile}
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
            onClick={handleSelectCamera}
          />
          <SpeedDialAction
            icon={<Keyboard />}
            tooltipTitle="Enter manually"
            onClick={handleSelectManual}
          />
        </SpeedDial>
      )}
    </React.Fragment>
  );
};
