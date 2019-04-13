import React, { Component } from 'react';
import Temperatura from './Temperatura';
import Mapa from './Mapa';

class TarjetaClima extends Component {
   

    mostrarTemperatura=()=>{
        let {name, weather, main}= this.props.data
        if(!name||!weather||!main){
            return null
        }
    
        const icono= `http://openweathermap.org/img/w/${weather[0].icon}.png`
        
        return (
                <Temperatura        ciudad={name}
                                    temperatura={(main.temp).toFixed(1)}
                                    ambiente={weather[0].main}
                                    descripcion={weather[0].description}
                                    icono={icono}>
                </Temperatura>
        )
    }
    render() { 
        return ( 
            <div  className="container tarjeta-main-box">  
                    {this.mostrarTemperatura()}
                    <Mapa></Mapa>
                </div>
         );
    }
}
 
export default TarjetaClima;