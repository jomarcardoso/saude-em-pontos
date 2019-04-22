import React, { Component } from 'react';
import './App.scss';

// import { CadastroAlimento } from './containers';
import { SaHeader } from './components';
import { Alimento } from './domain';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SaHeader />
        <Alimento />
      </div>
    );
  }
}

export default App;
