import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imovel from '../../fotos/imovel.jpg';
import imovel2 from '../../fotos/imovel2.jpg';
import { getAcaoImovel, getPerfilUsuario, getTipoImovel } from '../../common/Utils';


class ItemMeuImovel extends Component {

    render() {
        return (
            <div className="main-ws-sec">
                <div className="post-topbar">

                    <div className="post-st">
                        <ul>
                            <li><Link className="post-jb active" to="/imovelAdicionar" title="">Adicionar Imóvel</Link></li>
                        </ul>
                    </div>{/*--post-st end*/}
                </div>{/*--post-topbar end*/}
                <div className="posts-section">

                {
                        this.props.listaImoveis.map(imovel => {
                            return (
                                <div className="post-bar">

                                    <div className="suggestion-usd">
                                        <img src="http://via.placeholder.com/35x35" alt="" />
                                        <div className="sgt-text">
                                            <h4>{imovel.usuario.nome}</h4>          
                                            <span>{getPerfilUsuario(imovel.usuario.perfil)}</span>                                                                              
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

                    <div className="process-comm">
                        <div className="spinner">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                        </div>
                    </div>{/*--process-comm end*/}
                </div>{/*--posts-section end*/}
            </div>
        );
    }
}

export default ItemMeuImovel;