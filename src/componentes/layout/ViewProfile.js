import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import israel from '../fotos/israel.jpg'
import { getUsuarioStorage, getPerfilUsuario } from '../common/Utils';

let id = 0;
function createData(id, nome, perfilUsuario, totalImoveis, totalContatos, totalSeguidores, urlFoto) {
  id += 1;
  return {id, nome, perfilUsuario, totalImoveis, totalContatos, totalSeguidores, urlFoto};
}

const row =  createData(1, 'Israel Barreto', 'Normal', 30, 55, 120, '/img1.jpg');

class ViewProfile extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
          usuario  : getUsuarioStorage()
        }
    }


    render() {
        return (
            <div className="user-data full-width">
                <div className="user-profile">
                    <div className="username-dt">
                        <div className="usr-pic">
                            <Link to={{ pathname: `/usuarioSessaoDetalhes/${this.state.usuario._id}`}}>
                                <img src={israel} alt="" style={{width: '100px', height:'100px'}}/>
                            </Link>
                        </div>
                    </div>{/*--username-dt end*/}
                    <div className="user-specs">
                        <h3>
                            <Link to={{ pathname: `/usuarioSessaoDetalhes/${this.state.usuario._id}`}}>
                                {
                                    this.state.usuario.nome
                                }
                            </Link>    
                        </h3>
                        <span>{getPerfilUsuario(this.state.usuario.perfil)}</span>
                    </div>
                </div>{/*--user-profile end*/}
                <ul className="user-fw-status">
                    <li>
                        <h4>           
                            <Link to={{ pathname: `/listaMeusImoveis/${this.state.usuario._id}`}}>
                                Total Imóveis
                            </Link>
                        </h4>
                        <span> 
                            {
                                this.state.usuario.quantTotalImoveis
                            }
                        </span>
                    </li>
                    <li>
                        <h4>
                            <Link to={{ pathname: `/listaContatosUsuario/${this.state.usuario._id}`}}>
                                Contatos
                            </Link>
                        </h4>
                        <span> 
                            {
                                this.state.usuario.quantTotalContatos
                            }
                        </span>
                    </li>
                    <li>   
                        <h4>
                            <Link to={{ pathname: `/listarSeguidores/${this.state.usuario.id}`}}>
                                Seguidores
                            </Link>
                        </h4>
                        <span> 
                            {
                                this.state.usuario.quantTotalSeguidores
                            }
                        </span>
                    </li>
                    <li>
                        <Link to={{ pathname: `/usuarioSessaoDetalhes/${this.state.usuario._id}`}}>
                            View Profile 
                        </Link>                        
                    </li>
                </ul>
            </div>
        );
    }
}

export default ViewProfile;