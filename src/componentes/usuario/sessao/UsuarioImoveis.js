import React, { Component } from 'react';
import UsuarioResumoDetalhes from '../UsuarioResumoDetalhes';
import UsuarioResumoContatos from '../UsuarioResumoContatos';
import ImovelDestaqueUsuario from '../../imovel/ImovelDestaqueUsuario';
import { Link } from 'react-router-dom';
import imgImovel from '../../fotos/imovel.jpg';
import UsuarioSessaoMenuFuncionalidades from '../UsuarioSessaoMenuFuncionalidades';
import UsuarioSessaoDetalhesHeader from './UsuarioSessaoDetalhesHeader';
import imovel2 from '../../fotos/imovel2.jpg';
import Header from '../../layout/Header';
import ImovelService from '../../../services/ImovelService';
import { getAcaoImovel, getPerfilUsuario, getTipoImovel } from '../../common/Utils';

class UsuarioImoveis extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       listaImoveis: []
    }
  }

  componentDidMount(){       

    // carregando lista de imoveis do usuario
    let idUsuario = 1;
    ImovelService.listarImoveisPorUsuario(idUsuario).then( listaImoveis => {
        this.setState({listaImoveis: listaImoveis})
    })
  }
     
  render() {
    return (
        <div>
            <Header />
            <br />

            <main>
                <br /> <br />  <br /> <br /> <br /> <br /> <br />
                <div className="main-section">
                    <div className="container">
                        <div className="main-section-data">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="main-left-sidebar">
                                        <UsuarioResumoDetalhes />

                                        <UsuarioResumoContatos />
                                    </div> {/*main-left-sidebar end */}
                                </div>
                                <div className="col-lg-6">
                                    <div className="main-ws-sec">

                                        <UsuarioSessaoDetalhesHeader />

                                        <div className="tab-feed st2">
                                            <ul>
                                                <li data-tab="info-dd" >
                                                    <Link to="/usuarioSessaoDetalhes/10" title="">
                                                        <img src="images/ic2.png" alt="" />
                                                        <span>Info</span>
                                                    </Link>
                                                </li>
                                                <li data-tab="feed-dd" >
                                                    <Link to="/usuarioFeed/10" title="">
                                                        <img src="images/ic1.png" alt="" />
                                                        <span>Feed</span>
                                                    </Link>
                                                </li>

                                                <li data-tab="saved-jobs" className="active">
                                                    <Link to="/usuarioImoveis/10" title="">
                                                        <img src="images/ic4.png" alt="" />
                                                        <span>Imóveis</span>
                                                    </Link>
                                                </li>
                                                <li data-tab="my-bids">
                                                    <Link to="/usuarioFavoritos/10" title="">
                                                        <img src="images/ic5.png" alt="" />
                                                        <span>Favoritos</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div> {/* tab-feed end */}

                                        {
                                            this.state.listaImoveis.map(imovel => {
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

                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="right-sidebar">
                                        <div className="message-btn">
                                            <Link to="/imovelAdicionar" title=""><i className="fa fa-plus"></i> Imóvel </Link>  {/*  este link eh usado apenas pelo usuario da sessao*/}
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href="#" title=""><i className="fa fa-envelope"></i> Mensagem</a>
                                        </div>

                                        <UsuarioSessaoMenuFuncionalidades />

                                        <ImovelDestaqueUsuario />

                                    </div> {/*right-sidebar end */}
                                </div>
                            </div>
                        </div> {/* main-section-data end */}
                    </div>
                </div>
            </main>
        </div>
           
      )
  }
}

export default UsuarioImoveis
