import React, { Component } from 'react';


class Buscador extends Component {
    state = {
        city:""
      }
    
    render() { 
        return ( 
            <div className="container">
                <form className="buscador-formulario">
                        <div className="input-field buscador-box-input">
                            <input id="inputCiudad" type="text"/>
                            <label htmlFor="inputCiudad">Ciudad:</label>  
                        </div>   
                        <a className="btn-floating buscador-pulse pulse "><i className="material-icons">search</i></a>        
                </form>
                
            </div>
         );
    }
}
 
export default Buscador;