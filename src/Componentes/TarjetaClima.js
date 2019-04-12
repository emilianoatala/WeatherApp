import React, { Component } from 'react';
import Temperatura from './Temperatura';
import Mapa from './Mapa';

class TarjetaClima extends Component {
    state = {  }
    render() { 
        return ( 
            <div  className="container tarjeta-main-box">  
                    <Temperatura></Temperatura>
                    <Mapa></Mapa>
                </div>
         );
    }
}
 
export default TarjetaClima;