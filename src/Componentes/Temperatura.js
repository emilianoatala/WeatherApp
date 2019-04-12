import React, { Component } from 'react'


class Temperatura extends Component {
    
    state = {  }
    render() { 
        return ( 
            <div className="temperatura-main-box"  >
                <h2 className="temperatura-city">CORDOBA</h2>
                <h2 className="temperatura-value">25ºC</h2>
                <h5 className="temperatura-ambiente">Sunny</h5>
                <div className="switch">
                    <label>
                        Celcius
                        <input type="checkbox"/>
                        <span className="lever"></span>
                        Kelvin
                    </label>
                </div>
                <p className="temperatura-descripcion"> parcialmente soleado con algunas nubes</p>
            </div>
         );
    }
}
 
export default Temperatura;