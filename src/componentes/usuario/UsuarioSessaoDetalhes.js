import React, { Component } from 'react';
import UsuarioResumoDetalhes from './UsuarioResumoDetalhes';
import UsuarioResumoContatos from './UsuarioResumoContatos';
import ImovelDestaqueUsuario from '../imovel/ImovelDestaqueUsuario';
import UsuarioInfoGerais from './detalhes/UsuarioInfoGerais';
import { Link } from 'react-router-dom';

class UsuarioSessaoDetalhes extends Component {
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

												<li data-tab="saved-jobs">
													<Link to="/usuarioImoveis/10" title="">
														<img src="images/ic4.png" alt="" />
														<span>Imóveis</span>
													</Link>
												</li>
												<li data-tab="my-bids">
													<Link to="/" title="">
														<img src="images/ic5.png" alt="" />
														<span>Favoritos</span>
													</Link>
												</li>
											</ul>
									</div> {/* tab-feed end */}                                    
                                  
									<UsuarioInfoGerais />
								
									
								</div> {/*main-ws-sec end */}
							</div>
							<div className="col-lg-3">
								<div className="right-sidebar">
									<div className="message-btn">
										<a href="#" title=""><i className="fa fa-envelope"></i> Message</a>
									</div>
								
									<ImovelDestaqueUsuario /> 

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

export default UsuarioSessaoDetalhes;