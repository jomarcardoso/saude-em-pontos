import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom'

// import { CadastroAlimento } from './containers';
import { SaHeader } from './components';
import { Alimento, Menu } from './domain';
import TipoAtividadeFisica from './domain/tipo-atividade-fisica/TipoAtividadeFisica';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SaHeader />
          <main>
            <div className="container">
              <Route path="/" exact={true} component={Menu} />
              <Route path="/alimento" component={Alimento} />
              <Route path="/tipo-atividade-fisica" component={TipoAtividadeFisica} />
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
