import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Paginas
import Home from './view/home';
import Login from './view/login';
import Cadastrar from './view/cadastrar';
import Setup from './view/setup';
import Ajuda from './view/ajuda';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/cadastrar' component = {Cadastrar} />
        <Route exact path = '/setup' component = {Setup} />
        <Route exact path = '/ajuda' component = {Ajuda} />
      </Switch>
    </Router>
  );
}

export default App;
