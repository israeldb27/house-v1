import React, { Component } from 'react';
import UsuarioResumoDetalhes from './UsuarioResumoDetalhes';
import UsuarioResumoContatos from './UsuarioResumoContatos';
import ImovelDestaqueUsuario from '../imovel/ImovelDestaqueUsuario';
import UsuarioInfoGerais from './sessao/UsuarioInfoGerais';
import { Link } from 'react-router-dom';
import UsuarioSessaoMenuFuncionalidades from './UsuarioSessaoMenuFuncionalidades';

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
									<div className="user-tab-sec mb-3 p-3 bg-white">
										<h3>Israel Barreto</h3>
										<div className="row mb-2">
											<div className="col-6 p-0 mb-1">
												<span>Normal </span>
											</div>
											<div className="col-6 p-0 mb-1">
												<div className="star-descp m-0 d-inline-block float-none">
													<ul>
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star-half-o"></i></li>
													</ul>
												</div> {/*star-descp end */}
											</div>
											<div className="col-6 p-0 mb-1">
												<span>Membro desde 01/01/2019</span>
											</div>
											<div className="col-6 p-0 mb-1">
												<span>Niterói, RJ - Brasil</span>
											</div>
											<dvi className="col-6 p-0 mb-1">
												<span>Total de Imóveis: 999</span>
											</dvi>
										</div>

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

									<UsuarioSessaoMenuFuncionalidades /> 
								
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