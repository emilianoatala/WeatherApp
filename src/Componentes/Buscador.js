import React, { Component } from 'react';


class Buscador extends Component {
    state = {
        city:""
      }

    render() { 
        return ( 
            <div className="container">
                <form>
                    <div className="row">
                        <div class="input-field col s12">
                            <input id="inputCiudad" type="text"/>
                            <label for="inputCiudad">Ciudad:</label>
                        </div>
                    </div>       
                </form>
                
            </div>
         );
    }
}
 
export default Buscador;