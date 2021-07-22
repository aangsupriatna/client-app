import React from 'react';
import PropTypes from "prop-types";
import clsx from 'clsx';
import {
    IconButton,
    Drawer,
    Divider,
    Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SidebarItem from './SidebarItem';
import Logo from './Logo';
import Icon from '@mdi/react';
import {
    mdiAccountGroup,
    mdiAccountMultiple,
    mdiAccountPlus,
    mdiBallot,
    mdiChevronLeft,
    mdiDesktopMacDashboard,
    mdiFingerprint,
    mdiAccountSupervisorCircle,
    mdiDesktopClassic
} from '@mdi/js';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingRight: 24,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: theme.drawer.width,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(7),
        },
    },
    title: {
        flexGrow: 1,
    },
    centerMiddle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const Sidebar = (props) => {
    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            classes={{ paper: clsx(classes.drawerPaper, (!props.open) && classes.drawerPaperClose) }}
            open={props.open}
        >
            <div className={classes.toolbarIcon}>
                <Box mx='auto' className={classes.centerMiddle}><Logo /></Box>
                <IconButton onClick={props.handleDrawerClose}>
                    <Icon path={mdiChevronLeft} size={1} />
                </IconButton>
            </div>

            <Divider />

            <SidebarItem path="dashboard" title={'Dashboard'}>
                <Icon path={mdiDesktopClassic} size={1} />
            </SidebarItem>
            <SidebarItem path="projects" title={'Projects'}>
                <Icon path={mdiBallot} size={1} />
            </SidebarItem>
            <SidebarItem path="experts" title={'Experts'}>
                <Icon path={mdiAccountMultiple} size={1} />
            </SidebarItem>
            <SidebarItem path="employee" title={'Employee'}>
                <Icon path={mdiAccountGroup} size={1} />
            </SidebarItem>
            <SidebarItem path="users" title={'Users'}>
                <Icon path={mdiAccountSupervisorCircle} size={1} />
            </SidebarItem>

            <Divider />

            <SidebarItem path="/login" title={'Login'}>
                <Icon path={mdiFingerprint} size={1} />
            </SidebarItem>
            <SidebarItem path="/register" title={'Register'}>
                <Icon path={mdiAccountPlus} size={1} />
            </SidebarItem>
        </Drawer>
    )
};

Sidebar.propTypes = {
    handleDrawerClose: PropTypes.func,
    open: PropTypes.bool
}

export default Sidebar;