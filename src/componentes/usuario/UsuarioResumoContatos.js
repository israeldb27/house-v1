import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class UsuarioResumoContatos extends Component {
    render() {
        return (
            <div class="suggestions full-width">
                <div class="sd-title">
                    <h3>Contatos</h3>
                    <i class="la la-ellipsis-v"></i>
                </div> {/*sd-title end */}
                <div class="suggestions-list">
                    <div class="suggestion-usd">
                        <img src="http://via.placeholder.com/35x35" alt="" />
                        <div class="sgt-text">
                            <h4>Jessica William</h4>
                            <span>Graphic Designer</span>
                        </div>
                        <span><i class="la la-plus"></i></span>
                    </div>
                    <div class="suggestion-usd">
                        <img src="http://via.placeholder.com/35x35" alt="" />
                        <div class="sgt-text">
                            <h4>John Doe</h4>
                            <span>PHP Developer</span>
                        </div>
                        <span><i class="la la-plus"></i></span>
                    </div>

                    <div class="suggestion-usd">
                        <img src="http://via.placeholder.com/35x35" alt="" />
                        <div class="sgt-text">
                            <h4>Bill Gates</h4>
                            <span>C & C++ Developer</span>
                        </div>
                        <span><i class="la la-plus"></i></span>
                    </div>
                    <div class="suggestion-usd">
                        <img src="http://via.placeholder.com/35x35" alt="" />
                        <div class="sgt-text">
                            <h4>Jessica William</h4>
                            <span>Graphic Designer</span>
                        </div>
                        <span><i class="la la-plus"></i></span>
                    </div>
                    <div class="suggestion-usd">
                        <img src="http://via.placeholder.com/35x35" alt="" />
                        <div class="sgt-text">
                            <h4>John Doe</h4>
                            <span>PHP Developer</span>
                        </div>
                        <span><i class="la la-plus"></i></span>
                    </div>
                    <div class="view-more">
                        <Link to="/listaContatosUsuario/10" title="">Ver Todos</Link>
                    </div>
                </div> {/*suggestions-list end */}
            </div> 
        );
    }
}

export default UsuarioResumoContatos;