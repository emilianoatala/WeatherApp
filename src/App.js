import React, { Component } from 'react';
import Buscador from './Componentes/Buscador'
import Header from './Componentes/Header';
import TarjetaClima from './Componentes/TarjetaClima';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';



class App extends Component {
  state={
    ciudad:"",
    data:{},
    error:"",
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.ciudad !== this.state.ciudad){
      this.consultarClima()
    }
  }

  datosInput= ciudad=>{
    if(ciudad===''){
      this.setState({error:true})
    }
    else{
      this.setState({
        ciudad:ciudad,
        error:false
      })
    } 
  }


consultarClima=()=>{
  const ciudad=this.state.ciudad

  const key='ca147896cad69f2c6e786ee7177c9882'
  const url=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}`

  fetch(url)
  .then(response=>{
    return response.json()
  }).then(data=>{
    this.setState({
      data:data,
      error:false})
  })
  
}

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Buscador datosInput={this.datosInput}></Buscador>
        <TarjetaClima data={this.state.data}></TarjetaClima>
      </div>
    );
  }
}

export default App;
 