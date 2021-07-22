import React from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Avatar,
  CssBaseline,
  Box,
} from '@material-ui/core';
import Footer from '../Components/Footer';
import { mdiLock } from '@mdi/js';
import Icon from '@mdi/react';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  box: {
    marginTop: theme.spacing(6),
  },
}));

const MainLayout = (props) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Icon path={mdiLock} size={2} />
        </Avatar>
        <Outlet />
      </div>
      <Box mt={8}>
        <Footer />
      </Box>
    </Container>
  );
};

export default MainLayout;