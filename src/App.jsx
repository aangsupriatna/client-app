import React from 'react'
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { checkAuth } from './util/Token';

const App = (props) => {
    const isLoggedIn = checkAuth();
    const routing = useRoutes(routes(isLoggedIn));
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                {routing}
            </React.Fragment>
        </ThemeProvider>
    )
}

export default App
