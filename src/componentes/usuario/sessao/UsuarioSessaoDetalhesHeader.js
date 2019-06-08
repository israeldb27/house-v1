import React, { Component } from 'react'
import { getUsuarioStorage } from '../../common/Utils';


class UsuarioSessaoDetalhesHeader extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         nome: '',
         perfil: '',
         dataCadastro: '',
         localizacao: '',
         totalImoveis: 0,
         usuarioSessao: ''
      }
    }

    componentDidMount(){
        this.setState({nome: 'Israel D. Barreto', 
                       perfil: 'Corretor',
                       dataCadastro: '11/01/2019',
                       localizacao: 'Boa Viagem, Niteroi, RJ - Brasil',
                       totalImoveis: 120,
                       usuarioSessao: getUsuarioStorage() })            

        console.log('Usuario storage: ' + getUsuarioStorage())         ;
    }    


  render() {
    return (
        <div className="user-tab-sec mb-3 p-3 bg-white">
            <h3> {this.state.nome} - {this.state.usuarioSessao.nome}</h3>
            <div className="row mb-2">
                <div className="col-6 p-0 mb-1">
                    <span> {this.state.perfil} </span>
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
                    <span>Membro desde: {this.state.dataCadastro} </span>
                </div>
                <div className="col-6 p-0 mb-1">
                    <span>{this.state.localizacao}</span>
                </div>
                <div className="col-6 p-0 mb-1">
                    <span>Total de Imóveis: {this.state.totalImoveis} </span>
                </div>
            </div>

        </div> 	
    )
  }
}

export default UsuarioSessaoDetalhesHeader
