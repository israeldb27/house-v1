import React, { Component } from 'react';
import marli from '../fotos/marli.jpg';
import { Link } from 'react-router-dom';

class Sugestoes extends Component {
    render() {
        return (
            <div className="suggestions full-width">
                <div className="sd-title">
                    <h3>Sugestões Contatos</h3>
                    <i className="la la-ellipsis-v"></i>
                </div>{/*--sd-title end*/}
                <div className="suggestions-list">
                    <div className="suggestion-usd">
                        <Link to="/usuarioDetalhes/10">
                            <img src={marli} alt="" style={{width: '35px', height: '35px;'}} />
                        </Link>                        
                        <div className="sgt-text">
                            <h4>
                                <Link to="/usuarioDetalhes/10">
                                    Marli Barreto
                                </Link> 
                            </h4>
                            <span>Corretor</span>
                        </div>
                        <span><i className="la la-plus"></i></span>
                    </div>
                    <div className="suggestion-usd">
                        <img src="http://via.placeholder.com/35x35" alt="" />
                        <div className="sgt-text">
                            <h4>John Doe</h4>
                            <span>PHP Developer</span>
                        </div>
                        <span><i className="la la-plus"></i></span>
                    </div>
                    <div className="suggestion-usd">
                        <img src="http://via.placeholder.com/35x35" alt="" />
                        <div className="sgt-text">
                            <h4>Poonam</h4>
                            <span>Wordpress Developer</span>
                        </div>
                        <span><i className="la la-plus"></i></span>
                    </div>
                    <div className="suggestion-usd">
                        <img src="http://via.placeholder.com/35x35" alt="" />
                        <div className="sgt-text">
                            <h4>Bill Gates</h4>
                            <span>C & C++ Developer</span>
                        </div>
                        <span><i className="la la-plus"></i></span>
                    </div>
                    <div className="suggestion-usd">
                        <img src="http://via.placeholder.com/35x35" alt="" />
                        <div className="sgt-text">
                            <h4>Jessica William</h4>
                            <span>Graphic Designer</span>
                        </div>
                        <span><i className="la la-plus"></i></span>
                    </div>
                    <div className="suggestion-usd">
                        <img src="http://via.placeholder.com/35x35" alt="" />
                        <div className="sgt-text">
                            <h4>John Doe</h4>
                            <span>PHP Developer</span>
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

export default Sugestoes;