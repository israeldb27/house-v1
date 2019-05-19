import React, { Component } from 'react';
import UsuarioResumoDetalhes from '../UsuarioResumoDetalhes';
import UsuarioResumoContatos from '../UsuarioResumoContatos';
import ImovelDestaqueUsuario from '../../imovel/ImovelDestaqueUsuario';
import { Link } from 'react-router-dom';
import imgImovel from '../../fotos/imovel2.jpg';
import UsuarioSessaoMenuFuncionalidades from '../UsuarioSessaoMenuFuncionalidades';
import UsuarioSessaoDetalhesHeader from './UsuarioSessaoDetalhesHeader';
import imovel2 from '../../fotos/imovel2.jpg';
import Header from '../../layout/Header';
import FavoritoService from '../../../services/FavoritoService';


class UsuarioFavoritos extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           listaImoveis: []
        }
      }
    
      componentDidMount(){           
            let idUsuario = 1;
            FavoritoService.listarFavoritosPorUsuario(idUsuario).then(listaImoveisFavoritos => {
                this.setState({listaImoveis: listaImoveisFavoritos});              
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

                                                <li data-tab="saved-jobs" >
                                                    <Link to="/usuarioImoveis/10" title="">
                                                        <img src="images/ic4.png" alt="" />
                                                        <span>Imóveis</span>
                                                    </Link>
                                                </li>
                                                <li data-tab="my-bids" className="active">
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
                                                                <h4>{imovel.nomeUsuario}</h4>
                                                                <span>{imovel.perfilUsuario}</span>
                                                            </div>
                                                        </div>

                                                        <div className="post_topbar">
                                                            <h3 style={{ fontSize: '20px' }}><strong>{imovel.titulo} </strong></h3> <br />
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
                                                            <p>{imovel.descricao}... <a href="#" title="">view more</a></p>
                                                            <ul className="skill-tags">
                                                                <li><a href="#" title="">{imovel.area} m²</a></li>
                                                                <li><a href="#" title="">{imovel.quantQuartos} Quarto(s)</a></li>
                                                                <li><a href="#" title="">{imovel.quantBanheiros} Banheiro(s)</a></li>
                                                                <li><a href="#" title="">{imovel.quantVagas} Vaga(s)</a></li>
                                                                <li><a href="#" title="">{imovel.quantSuites} Suíte(s)</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job-status-bar">
                                                            <ul className="like-com">
                                                                <li>
                                                                    <a href="#"><i className="la la-heart"></i> &nbsp;&nbsp;</a>
                                                                    <img src="images/liked-img.png" alt="" />
                                                                    <span>{imovel.quantLikes}</span>
                                                                </li>
                                                                <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment {imovel.quantComments}</a></li>
                                                            </ul>
                                                            <a><i className="la la-eye"></i>Views {imovel.quantViews}</a>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }

                                    </div> {/*main-ws-sec end */}
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

export default UsuarioFavoritos
