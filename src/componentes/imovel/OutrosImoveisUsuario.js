import React, { Component } from 'react';
import mansao from '../fotos/mansao3.jpg';
import { Link } from 'react-router-dom';

let id = 0;
function createData(id, titulo, tipoImovel, urlFoto) {
  id += 1;
  return {id, titulo, tipoImovel, urlFoto};
}

const rows = [
  createData(1, 'Vintage Center', 'Prédio', '/img1.jpg'),
  createData(2, 'Casinha da Sogra', 'Casa de Vila', '/img1.jpg'),
  createData(3, 'Nova América', 'Edificio Comercial', '/img1.jpg'),
];

class OutrosImoveisUsuario extends Component {

    constructor() {
        super()  
     
        this.state = {    
           listaImoveis: [] 
        }
    } 

    
    componentDidMount() {

        for (let i = 0; i < rows.length; i++){
            let list = this.state.listaImoveis;
            list.push(rows[i]);
            this.setState({listaImoveis: list});            
        }
    }

    render() {
        return (
            <div class="suggestions full-width">
                <div class="sd-title">
                    <h3>Outros Imóveis do Usuário</h3>
                    <i class="la la-ellipsis-v"></i>
                </div> {/*sd-title end */}
                <div class="suggestions-list">
                    {
                        this.state.listaImoveis.map (imovel => {
                            return (
                                <div className="suggestion-usd">
                                    <Link to={{ pathname: `/visualizarImovelDetalhes/${imovel.id}`}}>
                                        <img src={mansao} alt="" style={{ width: '60px', height: '60px;' }} />
                                    </Link>  
                                    
                                    <div className="sgt-text">
                                        <Link to={{ pathname: `/visualizarImovelDetalhes/${imovel.id}`}}>
                                            <h4>{imovel.titulo}</h4>
                                        </Link> 
                                        
                                        <span>{imovel.tipoImovel}</span>
                                    </div>
                                    <span><i className="la la-plus"></i></span>
                                </div>
                            )
                        })   
                    }

                    <div class="view-more">
                        <a href="#" title="">Ver Todos</a>
                    </div>
                </div> {/*suggestions-list end */}
            </div> 
        );
    }
}

export default OutrosImoveisUsuario;