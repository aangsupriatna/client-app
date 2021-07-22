import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { BrowserRouter as Router } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { getToken } from './util/Token';

const authLink = setContext((_, { headers }) => {
    const token = getToken().accessToken;
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const createApolloClient = () =>
    new ApolloClient({
        cache: new InMemoryCache(),
        link: authLink.concat(createUploadLink({ uri: "http://localhost:4000/" })),
        credentials: 'same-origin',
    });

const client = createApolloClient();

ReactDOM.render(
    <React.Suspense>
        <ApolloProvider client={client}>
            <Router>
                <App />
            </Router>
        </ApolloProvider>
    </React.Suspense>,
    document.getElementById('root')
)