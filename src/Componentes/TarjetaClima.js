import React, { Component } from 'react';
import Temperatura from './Temperatura';
import Mapa from './Mapa';

class TarjetaClima extends Component {
   
    //procesa datos obtenidos de la api de clima y devuelve un componente que muestra dichos datos
    mostrarTemperatura=()=>{
        let {name, weather, main}= this.props.data
        let ciudadInput= this.props.ciudad
        if(!name||!weather||!main||!ciudadInput){
            return null
        }
    
        const icono= `http://openweathermap.org/img/w/${weather[0].icon}.png`
        
        return (
                <Temperatura    ciudadAPI={name}
                                ciudadInput={ciudadInput}
                                temperatura={(main.temp).toFixed(1)}
                                ambiente={weather[0].main}
                                descripcion={weather[0].description}
                                icono={icono}>
                </Temperatura>
        )
    }

    //procesa datos obtenidos de la api de google maps y devuelve un componente que muestra el mapa segun coordenadas
    mostrarMapa=()=>{
        let coord= this.props.data.coord
        if(!coord){
            return null
        }
        return (
            <Mapa   lat={coord.lat}
                    lng={coord.lon}>
                    
                    
            </Mapa>
            
        )
    }


    render() { 
        return ( 
            <div  className="container tarjeta-main-box">  
                    {this.mostrarTemperatura()}
                    {this.mostrarMapa()}
                </div>
         );
    }
}
 
export default TarjetaClima;