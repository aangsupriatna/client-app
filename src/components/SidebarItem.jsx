import React from 'react';
import PropTypes from 'prop-types';
import {
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core';
import { matchPath, matchRoutes, useLocation, useNavigate } from 'react-router';

const SidebarItem = (props) => {
    const location = useLocation();
    // const isActive = matchRoutes(props.path, location.pathname);
    const navigate = useNavigate();
    const isActive = false
    const selected = isActive ? true : false;

    const handleListItem = () => {
        navigate(props.path)
    }

    return (
        <ListItem selected={selected} button onClick={handleListItem} path={props.path}>
            <ListItemIcon>
                {props.children}
            </ListItemIcon>
            <ListItemText primary={props.title} />
        </ListItem>
    )
}

SidebarItem.propTypes = {
    path: PropTypes.string,
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
}

export default SidebarItem;