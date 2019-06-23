import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import imovel2 from '../../../fotos/imovel2.jpg';
import { getAcaoImovel, getPerfilUsuario, getTipoImovel } from '../../../common/Utils';

class ItemUsuarioImovel extends Component {

    constructor(props){
        super(props);        

        this.state = {
            listaImoveis : []
        }
    }

    componentDidMount() {        
        this.setState({listaImoveis: this.props.item }) 
    }


    render() {
        return (
            <div>
                  {                                            
                    this.state.listaImoveis.map(imovel => {
                        return (
                            <div className="post-bar">

                                <div className="suggestion-usd">
                                    <img src="http://via.placeholder.com/35x35" alt="" />
                                    <div className="sgt-text">
                                                                                                                
                                    </div>
                                </div>

                                <div className="post_topbar">
                                    <h3 style={{fontSize: '20px'}}>{imovel.titulo}</h3> <br />
                                    <Link to={{ pathname: `/visualizarImovelDetalhes/${imovel._id}` }}>
                                        <img src={imovel2} alt="" style={{ position: 'relative', float: 'center', width: '100%' }} />
                                    </Link>
                                    <br />
                                </div>
                                <div className="epi-sec">

                                    <ul className="descp">
                                        <li><img src="images/icon8.png" alt="" /><span>{imovel.localizacao}</span></li>
                                    </ul>
                                    <ul className="bk-links">
                                        <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                        <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                    </ul>
                                </div>
                                <div className="job_descp">                                        
                                    <ul className="job-dt">
                                        <li><a href="#" title="">{getTipoImovel(imovel.tipoImovel)}</a></li>
                                        <li><a href="#" title="">{getAcaoImovel(imovel.acao)}</a></li>
                                        <li><span>$ {imovel.valor}</span></li>
                                    </ul>
                                    <ul className="job-dt" style={{ fontSize: '12px' }}>
                                        {
                                        imovel.valorIptu > 0 &&  ( <li><p>IPTU </p> $ {imovel.valorIptu} </li>  ) 
                                        }
                                        <li></li>
                                        {
                                        imovel.valorCondominio > 0 &&  ( <li><p>Condomínio </p> $ {imovel.valorCondominio} </li>  ) 
                                        }        
                                        <li></li>                
                                        {
                                        imovel.outrasTaxas > 0 &&  ( <li><p>Outras Taxas </p> $ {imovel.outrasTaxas} </li>  ) 
                                        }                        
                                    </ul>

                                    {
                                        imovel.descricao !== '' &&  ( <p>{imovel.descricao}... <a href="#" title="">view more</a></p>  ) 
                                    }                
                                    
                                    <ul className="skill-tags">                                            
                                        {
                                        imovel.area > 0 &&  ( <li><a href="#" title="">{imovel.area} m²</a></li>  ) 
                                        }
                                        {
                                        imovel.quantQuartos > 0 &&  ( <li><a href="#" title="">{imovel.quantQuartos} Quartos(s)</a></li>  ) 
                                        }
                                        {
                                        imovel.quantBanheiros > 0 &&  ( <li><a href="#" title="">{imovel.quantBanheiros} Banheiro(s)</a></li>  ) 
                                        }
                                        {
                                        imovel.quantVagas > 0 &&  ( <li><a href="#" title="">{imovel.quantVagas} Vaga(s)</a></li>  ) 
                                        }                                            
                                        {
                                        imovel.quantSuites > 0 &&  ( <li><a href="#" title="">{imovel.quantSuites} Suíte(s)</a></li>  ) 
                                        }                                            
                                        
                                    </ul>
                                </div>
                                <div className="job-status-bar">
                                    <ul className="like-com">
                                        <li>
                                            <a href="#"><i className="la la-heart"></i> </a>
                                            <img src="images/liked-img.png" alt="" />
                                            <span> {imovel.quantTotalFavoritos}</span>
                                        </li>
                                        <li><a href="#" title="" className="com"><img src="images/com.png" alt="" />{imovel.quantTotalComentarios} comentários </a></li>
                                    </ul>
                                    <a><i className="la la-eye"></i>{imovel.quantTotalVisualizacoes} visualizações  </a>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
}

export default ItemUsuarioImovel
