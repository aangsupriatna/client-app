import { Box, Container, CssBaseline, makeStyles } from '@material-ui/core';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        // background: grey[20]
    },
    container: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(4),
    },
}));

const DashboardLayout = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header handleDrawerOpen={handleDrawerOpen} open={open} />
            <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Outlet />
                    <Box pt={4}><Footer /></Box>
                </Container>
            </main>
        </div>
    )
};

export default DashboardLayout;