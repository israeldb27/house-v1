import React, { Component } from 'react';
import UsuarioResumoDetalhes from '../../UsuarioResumoDetalhes';
import UsuarioResumoContatos from '../../UsuarioResumoContatos';
import { Link } from 'react-router-dom';
import UsuarioSessaoMenuFuncionalidades from '../../UsuarioSessaoMenuFuncionalidades';
import imgImovel from '../../../fotos/imovel.jpg';
import Header from '../../../layout/Header';
import ParceriaService from '../../../../services/ParceriaService';
import UsuarioSessaoDetalhesHeader from '../UsuarioSessaoDetalhesHeader';

class ParceriasFechadas extends Component {

    constructor() {
        super();
             
        this.state = {
           listaImoveisParcerias: [] 
        }
    } 

    componentDidMount(){
        let idUsuario = 1;
        ParceriaService.listarImoveisParceriasFechadas(idUsuario).then(listaImoveis => {
            this.setState({listaImoveisParcerias: listaImoveis})
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
                                                        <Link to="/parceriasRecebidas/10" title="">
                                                            <img src="images/ic2.png" alt="" />
                                                            <span>Recebidas</span>
                                                        </Link>
                                                    </li>
                                                    <li data-tab="feed-dd" >
                                                        <Link to="/parceriasEnviadas/10" title="">
                                                            <img src="images/ic1.png" alt="" />
                                                            <span>Enviadas</span>
                                                        </Link>
                                                    </li>
                                                    <li data-tab="feed-dd" className="active">
                                                        <Link to="/parceriasFechadas/10" title="">
                                                            <img src="images/ic1.png" alt="" />
                                                            <span>Fechadas</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div> {/* tab-feed end */}

                                            <div className="posts-section">
                                            {
                                                        this.state.listaImoveisParcerias.map(imovel => {
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
                                                                            <img src={imgImovel} alt="" style={{ position: 'relative', float: 'center', width: '100%' }} />
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
                                                                
                                                                </div>
                                                            )
                                                        })
                                                    }  
                                                
                                            </div>

                                        </div> {/*main-ws-sec end */}
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="right-sidebar">
                                            <div className="message-btn">
                                                <a href="#" title=""><i className="fa fa-envelope"></i> Message</a>
                                            </div>

                                            <UsuarioSessaoMenuFuncionalidades />

                                        </div> {/*right-sidebar end */}
                                    </div>
                                </div>
                            </div> {/* main-section-data end */}
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default ParceriasFechadas;