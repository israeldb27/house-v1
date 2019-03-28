import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ImoveisVisualizadosResumo extends Component {
    render() {
        return (
            <div className="widget widget-jobs">
                <div className="sd-title">
                    <h3>Imóveis Visualizados</h3>
                    <i className="la la-ellipsis-v"></i>
                </div>

                <div className="suggestions-list">                  
                    <div className="suggestion-usd">
                        <img src="http://via.placeholder.com/35x35" alt="" />
                        <div className="sgt-text">
                            <h4>Copacabana Palace</h4>
                            <span>Condomínio</span>
                        </div>
                        <span><i className="la la-plus"></i></span>
                    </div>
                    <div className="suggestion-usd">
                        <img src="http://via.placeholder.com/35x35" alt="" />
                        <div className="sgt-text">
                            <h4>Plaza Center </h4>
                            <span>Edificio Comercial</span>
                        </div>
                        <span><i className="la la-plus"></i></span>
                    </div>
                    
                    <div className="view-more">
                        <Link to="/visualizacoesRecebidas/10">
                            Ver Mais
                        </Link>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default ImoveisVisualizadosResumo;