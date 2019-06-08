import React, { Component } from 'react';
import UsuarioResumoDetalhes from '../../UsuarioResumoDetalhes';
import UsuarioResumoContatos from '../../UsuarioResumoContatos';
import { Link } from 'react-router-dom';
import UsuarioSessaoMenuFuncionalidades from '../../UsuarioSessaoMenuFuncionalidades';
import imovel2 from '../../../fotos/imovel.jpg';
import Header from '../../../layout/Header';
import OfertaService from '../../../../services/OfertaService';
import UsuarioSessaoDetalhesHeader from '../UsuarioSessaoDetalhesHeader';
import { getAcaoImovel, getPerfilUsuario, getTipoImovel } from '../../../common/Utils';

class OfertasEnviadas extends Component {

    constructor() {
        super();
             
        this.state = {
           listaImoveisOfertas: [] 
        }
    } 

    componentDidMount(){
        let idUsuario = 1;
        OfertaService.listarImoveisOfertasEnviadasPorUsuario(idUsuario).then(listaImoveis => {
            this.setState({listaImoveisOfertas: listaImoveis})
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
                                                        <Link to="/ofertasRecebidas/10" title="">
                                                            <img src="images/ic2.png" alt="" />
                                                            <span>Recebidas</span>
                                                        </Link>
                                                    </li>
                                                    <li data-tab="feed-dd" className="active">
                                                        <Link to="/ofertasEnviadas/10" title="">
                                                            <img src="images/ic1.png" alt="" />
                                                            <span>Enviadas</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div> {/* tab-feed end */}

                                            <div className="posts-section">
                                                
                                            {
                                                this.state.listaImoveisOfertas.map(oferta => {
                                                    return (
                                                        <div className="post-bar" key={oferta._id}>

                                                            <div className="suggestion-usd">
                                                                <img src="http://via.placeholder.com/35x35" alt="" />
                                                                <div className="sgt-text">
                                                                    <h4>{oferta.usuarioOferta.nome}</h4>          
                                                                    <span>{getPerfilUsuario(oferta.usuarioOferta.perfil)}</span>                                                                              
                                                                </div>
                                                            </div>

                                                            <div className="post_topbar">
                                                                <h3 style={{fontSize: '20px'}}>{oferta.imovel.titulo}</h3> <br />
                                                                <Link to={{ pathname: `/visualizarImovelDetalhes/${oferta._id}` }}>
                                                                    <img src={imovel2} alt="" style={{ position: 'relative', float: 'center', width: '100%' }} />
                                                                </Link>
                                                                <br />
                                                            </div>
                                                            <div className="epi-sec">

                                                                <ul className="descp">
                                                                    <li><img src="images/icon8.png" alt="" /><span>{oferta.imovel.localizacao}</span></li>
                                                                </ul>
                                                                <ul className="bk-links">
                                                                    <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                                    <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="job_descp">                                        
                                                                <ul className="job-dt">
                                                                    <li><a href="#" title="">{getTipoImovel(oferta.imovel.tipoImovel)}</a></li>
                                                                    <li><a href="#" title="">{getAcaoImovel(oferta.imovel.acao)}</a></li>
                                                                    <li><span>$ {oferta.imovel.valor}</span></li>
                                                                </ul>
                                                                <ul className="job-dt" style={{ fontSize: '12px' }}>
                                                                    {
                                                                    oferta.imovel.valorIptu > 0 &&  ( <li><p>IPTU </p> $ {oferta.imovel.valorIptu} </li>  ) 
                                                                    }
                                                                    <li></li>
                                                                    {
                                                                        oferta.imovel.valorCondominio > 0 &&  ( <li><p>Condomínio </p> $ {oferta.imovel.valorCondominio} </li>  ) 
                                                                    }        
                                                                    <li></li>                
                                                                    {
                                                                        oferta.imovel.outrasTaxas > 0 &&  ( <li><p>Outras Taxas </p> $ {oferta.imovel.outrasTaxas} </li>  ) 
                                                                    }                        
                                                                </ul>

                                                                {
                                                                    oferta.imovel.descricao !== '' &&  ( <p>{oferta.imovel.descricao}... <a href="#" title="">view more</a></p>  ) 
                                                                }                
                                                                
                                                                <ul className="skill-tags">                                            
                                                                    {
                                                                        oferta.imovel.area > 0 &&  ( <li><a href="#" title="">{oferta.imovel.area} m²</a></li>  ) 
                                                                    }
                                                                    {
                                                                        oferta.imovel.quantQuartos > 0 &&  ( <li><a href="#" title="">{oferta.imovel.quantQuartos} Quartos(s)</a></li>  ) 
                                                                    }
                                                                    {
                                                                        oferta.imovel.quantBanheiros > 0 &&  ( <li><a href="#" title="">{oferta.imovel.quantBanheiros} Banheiro(s)</a></li>  ) 
                                                                    }
                                                                    {
                                                                        oferta.imovel.quantVagas > 0 &&  ( <li><a href="#" title="">{oferta.imovel.quantVagas} Vaga(s)</a></li>  ) 
                                                                    }                                            
                                                                    {
                                                                    oferta.imovel.quantSuites > 0 &&  ( <li><a href="#" title="">{oferta.imovel.quantSuites} Suíte(s)</a></li>  ) 
                                                                    }                                            
                                                                    
                                                                </ul>
                                                            </div>
                                                            <div className="job-status-bar">
                                                                    <ul className="like-com">                                                                    
                                                                        <li> <Link to="/" title="" style={{color: 'red'}}> {oferta.imovel.quantTotalOfertas} &nbsp; Ofertas </Link></li>
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

export default OfertasEnviadas;