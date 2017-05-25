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

        <BeltList />
      </div>
    </div>
    );
  }
}

export default App;
