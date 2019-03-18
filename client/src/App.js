import React, { Component } from 'react';
import './App.scss';

import { CadastroAlimento } from './containers';
import { SaHeader } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SaHeader />
        <CadastroAlimento />
      </div>
    );
  }
}

export default App;
