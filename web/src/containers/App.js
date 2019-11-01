import React from 'react';
import { connect } from 'react-redux';

import logo from '../resources/logo.svg';
import { requestToServer } from '../actions';
import './App.css';


class App extends React.Component {
  componentDidMount = async () => {
    await this.props.requestToServer();
  };

  render() {
    console.log(this.props.data);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  };
};

const mapStateToProps = state => ({ data: state.data });

export default connect(mapStateToProps, { requestToServer })(App);
