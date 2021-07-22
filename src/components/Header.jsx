import React from 'react';
import { AppBar, Badge, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import { mdiBell, mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SearchInput from './Search';
import MenuHeader from './MenuHeader';

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: theme.drawer.width,
        width: `calc(100% - ${theme.drawer.width}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <AppBar position="absolute" className={clsx(classes.appBar, (props.open) && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    className={clsx(classes.menuButton, (props.open) && classes.menuButtonHidden)}
                >
                    <Icon path={mdiMenu} size={1} />
                </IconButton>
                <SearchInput />
                <div className={classes.title}></div>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <Icon path={mdiBell} size={1} />
                    </Badge>
                </IconButton>
                <MenuHeader />
            </Toolbar>
        </AppBar>
    )
};

Header.propTypes = {
    handleDrawerOpen: PropTypes.func,
    open: PropTypes.bool
}

export default Header;