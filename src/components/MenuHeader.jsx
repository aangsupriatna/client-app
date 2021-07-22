import React from 'react';
import {
    IconButton,
    List,
    ListSubheader,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiAccountCircle, mdiExitToApp, mdiInbox } from '@mdi/js';
import { useNavigate } from 'react-router';
import { delToken } from '../util/Token';
import UserAvatar from './Avatar';
import PoperHeader from './PoperHeader';

const MenuHeader = (props) => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopup = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopupClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = () => {
        delToken()
        navigate("/login");
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <React.Fragment>
            <IconButton aria-describedby={id} color="inherit" onClick={handlePopup} aria-controls="simple-menu" aria-haspopup="true">
                <UserAvatar />
            </IconButton>
            <PoperHeader id={id} open={open} anchorEl={anchorEl} handlePopupClose={handlePopupClose}>
                <List component="nav" subheader={<ListSubheader component="div">Personalization</ListSubheader>} dense>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon path={mdiInbox} size={1} />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon path={mdiAccountCircle} size={1} />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                </List>
                <Divider />
                <List component="nav" dense>
                    <ListItem button onClick={handleSignOut}>
                        <ListItemIcon>
                            <Icon path={mdiExitToApp} size={1} />
                        </ListItemIcon>
                        <ListItemText primary="Sign Out" />
                    </ListItem>
                </List>
            </PoperHeader>
        </React.Fragment>
    )
}

export default MenuHeader;