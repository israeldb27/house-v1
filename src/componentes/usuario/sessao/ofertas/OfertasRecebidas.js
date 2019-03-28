import React, { Component } from 'react';
import UsuarioResumoDetalhes from '../../UsuarioResumoDetalhes';
import UsuarioResumoContatos from '../../UsuarioResumoContatos';
import { Link } from 'react-router-dom';
import UsuarioSessaoMenuFuncionalidades from '../../UsuarioSessaoMenuFuncionalidades';
import imovel from '../../../fotos/imovel.jpg';

class OfertasRecebidas extends Component {
    render() {
        return (
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
									<div className="user-tab-sec">
										<h3>Israel Barreto</h3>
										<div className="star-descp">
											<span>Normal</span>
											<ul>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
											</ul>
											<a href="#" title="">Status</a>
										</div> {/*star-descp end */}
									</div> {/*user-tab-sec end */}									

									<div className="tab-feed st2">
											<ul>
												<li data-tab="info-dd" className="active">
													<Link to="/ofertasRecebidas/10" title="">
														<img src="images/ic2.png" alt="" />
														<span>Recebidas</span>
													</Link>
												</li>
												<li data-tab="feed-dd" >
													<Link to="/ofertasEnviadas/10" title="">
														<img src="images/ic1.png" alt="" />
														<span>Enviadas</span>
													</Link>
												</li>
											</ul>
									</div> {/* tab-feed end */}    

                                    <div className="posts-section">
                                        <div className="post-bar">
                                            
                                            <div className="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt="" />
                                                <div className="sgt-text">
                                                    <h4>John Doe</h4>
                                                    <span>PHP Developer</span>
                                                </div>
                                            </div>

                                            <div className="post_topbar">                               
                                                
                                                <img src={imovel} alt="" style={{position: 'relative', float:'center', width: '100%'}} />
                                                <br />
                                            
                                            <div className="ed-opts">
                                                    <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                                                    <ul className="ed-options">
                                                        <li><a href="#" title="">Edit Post</a></li>
                                                        <li><a href="#" title="">Unsaved</a></li>
                                                        <li><a href="#" title="">Unbid</a></li>
                                                        <li><a href="#" title="">Close</a></li>
                                                        <li><a href="#" title="">Hide</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="epi-sec">
                                        
                                                <ul className="descp">
                                                    <li><img src="images/icon8.png" alt="" /><span>Boa Viagem, Niteroi - RJ</span></li>                                    
                                                </ul>
                                                <ul className="bk-links">
                                                    <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                    <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="job_descp">
                                                <h3>Luxo Residence Palace</h3>
                                                <ul className="job-dt">
                                                    <li><a href="#" title="">Venda</a></li>
                                                    <li><span>$ 30.000,00</span></li>                                  
                                                </ul> 
                                                                         
                                               
                                            </div>
                                            <div className="job-status-bar">
                                                <ul className="like-com">
                                                    <li>
                                                        <a href="#"><i className="la la-heart"></i> &nbsp;&nbsp;&nbsp;&nbsp;  </a>                                                      
                                                        <span>25</span>
                                                    </li>
                                                    <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Ofertas</a></li>
                                                </ul>
                                                <a><i className="la la-eye"></i>Views 50</a>
                                            </div>
                                        </div>{/*--post-bar end*/}
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
        );
    }
}

export default OfertasRecebidas;