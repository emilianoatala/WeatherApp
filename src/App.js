import React, { Component } from 'react';
import Buscador from './Componentes/Buscador'
import Header from './Componentes/Header';
import TarjetaClima from './Componentes/TarjetaClima';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';



class App extends Component {
  state={
    ciudadBuscada:"",
    coordenada:{},
    dataClima:{},
    error:true,
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.coordenada !== this.state.coordenada){
      this.consultarClima()
    }
  }
  //Almacena en el State los datos de coordenadas obtenidos del componente hijo Buscador
  datosInput= datos=>{
    if (datos === false){
      this.setState({error:true})
    }
    else{
      this.setState({
        coordenada:datos.coordenada,
        ciudadBuscada:datos.nombre,
        error:false
      })
    } 
  }
 //Realiza una consulta a la api del clima y la guarda en el State
  consultarClima=()=>{ 
    const {lat,lng} = this.state.coordenada
    const key='ca147896cad69f2c6e786ee7177c9882'
    const url=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`

    fetch(url)
    .then(response=>{
      return response.json()
    }).then(data=>{
      this.setState({
        dataClima:data,
        error:false})
    }).catch(error=>{
      this.setState({error:true})
    })
  }

  //muestra el panel de informacion del clima en caso de que se haya obtenido informacion de la api
  mostrarTarjetaClima=()=>{
    if(this.state.error){
      return (
        <div className="container">
          No hay Datos para mostrar
        </div>
      )
    }
    else{
      return ( <TarjetaClima ref="tarjeta" data={this.state.dataClima} ciudad={this.state.ciudadBuscada}></TarjetaClima> )     
    }
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Buscador datosInput={this.datosInput}></Buscador>
        {this.mostrarTarjetaClima()}
      </div>
    );
  }
}

export default App;
 