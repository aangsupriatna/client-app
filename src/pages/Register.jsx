import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import {
    Button,
    makeStyles,
    TextField,
    Typography,
    Paper,
    Grid,
    Link,
    FormControlLabel,
    Checkbox,
    InputAdornment
} from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiAccountCircle, mdiEmail, mdiFormTextboxPassword } from '@mdi/js';
import { useMutation } from '@apollo/client';
import { REGISTER_MUTATION } from '../query/AuthQuery';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(1),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    collapse: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(1),
    }
}));

const validationSchema = yup.object({
    username: yup
        .string('Enter your username')
        .required('Username is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(6, 'Password should be of minimum 6 characters length')
        .required('Password is required'),
});

const RegisterPage = (props) => {
    const classes = useStyles();
    const navigation = useNavigate();
    const [register, { loading }] = useMutation(REGISTER_MUTATION);

    const handleLink = (event) => {
        event.preventDefault();
        navigation("/signin")
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
            register({ variables: values }).then(result => {
                console.log(result);
            })
        },
    });
    return (
        <Paper className={classes.root}>
            <Typography component="h1" variant="h4">
                Sign up
            </Typography>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="username"
                    name="username"
                    label="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                    variant="outlined"
                    margin="normal"
                    autoComplete="username"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon path={mdiAccountCircle}
                                    title="User Password"
                                    size={1}
                                />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    variant="outlined"
                    margin="normal"
                    autoComplete="email"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon path={mdiEmail}
                                    title="User Email"
                                    size={1}
                                />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    variant="outlined"
                    margin="normal"
                    type="password"
                    autoComplete="current-password"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon path={mdiFormTextboxPassword}
                                    title="User Password"
                                    size={1}
                                />
                            </InputAdornment>
                        ),
                    }}
                />
                <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                />
                <Button className={classes.submit} fullWidth color='primary' variant='contained' type='submit'>Submit</Button>
                <Grid container justifycontent="flex-end">
                    <Grid item>
                        <Link href="/signin" variant="body2" onClick={handleLink}>
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Paper >
    )
};

export default RegisterPage;