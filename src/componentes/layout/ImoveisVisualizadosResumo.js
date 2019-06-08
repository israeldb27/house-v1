import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mansao from '../fotos/mansao2.jpg';
import VisualizacaoService from '../../services/VisualizacaoService';
import { getTipoImovel } from '../common/Utils';



class ImoveisVisualizadosResumo extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
          listaVisualizadosImoveis : []   
        }
      }

    componentDidMount(){
        let idUsuario = 1;
        VisualizacaoService.listarImoveisVisualizadosResumoPorUsuario(idUsuario).then(listaImoveisVisualizados => {
            this.setState({listaVisualizadosImoveis: listaImoveisVisualizados});
        })
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
                        this.state.listaVisualizadosImoveis.map(visualizacao => {
                            return (
                                <div className="suggestion-usd">
                                     <Link to={{ pathname: `/visualizarImovelDetalhes/${visualizacao._id}`}}>
                                        <img src={mansao} alt="" style={{ width: '60px', height: '60px;' }} />
                                    </Link>  
                                    
                                    <div className="sgt-text">
                                        <Link to={{ pathname: `/visualizarImovelDetalhes/${visualizacao._id}`}}>
                                            <h4>{visualizacao.imovel.titulo}</h4>
                                        </Link> 
                                        
                                        <span>{getTipoImovel(visualizacao.imovel.tipoImovel)}</span>
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