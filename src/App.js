
import React from "react";
import { hot } from 'react-hot-loader/root';
import Login from './js/login'

class App extends React.Component {
  render() {
    return (
      <div id="app-container">
        <Login />

      </div>

    );
  }
}

export default hot(App);
