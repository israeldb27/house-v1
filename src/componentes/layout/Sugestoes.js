import React, { Component } from 'react';
import marli from '../fotos/marli.jpg';
import { Link } from 'react-router-dom';
import ContatoService from '../../services/ContatoService';


let id = 0;
function createData(id, nome, perfil, urlFoto) {
  id += 1;
  return {id, nome, perfil, urlFoto};
}

const rows = [
  createData(1, 'Marli Barreto', 'Corretor', '/img1.jpg'),
  createData(2, 'Patricia Barreto', 'Corretor', '/img1.jpg'),
  createData(3, 'Zirtaeb', 'Imobiliária', '/img1.jpg'),
];


class Sugestoes extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
        listaSugestoesContatos : [] 
      }
    }
    
    componentDidMount(){

       let idUsuario = 1;
       ContatoService.listaSugestoesContatos(idUsuario).then(listaContatos => {            
            this.setState({listaSugestoesContatos: listaContatos});
        })
    }

    render() {
        return (
            <div className="suggestions full-width">
                <div className="sd-title">
                    <h3>Sugestões Contatos</h3>
                    <i className="la la-ellipsis-v"></i>
                </div>{/*--sd-title end*/}
                <div className="suggestions-list">

                    {
                        this.state.listaSugestoesContatos.map(contato =>{
                            return (
                                <div className="suggestion-usd">
                                    <Link to={{ pathname: `/usuarioDetalhes/${contato._id}`}}>
                                        <img src={marli} alt="" style={{width: '35px', height: '35px;'}} />
                                    </Link>                        
                                    <div className="sgt-text">
                                        <h4>
                                            <Link to={{ pathname: `/usuarioDetalhes/${contato._id}`}}>
                                                {contato.usuarioHost.nome}
                                            </Link> 
                                        </h4>
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
                            )
                        })
                    }                  
                    
                    <div className="view-more">
                        <a href="#" title="">Ver Mais</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sugestoes;