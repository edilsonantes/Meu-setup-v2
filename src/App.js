import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

//Paginas
import Home from './view/home';
import Login from './view/login';
import Cadastrar from './view/cadastrar';
import Setup from './view/setup';
import Ajuda from './view/ajuda';
import Recuperarsenha from './view/recuperarsenha';
import Paineladmin from './view/paineladmin';
import Minhaconta from './view/minhaconta';
import Minhasconfiguracoes from './view/minhasconfiguracoes';

function App() {
  return (
    <Provider store = {store}>
      <PersistGate loading = {null} persistor = {persistor}>
        <Router>
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/login' component = {Login} />
            <Route exact path = '/cadastrar' component = {Cadastrar} />
            <Route exact path = '/setup' component = {Setup} />
            <Route exact path = '/ajuda' component = {Ajuda} />
            <Route exact path = '/recuperarsenha' component = {Recuperarsenha} />
            <Route exact path = '/paineladmin' component = {Paineladmin} />
            <Route exact path = '/minhaconta' component = {Minhaconta} />
            <Route exact path = '/minhasconfiguracoes' component = {Minhasconfiguracoes} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
