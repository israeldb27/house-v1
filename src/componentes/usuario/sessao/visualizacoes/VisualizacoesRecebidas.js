import React, { Component } from 'react';
import UsuarioResumoDetalhes from '../../UsuarioResumoDetalhes';
import UsuarioResumoContatos from '../../UsuarioResumoContatos';
import { Link } from 'react-router-dom';
import UsuarioSessaoMenuFuncionalidades from '../../UsuarioSessaoMenuFuncionalidades';
import imovel2 from '../../../fotos/imovel.jpg';
import Header from '../../../layout/Header';
import VisualizacaoService from '../../../../services/VisualizacaoService';
import UsuarioSessaoDetalhesHeader from '../UsuarioSessaoDetalhesHeader';
import { getAcaoImovel, getPerfilUsuario, getTipoImovel } from '../../../common/Utils';

class VisualizacoesRecebidas extends Component {

    constructor() {
        super();
             
        this.state = {
           listaImoveisVisualizacoes: [] 
        }
    } 

    componentDidMount(){
        let idUsuario = 1;
        VisualizacaoService.listaImoveisVisualizacoesRecebidasPorUsuario(idUsuario).then(listaImoveis => {
            this.setState({listaImoveisVisualizacoes: listaImoveis})
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
                                                    <li data-tab="info-dd" className="active">
                                                        <Link to="/visualizacoesRecebidas/10" title="">
                                                            <img src="images/ic2.png" alt="" />
                                                            <span>Recebidas</span>
                                                        </Link>
                                                    </li>                                               
                                                </ul>
                                            </div> {/* tab-feed end */}

                                            <div className="posts-section">
                                            {
                                                this.state.listaImoveisVisualizacoes.map(visualizacao => {
                                                    return (
                                                        <div className="post-bar" key={visualizacao._id}>

                                                            <div className="suggestion-usd">
                                                                <img src="http://via.placeholder.com/35x35" alt="" />
                                                                <div className="sgt-text">
                                                                    <h4>{visualizacao.usuarioVisitante.nome}</h4>          
                                                                    <span>{getPerfilUsuario(visualizacao.usuarioVisitante.perfil)}</span>                                                                              
                                                                </div>
                                                            </div>

                                                            <div className="post_topbar">
                                                                <h3 style={{fontSize: '20px'}}>{visualizacao.imovel.titulo}</h3> <br />
                                                                <Link to={{ pathname: `/visualizarImovelDetalhes/${visualizacao._id}` }}>
                                                                    <img src={imovel2} alt="" style={{ position: 'relative', float: 'center', width: '100%' }} />
                                                                </Link>
                                                                <br />
                                                            </div>
                                                            <div className="epi-sec">

                                                                <ul className="descp">
                                                                    <li><img src="images/icon8.png" alt="" /><span>{visualizacao.imovel.localizacao}</span></li>
                                                                </ul>
                                                                <ul className="bk-links">
                                                                    <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                                    <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="job_descp">                                        
                                                                <ul className="job-dt">
                                                                    <li><a href="#" title="">{getTipoImovel(visualizacao.imovel.tipoImovel)}</a></li>
                                                                    <li><a href="#" title="">{getAcaoImovel(visualizacao.imovel.acao)}</a></li>
                                                                    <li><span>$ {visualizacao.imovel.valor}</span></li>
                                                                </ul>
                                                                <ul className="job-dt" style={{ fontSize: '12px' }}>
                                                                    {
                                                                    visualizacao.imovel.valorIptu > 0 &&  ( <li><p>IPTU </p> $ {visualizacao.imovel.valorIptu} </li>  ) 
                                                                    }
                                                                    <li></li>
                                                                    {
                                                                        visualizacao.imovel.valorCondominio > 0 &&  ( <li><p>Condomínio </p> $ {visualizacao.imovel.valorCondominio} </li>  ) 
                                                                    }        
                                                                    <li></li>                
                                                                    {
                                                                        visualizacao.imovel.outrasTaxas > 0 &&  ( <li><p>Outras Taxas </p> $ {visualizacao.imovel.outrasTaxas} </li>  ) 
                                                                    }                        
                                                                </ul>

                                                                {
                                                                    visualizacao.imovel.descricao !== '' &&  ( <p>{visualizacao.imovel.descricao}... <a href="#" title="">view more</a></p>  ) 
                                                                }                
                                                                
                                                                <ul className="skill-tags">                                            
                                                                    {
                                                                        visualizacao.imovel.area > 0 &&  ( <li><a href="#" title="">{visualizacao.imovel.area} m²</a></li>  ) 
                                                                    }
                                                                    {
                                                                        visualizacao.imovel.quantQuartos > 0 &&  ( <li><a href="#" title="">{visualizacao.imovel.quantQuartos} Quartos(s)</a></li>  ) 
                                                                    }
                                                                    {
                                                                        visualizacao.imovel.quantBanheiros > 0 &&  ( <li><a href="#" title="">{visualizacao.imovel.quantBanheiros} Banheiro(s)</a></li>  ) 
                                                                    }
                                                                    {
                                                                        visualizacao.imovel.quantVagas > 0 &&  ( <li><a href="#" title="">{visualizacao.imovel.quantVagas} Vaga(s)</a></li>  ) 
                                                                    }                                            
                                                                    {
                                                                    visualizacao.imovel.quantSuites > 0 &&  ( <li><a href="#" title="">{visualizacao.imovel.quantSuites} Suíte(s)</a></li>  ) 
                                                                    }                                            
                                                                    
                                                                </ul>
                                                            </div>
                                                            <div className="job-status-bar">
                                                                    <ul className="like-com">                                                                    
                                                                        <li> <Link to="/" title="" style={{color: 'red'}}> {visualizacao.imovel.quantTotalVisualizacoes} &nbsp; Visualizações </Link></li>
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

export default VisualizacoesRecebidas;