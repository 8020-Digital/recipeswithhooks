import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from './components/Navigation'
import Routes from './routes/Routes'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  resolvers: {}
})



ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Navigation />
      <Routes />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
