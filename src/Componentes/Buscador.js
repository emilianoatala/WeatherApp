import React, { Component } from 'react';


class Buscador extends Component {
    
    cityRef=React.createRef()

    componentDidMount() {
        let autocompletador = new window.google.maps.places.Autocomplete(document.getElementById("inputCiudad"));
    }


    obtenerDatos=(e)=>{
        e.preventDefault();    
        const ciudad= this.cityRef.current.value
        let self = this
        const geocodificador = new window.google.maps.Geocoder()
        geocodificador.geocode({address: ciudad}, function(results, status){
            console.log(status)
            if (status === window.google.maps.GeocoderStatus.OK) {
                let coordenada = results[0].geometry.location
                let datos={coordenada:{lat:coordenada.lat(), lng:coordenada.lng()}, nombre:ciudad}
                self.props.datosInput(datos)  
            }else if (status=== window.google.maps.GeocoderStatus.ZERO_RESULTS){
                let datos=false
                self.props.datosInput(datos)
            }  
        })
    }
    render() { 
        return ( 
            <div className="container" onSubmit={this.obtenerDatos}>
                <form className="buscador-formulario">
                        <div className="input-field buscador-box-input">
                            <input ref={this.cityRef} id="inputCiudad" type="text"/>
                             
                        </div>   
                        <button className="btn-floating buscador-pulse pulse"><i className="material-icons">search</i></button>        
                </form>
                
            </div>
         );
    }
}
 
export default Buscador;