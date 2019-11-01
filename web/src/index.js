import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import { App } from './containers';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import './index.css';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['"Noto Sans KR"', 'sans-serif'].join(','),
  },
});

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
