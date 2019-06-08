import React, { Component } from 'react';
import UsuarioResumoDetalhes from './UsuarioResumoDetalhes';
import UsuarioResumoContatos from './UsuarioResumoContatos';
import ImovelDestaqueUsuario from '../imovel/ImovelDestaqueUsuario';
import UsuarioInfoGerais from './sessao/UsuarioInfoGerais';
import { Link } from 'react-router-dom';
import UsuarioSessaoMenuFuncionalidades from './UsuarioSessaoMenuFuncionalidades';
import UsuarioSessaoDetalhesHeader from './sessao/UsuarioSessaoDetalhesHeader';
import Header from '../layout/Header';

class UsuarioSessaoDetalhes extends Component {
    render() {
        return (
			
			<div>
			<Header />			

			<br /> <br />
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
													<Link to="/usuarioFavoritos/10" title="">
														<img src="images/ic5.png" alt="" />
														<span>Favoritos</span>
													</Link>
												</li>
											</ul>
									</div>                                 
                                  
									<UsuarioInfoGerais />								
									
								</div> {/*main-ws-sec end */}
							</div>

							<div className="col-lg-3">
								<div className="left-sidebar">
									<div className="message-btn">
										<Link to="/imovelAdicionar" title=""><i className="fa fa-plus"></i> Imóvel </Link>  {/*  este link eh usado apenas pelo usuario da sessao*/}
										&nbsp;&nbsp;&nbsp;&nbsp;
										<Link to="/mensagensUsuario/10" title=""><i className="fa fa-envelope"></i> Mensagem</Link>
									</div>

									<UsuarioSessaoMenuFuncionalidades /> 
								
									<ImovelDestaqueUsuario /> 

								</div> 
							</div>
						</div>
					</div> 
				</div> 
			</div>
		</main>  

		</div>
        );
    }
}

export default UsuarioSessaoDetalhes;