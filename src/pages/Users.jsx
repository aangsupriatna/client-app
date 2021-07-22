import React from 'react';
import {
    Box,
    Divider,
    makeStyles,
    Paper,
    Typography
} from '@material-ui/core';
import BaseToolbar from '../components/BaseToolbar';

const useClasses = makeStyles((theme) => ({
    Link: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: theme.spacing(2),
    },
    Title: {
        flex: '1 1 100%',
        fontSize: 24,
        fontWeight: 300,
    },
}));

const UsersPage = (props) => {
    const classes = useClasses();
    return (
        <React.Fragment>
            <BaseToolbar navigation="Application / Users" />
            <Paper>
                <Box>
                    <Box px={2} py={2}>
                        <Typography className={classes.Title} color="inherit" variant="h6" component="div">Users</Typography>
                    </Box>
                    <Divider />
                </Box>
            </Paper>
        </React.Fragment >
    )
}

export default UsersPage;