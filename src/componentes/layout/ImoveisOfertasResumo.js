import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mansao from '../fotos/mansao3.jpg';
import OfertaService from '../../services/OfertaService';

class ImoveisOfertasResumo extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
          listaOfertasImoveis : [] 
  
        }
      }

    componentDidMount(){
        let idUsuario = 1;
        OfertaService.listarOfertasPorUsuarioResumo(idUsuario).then(listaOfertas => {
            this.setState({listaOfertasImoveis: listaOfertas});
        })
    }


    render() {
        return (
            <div className="widget widget-jobs">
                <div className="sd-title">
                    <h3>Ofertas</h3>
                    <i className="la la-ellipsis-v"></i>
                </div>
                <div className="suggestions-list">                  
                       {
                            this.state.listaOfertasImoveis.map(imovel => {
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
                            <Link to="/ofertasRecebidas/10">
                                Ver Mais
                            </Link>                            
                        </div>
                    </div>
            </div>
        );
    }
}

export default ImoveisOfertasResumo;