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
            <div className="suggestions full-width">
                <div className="sd-title">
                    <h3>Contatos</h3>
                    <i className="la la-ellipsis-v"></i>
                </div> {/*sd-title end */}
                <div className="suggestions-list">
                    {
                        this.state.listaContatos.map(contato => {
                            return (
                                <div className="suggestion-usd" key={contato._id}>
                                    <img src="http://via.placeholder.com/35x35" alt="" />
                                    <div className="sgt-text">
                                        <h4>{contato.usuarioHost.nome}</h4>                                        
                                        {
                                            contato.usuarioHost.perfil === 'C' &&  ( <h4>Corretor</h4>  ) 
                                        } 
                                        {
                                            contato.usuarioHost.perfil === 'I' &&  ( <h4>Imobiliária</h4>  ) 
                                        } 
                                        {
                                            contato.usuarioHost.perfil === 'N' &&  ( <h4>Normal</h4>  ) 
                                        } 
                                    </div>
                                    <span><i className="la la-plus"></i></span>
                                </div>
                            );
                        })
                    }
            
                    <div className="view-more">
                        <Link to="/listaContatosUsuario/10" title="">Ver Todos</Link>
                    </div>
                </div> {/*suggestions-list end */}
            </div> 
        );
    }
}

export default UsuarioResumoContatos;