import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store';

//Paginas
import Home from './view/home';
import Login from './view/login';
import Cadastrar from './view/cadastrar';
import Setup from './view/setup';
import Ajuda from './view/ajuda';
import Recuperarsenha from './view/recuperarsenha';

function App() {
  return (
    <Provider store = {store}>
      <Router>
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/login' component = {Login} />
          <Route exact path = '/cadastrar' component = {Cadastrar} />
          <Route exact path = '/setup' component = {Setup} />
          <Route exact path = '/ajuda' component = {Ajuda} />
          <Route exact path = '/recuperarsenha' component = {Recuperarsenha} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
