import React, { Component } from 'react';
import marli from '../fotos/marli.jpg';
import { Link } from 'react-router-dom';


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
       for (let i = 0; i < rows.length; i++){
           console.log(rows[i]);
           let list = this.state.listaSugestoesContatos;
           list.push(rows[i]);
           this.setState({listaSugestoesContatos: list});
       }
    }

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

                    {
                        this.state.listaSugestoesContatos.map(usuario =>{
                            return (
                                <div className="suggestion-usd">
                                    <Link to={{ pathname: `/usuarioDetalhes/${usuario.id}`}}>
                                        <img src={marli} alt="" style={{width: '35px', height: '35px;'}} />
                                    </Link>                        
                                    <div className="sgt-text">
                                        <h4>
                                            <Link to={{ pathname: `/usuarioDetalhes/${usuario.id}`}}>
                                                {usuario.nome}
                                            </Link> 
                                        </h4>
                                        <span>{usuario.perfil}</span>
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