import React, { Component } from 'react';
import Temperatura from './Temperatura';
import Mapa from './Mapa';

class TarjetaClima extends Component {
   

    mostrarTemperatura=()=>{
        let {name, weather, main, coord}= this.props.data
        if(!name||!weather||!main){
            return null
        }
    
        const icono= `http://openweathermap.org/img/w/${weather[0].icon}.png`
        
        return (
                <Temperatura    ciudad={name}
                                temperatura={(main.temp).toFixed(1)}
                                ambiente={weather[0].main}
                                descripcion={weather[0].description}
                                icono={icono}>
                </Temperatura>
        )
    }

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