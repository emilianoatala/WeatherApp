import React, { Component } from 'react';
import Buscador from './Componentes/Buscador'
import Header from './Componentes/Header';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Buscador></Buscador>
      </div>
    );
  }
}

export default App;
