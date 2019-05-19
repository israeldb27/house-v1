import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContatoService from '../../services/ContatoService';




class UsuarioResumoContatos extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
          listaContatos : []   
        }
    }

    componentDidMount() {       
        let idUsuario = 1;
        ContatoService.listaResumoContatosPorUsuario(idUsuario).then(ListaResumoContatos => {
            this.setState({listaContatos: ListaResumoContatos});
        })
     }

    render() {
        return (
            <div class="suggestions full-width">
                <div class="sd-title">
                    <h3>Contatos</h3>
                    <i class="la la-ellipsis-v"></i>
                </div> {/*sd-title end */}
                <div class="suggestions-list">
                    {
                        this.state.listaContatos.map(contato => {
                            return (
                                <div class="suggestion-usd">
                                    <img src="http://via.placeholder.com/35x35" alt="" />
                                    <div class="sgt-text">
                                        <h4>{contato.nome}</h4>
                                        <span>{contato.perfil}</span>
                                    </div>
                                    <span><i class="la la-plus"></i></span>
                                </div>
                            );
                        })
                    }
            
                    <div class="view-more">
                        <Link to="/listaContatosUsuario/10" title="">Ver Todos</Link>
                    </div>
                </div> {/*suggestions-list end */}
            </div> 
        );
    }
}

export default UsuarioResumoContatos;