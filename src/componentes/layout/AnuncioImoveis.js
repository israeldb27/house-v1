import React, { Component } from 'react';
import casa from '../casa.jpg';

class AnuncioImoveis extends Component {
    render() {
        return (
            <div class="widget widget-about">
                <div className="sd-title">
                        <h3>Anuncios</h3>
                </div>
                <img src={casa} alt="" style={{width: '100%', height: '180px'}}/>
                <ul>
                    <li><a href="#" title="">Venda</a></li>                                            
                </ul>
                <br />
                <h3>$198.000,00</h3>
                <span>Apartamento</span>
                <h3 style={{fontSize: '12px'}}>Piratininga, Niteroi, RJ </h3>            
            </div>
            
        );
    }
}

export default AnuncioImoveis;