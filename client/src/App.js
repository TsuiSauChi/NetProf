import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Menus from './Menus';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Menus />
      </div>
    );
  }
}

export default App;