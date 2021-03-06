import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom'

// import { CadastroAlimento } from './containers';
import { SaHeader } from './components';
import { Alimento, Menu, Refeicao, Relatorio } from './domain';
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
              <Route path="/refeicao" component={Refeicao} />
              <Route path="/tipo-atividade-fisica" component={TipoAtividadeFisica} />
              <Route path="/relatorio" component={Relatorio} />
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
