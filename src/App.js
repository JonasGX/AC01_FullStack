import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Usuario from './usuario';
import Home from './home';
import Sobre from './sobre';
import Cadastro from './cadastro.js';
import Enviar from './Enviar';

export default function App() {
  return (
      <> 
    <header> 
    <p text-align><Link to='/home'>Home</Link> | 
    <Link to='/cadastro'>Cadastro</Link> |
    <Link to='/usuario'>Usuario</Link> |
    <Link to='/sobre'>Sobre</Link></p>
    <hr></hr>
    </header>
    <main>
        <Switch>
          <Route path='/usuario' component= {Usuario}/>
          <Route path='/home' component= {Home}/>
          <Route path='/sobre' component= {Sobre}/>
          <Route path='/cadastro' component= {Cadastro}/>
          <Route path='/Enviar' component= {Enviar}/>
        </Switch>
      </main>
      </>
  );
}

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/