import React, { Component } from 'react';
import Buscador from './Componentes/Buscador'
import Header from './Componentes/Header';
import TarjetaClima from './Componentes/TarjetaClima';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Buscador></Buscador>
        <TarjetaClima></TarjetaClima>
      </div>
    );
  }
}

export default App;
 