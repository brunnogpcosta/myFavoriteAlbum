import React from 'react';

import Login from '../src/pages/Login/login.js'
import Cadastro from '../src/pages/Cadastro/cadastro.js'
import Upload from '../src/pages/uploadImage/upload.js'
import HomePage from '../src/pages/homePage/homepage.js'

import './App.css';
import './style.css';
import Routes from './routes.js';

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
