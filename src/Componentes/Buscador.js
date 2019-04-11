import React, { Component } from 'react';
import '../css/buscador.css'

class Buscador extends Component {
    state = {
        city:""
      }

    render() { 
        return ( 
            <div className="container">
                <form style={{marginTop: 100+"px"}}>
                    <div className="row">
                        <div className="input-field col s11">
                            <input id="inputCiudad" type="text"/>
                            <label htmlFor="inputCiudad">Ciudad:</label>  
                        </div>   
                        <a className="btn-floating pulse" style={{marginTop: 20+"px"}}><i className="material-icons">search</i></a>
                          
                    </div>       
                </form>
                
            </div>
         );
    }
}
 
export default Buscador;