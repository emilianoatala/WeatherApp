import React, { Component } from 'react';


class Buscador extends Component {
    
    cityRef=React.createRef()

    obtenerDatos=(e)=>{
        e.preventDefault();    
        const ciudad= this.cityRef.current.value
        this.props.datosInput(ciudad)
    }

    render() { 
        return ( 
            <div className="container" onSubmit={this.obtenerDatos}>
                <form className="buscador-formulario">
                        <div className="input-field buscador-box-input">
                            <input ref={this.cityRef} id="inputCiudad" type="text"/>
                            <label htmlFor="inputCiudad">Ciudad:</label>  
                        </div>   
                        <button className="btn-floating buscador-pulse pulse"><i className="material-icons">search</i></button>        
                </form>
                
            </div>
         );
    }
}
 
export default Buscador;