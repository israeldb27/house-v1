import React, { Component } from 'react'
import { getUsuarioStorage, getPerfilUsuario, formataDataHora, getIdUsuarioStorage, setUsuarioStorage, setIdUsuarioStorage } from '../../common/Utils';
import Moment from 'react-moment';
import UsuarioService from '../../../services/UsuarioService';


class UsuarioSessaoDetalhesHeader extends Component {
    constructor(props) {
      super(props)
    
      this.state = { 
         usuarioSessao: ''    
      }
    }

    componentDidMount(){         
        this.setState({usuarioSessao: this.props.usuarioSessao }) 
    }      


  render() {
    return (
        <div className="user-tab-sec mb-3 p-3 bg-white">
            <h3> {this.state.usuarioSessao.nome}</h3>
            <div className="row mb-2">
                <div className="col-6 p-0 mb-1">
                    <span> {getPerfilUsuario(this.state.usuarioSessao.perfil)} </span>
                </div>
                <div className="col-6 p-0 mb-1">
                    <div className="star-descp m-0 d-inline-block float-none">
                        <ul>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star-half-o"></i></li>
                        </ul>
                    </div> {/*star-descp end */}
                </div>
                <div className="col-6 p-0 mb-1">
                    <span>
                        Membro desde:  <Moment format="DD/MM/YYYY">
                                            {this.state.usuarioSessao.createdAt}
                                        </Moment>
                     </span>
                </div>
                <div className="col-6 p-0 mb-1">
                    <span>{this.state.usuarioSessao.localizacao}</span>
                </div>
                <div className="col-6 p-0 mb-1">
                    <span>Total de Imóveis: {this.state.usuarioSessao.quantTotalImoveis} </span>
                </div>
            </div>

        </div> 	
    )
  }
}

export default UsuarioSessaoDetalhesHeader
