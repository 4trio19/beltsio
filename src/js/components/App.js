// imports
import React, { Component } from 'react';
import Header from './Header';
import BeltList from './BeltList';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
        <Header />
        <div className="container">
        <BeltList />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
