import React, { Component } from 'react';
import UsuarioResumoDetalhes from './UsuarioResumoDetalhes';
import UsuarioResumoContatos from './UsuarioResumoContatos';
import ImovelDestaqueUsuario from '../imovel/ImovelDestaqueUsuario';
import UsuarioInfoGerais from './detalhes/UsuarioInfoGerais';
import UsuarioFeed from './detalhes/UsuarioFeed';
import UsuarioImoveis from './detalhes/UsuarioImoveis';
import UsuarioInteresses from './detalhes/UsuarioInteresses';

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
													<a href="#" title="">
														<img src="images/ic2.png" alt="" />
														<span>Info</span>
													</a>
												</li>
                                                <li data-tab="feed-dd" >
													<a href="#" title="">
														<img src="images/ic1.png" alt="" />
														<span>Feed</span>
													</a>
												</li>
												
												<li data-tab="saved-jobs">
													<a href="#" title="">
														<img src="images/ic4.png" alt="" />
														<span>Imóveis</span>
													</a>
												</li>
												<li data-tab="my-bids">
													<a href="#" title="">
														<img src="images/ic5.png" alt="" />
														<span>Interesses</span>
													</a>
												</li>
												<li data-tab="portfolio-dd">
													<a href="#" title="">
														<img src="images/ic3.png" alt="" />
														<span>Portfolio</span>
													</a>
												</li>
											
											</ul>
									</div> {/* tab-feed end */}
                                    
                                  
									<UsuarioInfoGerais />

									<UsuarioFeed />									                                
									
									<UsuarioImoveis />

									<UsuarioInteresses />

									
									
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