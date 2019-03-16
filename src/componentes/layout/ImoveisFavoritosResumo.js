import React, { Component } from 'react';

class ImoveisFavoritosResumo extends Component {
    render() {
        return (
            <div className="widget widget-jobs">
                <div className="sd-title">
                    <h3>Favoritos</h3>
                    <i className="la la-ellipsis-v"></i>
                </div>
                <div className="suggestions-list">                  
                        <div className="suggestion-usd">
                            <img src="http://via.placeholder.com/35x35" alt="" />
                            <div className="sgt-text">
                                <h4>Barra Center</h4>
                                <span>Edificio Comercial</span>
                            </div>
                            <span><i className="la la-plus"></i></span>
                        </div>
                        <div className="suggestion-usd">
                            <img src="http://via.placeholder.com/35x35" alt="" />
                            <div className="sgt-text">
                                <h4>Espaço Cultural </h4>
                                <span>Galpão</span>
                            </div>
                            <span><i className="la la-plus"></i></span>
                        </div>
                        
                        <div className="view-more">
                            <a href="#" title="">Ver Mais</a>
                        </div>
                    </div>
            </div>
        );
    }
}

export default ImoveisFavoritosResumo;