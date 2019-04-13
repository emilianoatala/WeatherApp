import React, { Component } from 'react'


class Temperatura extends Component {
    state={
        checked:"",
        temperatura:""
    }
    
    componentDidMount(){
        let temperatura= this.props.temperatura
        this.setState({checked:false, temperatura:temperatura+" K"})
        
    }

    check=()=>{
        this.setState({checked: !this.state.checked})  
        this.cambiarUnidad()    
    }

    cambiarUnidad=()=>{
        let temperatura=this.props.temperatura
        if(this.state.checked){
            this.setState({temperatura: temperatura+" K"})
        }
        else{
            this.setState({temperatura: (temperatura - 273.15).toFixed(1) + " ºC"})
        }
    }


    render() { 
        return ( 
            <div className="temperatura-main-box"  >
                <h2 className="temperatura-city">{this.props.ciudad}</h2>
                <h2 className="temperatura-value" >{this.state.temperatura}</h2>
                <div className="switch">
                    <label>
                        Kelvin
                        <input type="checkbox" onChange={this.check}/>
                        <span className="lever"></span>
                        Celcius
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