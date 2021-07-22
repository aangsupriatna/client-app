import React from 'react';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { LOGIN_MUTATION } from '../query/AuthQuery';
import {
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    InputAdornment,
    Link,
    makeStyles,
    Paper,
    TextField,
    Typography
} from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiEmail, mdiFormTextboxPassword } from '@mdi/js';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../util/Token';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(1),
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(6, 'Password should be of minimum 6 characters length')
        .required('Password is required'),
});

const LoginPage = (props) => {
    const classes = useStyles();
    const navigation = useNavigate();
    const [remember, setRemember] = React.useState(false);

    const [login, { loading }] = useMutation(LOGIN_MUTATION);

    const handleRemember = (event) => {
        setRemember(event.target.checked);
    };

    const handleLink = (event) => {
        event.preventDefault();
        navigation("/register");
    };

    const formik = useFormik({
        initialValues: {
            email: "john@email.com",
            password: "secret"
        },
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
            login({ variables: values }).then(result => {
                if (result.data) {
                    const { accessToken, refreshToken } = result.data.login;
                    setToken(accessToken, refreshToken);
                    navigation("/app/dashboard");
                }
            })
        }
    });
    return (
        <React.Fragment>
            <Paper className={classes.root}>
                <Typography component="h1" variant="h4">Sign in</Typography>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
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
                        control={<Checkbox value="remember" color="primary" checked={remember} onChange={handleRemember} />}
                        label="Remember me"
                    />
                    <Button className={classes.submit} fullWidth color='primary' variant='contained' type='submit'>Submit</Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2" onClick={handleLink}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </React.Fragment>
    )
};

export default LoginPage;