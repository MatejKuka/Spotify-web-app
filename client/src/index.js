import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import {BrowserRouter} from 'react-router-dom';
import App from './App.tsx';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ApolloProvider>
);
