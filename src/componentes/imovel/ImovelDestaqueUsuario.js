import React, { Component } from 'react';
import casa from '../fotos/casa.jpg';

class ImovelDestaqueUsuario extends Component {
    render() {
        return (
            <div class="widget widget-about">
             <div className="sd-title">
                    <h3>Anuncios</h3>
            </div>
                <img src={casa} alt="" style={{width: '180px', height: '180px'}}/>
                <h3>$198.000,00</h3>
                <span>Apartamento</span>
                <h3 style={{fontSize: '12px'}}>Niteroi, RJ </h3>            
            </div>
            
        );
    }
}

export default ImovelDestaqueUsuario;