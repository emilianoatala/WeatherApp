import React, { Component } from 'react'


class Temperatura extends Component {
    state={
        checked:"",
        temperatura:""
    }
    
    componentWillMount(){
        this.setState({checked:false})
    
    }
    //Verifica si el switch esta encendido o apagado
    check=()=>{
        this.setState({checked: !this.state.checked})  
        this.cambiarUnidad()    
    }
    //modifica la unidad de temperatura segun lo seleccionado en el switch
    cambiarUnidad=()=>{
        let temperatura=this.props.temperatura
        if(this.state.checked){
            return temperatura+" K"
        }
        else{
            return (temperatura - 273.15).toFixed(1) + " ºC"
        }
    }


    render() { 
        return ( 
            <div className="temperatura-main-box"  >
                <h2 className="temperatura-city"> {this.props.ciudadInput} <br/> <font size="5"> ( {this.props.ciudadAPI} )  </font> </h2>
                <h2 className="temperatura-value" >{this.cambiarUnidad()}</h2>
                <div className="switch">
                    <label>
                        <input type="checkbox" onChange={this.check}/>
                        <span className="lever"></span>
                        Kelvin
                    </label>
                </div>
                <h5 className="temperatura-ambiente">{this.props.ambiente}</h5>
                <p className="temperatura-descripcion">{this.props.descripcion}</p>
                <img src={this.props.icono} alt="Icono del clima"/>
            </div>
         );
    }
}
 
export default Temperatura;