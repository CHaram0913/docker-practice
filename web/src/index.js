import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import * as serviceWorker from './serviceWorker';
import { App } from './containers';
import './index.css';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  // uri: process.env.API_ENDPOINT_DEVELOPMENT,
});

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['"Noto Sans KR"', 'sans-serif'].join(','),
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <App/>
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
