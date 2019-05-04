import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import imovel2 from '../../fotos/imovel2.jpg';


class ImovelResultadoBusca extends Component {
  render() {
    return (
        <div className="col-lg-6">
            <div className="main-ws-sec">
                <div className="posts-section">

                    {
                        this.props.listaImoveis.map(imovel => {
                            return (
                                <div className="post-bar">

                                    <div className="suggestion-usd">
                                        <img src="http://via.placeholder.com/35x35" alt="" />
                                        <div className="sgt-text">
                                            <h4>{imovel.nomeUsuario}</h4>
                                            <span>{imovel.perfilUsuario}</span>
                                        </div>
                                    </div>

                                    <div className="post_topbar">
                                        <h3 style={{fontSize: '20px'}}>{imovel.titulo}</h3> <br />
                                        <Link to={{ pathname: `/visualizarImovelDetalhes/${imovel.id}` }}>
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
                                            <li><a href="#" title="">{imovel.acao}</a></li>
                                            <li><span>$ {imovel.valorImovel}</span></li>
                                        </ul>
                                        <ul className="job-dt" style={{ fontSize: '12px' }}>
                                            <li><p>IPTU </p> $ {imovel.valorIptu} </li>
                                            <li> </li>
                                            <li><p>Condomínio </p> $ {imovel.valorCondominio} </li>
                                        </ul>
                                        <p>{imovel.descricao}}... <a href="#" title="">view more</a></p>
                                        <ul className="skill-tags">
                                            <li><a href="#" title="">{imovel.area} m²</a></li>
                                            <li><a href="#" title="">{imovel.quartos} Quartos(s)</a></li>
                                            <li><a href="#" title="">{imovel.banheiros} Banheiro(s)</a></li>
                                            <li><a href="#" title="">{imovel.garagens} Vaga(s)</a></li>
                                            <li><a href="#" title="">{imovel.suites} Suíte(s)</a></li>
                                        </ul>
                                    </div>
                                    <div className="job-status-bar">
                                        <ul className="like-com">
                                            <li>
                                                <a href="#"><i className="la la-heart"></i> Like</a>
                                                <img src="images/liked-img.png" alt="" />
                                                <span>{imovel.likes}</span>
                                            </li>
                                            <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment {imovel.comments}</a></li>
                                        </ul>
                                        <a><i className="la la-eye"></i>Views {imovel.views}</a>
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

            </div>{/*main-ws-sec end*/}
        </div>
    )
  }
}

export default ImovelResultadoBusca
