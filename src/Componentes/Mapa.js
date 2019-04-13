import React, { Component } from 'react'

class Mapa extends Component {


componentDidMount(){
    this.mostrarMapa()
}

componentDidUpdate(){
    this.mostrarMapa()
}

    mostrarMapa=()=>{
        const lat  = this.props.lat
        const lng = this.props.lng

        let mapa = new window.google.maps.Map(document.getElementById("mapa"),
            {
                zoom:12,
                center:{lat:lat, lng:lng}
            })  
            
        let marcador = new window.google.maps.Marker({
            position: {lat:lat, lng:lng},
            map: mapa ,
            title: 'Hello World!'   });
            marcador.setAnimation(window.google.maps.Animation.DROP)
    }
    
    render() { 
        return ( 
            <div id="mapa" className="mapa-main-box" ref="map">
            </div>
         );
    }
}
 
export default Mapa;