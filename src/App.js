import React, { Component } from 'react';
import './App.scss';
import LostsContainer from './components/LostsContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello !</h1>
        </header>
        <LostsContainer />
      </div>
    );
  }
}

export default App;