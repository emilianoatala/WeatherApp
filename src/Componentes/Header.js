import React from 'react'
import logo from '../Assets/logo.png'

const Header = () => {
    return ( 
        <div className="header-main-box">
            <div className="header-box-img">
                <img className="header-img" src={logo} alt="Logo"></img>
                <h5 className="valign-wrapper">WeatherApp</h5>
            </div>
        </div>
     );
}
 
export default Header;