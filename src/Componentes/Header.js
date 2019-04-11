import React from 'react'
import logo from '../Assets/logo.png'
import '../css/header.css'

const Header = () => {
    return ( 
        <div className="main-box">
            <div className="box-img">
                <img src={logo} alt="Logo"></img>
                <h5 className="valign-wrapper">WeatherApp</h5>
            </div>
        </div>
     );
}
 
export default Header;