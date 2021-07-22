import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Avatar, makeStyles } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';

const ME_QUERY = gql`
  query CurrentUser {
    me {
        id
        username
        email
        password
        isAdmin
    }
}
`

const useStyles = makeStyles((theme) => ({
    small: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
}));

const UserAvatar = () => {
    const classes = useStyles();
    // const { client, loading, data } = useQuery({ ME_QUERY }, { fetchPolicy: "network-only" });
    // if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;
    return (
        // <Avatar className={classes.small}>{loading ? "AS" : (data.me.username).slice(0, 2).toUpperCase()}</Avatar>
        <Avatar className={classes.small}>AS</Avatar>
    )

}

export default UserAvatar;