import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import israel from '../../fotos/israel.jpg'
import { getUsuarioStorage, getPerfilUsuario } from '../../common/Utils';

class ViewProfileMeusIMoveis extends Component {

    constructor(){
        super();

        this.state = {
            usuarioSessao: getUsuarioStorage()
        }
    }

    render() {
        return (
            <div className="user-data full-width">
                <div className="user-profile">
                    <div className="username-dt">
                        <div className="usr-pic">
                            <Link to='/usuarioSessaoDetalhes'>
                                <img src={israel} alt="" style={{width: '100px', height:'100px'}}/>
                            </Link>
                        </div>
                    </div>{/*--username-dt end*/}
                    <div className="user-specs">
                        <h3>{this.state.usuarioSessao.nome}</h3>
                        <span>{getPerfilUsuario(this.state.usuarioSessao.perfil)}</span>
                    </div>
                </div>{/*--user-profile end*/}
                <ul className="user-fw-status">
                    <li>
                        <h4>
                            <Link to="#">
                                Total Imóveis
                            </Link>
                        </h4>
                        <span>{this.state.usuarioSessao.quantTotalImoveis}</span>
                    </li>
             
                </ul>
            </div>
        );
    }
}

export default ViewProfileMeusIMoveis;