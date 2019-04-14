import React, { Component } from 'react';


class Buscador extends Component {
    
    state={
        error:""
    }


    cityRef=React.createRef()

    componentDidMount() {
        let autocompletador = new window.google.maps.places.Autocomplete(document.getElementById("inputCiudad"));
        this.setState({
            error:false
        })
    }

    componentDidUpdate(){
        if(this.state.error){
            this.cityRef.current.placeholder="Hey! no escribiste ningun sitio para buscar!"
        }else{
            this.cityRef.current.placeholder="Introduce una ubicación. Por ejemplo: San Martin de los Andes"
        }
    }
    //obtiene los datos de Coordenadas geograficas mediante Geocoder, segun la ciudad buscada y la envia a su componente padre App
    //para ser utilizada en la consulta a la api de clima
    obtenerDatos=(e)=>{
        e.preventDefault();    
        const ciudad= this.cityRef.current.value
        let self = this

        if(ciudad===''){
            this.setState({
                error:true
            })

        }else{
            this.setState({
                error:false
            })
            const geocodificador = new window.google.maps.Geocoder()
            geocodificador.geocode({address: ciudad}, function(results, status){
                if (status === window.google.maps.GeocoderStatus.OK) {
                    let coordenada = results[0].geometry.location
                    let datos={coordenada:{lat:coordenada.lat(), lng:coordenada.lng()}, nombre:ciudad}
                    self.props.datosInput(datos)  
                }else if (status=== window.google.maps.GeocoderStatus.ZERO_RESULTS){
                    let datos=false
                    self.props.datosInput(datos)
                }  
            })

            this.cityRef.current.value=""

        }   
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