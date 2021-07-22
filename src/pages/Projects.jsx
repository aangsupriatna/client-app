import React from 'react';
import {
    Box,
    Button,
    Divider,
    Grid,
    makeStyles,
    Paper,
    Typography
} from '@material-ui/core';
import BaseToolbar from '../components/BaseToolbar';
import { useNavigate } from 'react-router-dom';

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

const ProjectsPage = (props) => {
    const classes = useClasses();
    const navigation = useNavigate();

    const handleRemove = (e) => {
        e.preventDefault();
    }

    const handleAddProject = (e) => {
        navigation('/app/projects/forms');
    }
    return (
        <React.Fragment>
            <BaseToolbar navigation="Application / Projects">
                <Grid container justifyContent="flex-end" alignItems="center" spacing={1}>
                    <Grid item>
                        <Button size="small" color="secondary" onClick={handleRemove} disabled>Remove</Button>
                    </Grid>
                    <Grid item>
                        <Button size="small" variant="contained" color="primary" onClick={handleAddProject}>Add Project</Button>
                    </Grid>
                </Grid>
            </BaseToolbar>
            <Paper>
                <Box>
                    <Box px={2} py={2}>
                        <Typography className={classes.Title} color="inherit" variant="h6" component="div">Projects</Typography>
                    </Box>
                    <Divider />
                </Box>
            </Paper>
        </React.Fragment >
    )
}

export default ProjectsPage;