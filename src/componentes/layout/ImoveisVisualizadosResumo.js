import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mansao from '../fotos/mansao2.jpg';

let id = 0;
function createData(id, titulo, tipoImovel, urlFoto) {
  id += 1;
  return {id, titulo, tipoImovel, urlFoto};
}

const rows = [
  createData(1, 'Copacabana', 'Condominio', '/img1.jpg'),
  createData(2, 'Plaza Center', 'Edificio Comercial', '/img1.jpg'),
  createData(3, 'Condominio da Paz', 'Condominio', '/img1.jpg'),
];

class ImoveisVisualizadosResumo extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
          listaVisualizadosImoveis : [] 
  
        }
      }

    componentDidMount(){
        for (let i = 0; i < rows.length; i++){
            console.log(rows[i]);
            let list = this.state.listaVisualizadosImoveis;
            list.push(rows[i]);
            this.setState({listaVisualizadosImoveis: list});
        }
    }


    render() {
        return (
            <div className="widget widget-jobs">
                <div className="sd-title">
                    <h3>Imóveis Visualizados</h3>
                    <i className="la la-ellipsis-v"></i>
                </div>

                <div className="suggestions-list">                  
                     {
                        this.state.listaVisualizadosImoveis.map(imovel => {
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
                    
                    <div className="view-more">
                        <Link to="/visualizacoesRecebidas/10">
                            Ver Mais
                        </Link>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default ImoveisVisualizadosResumo;