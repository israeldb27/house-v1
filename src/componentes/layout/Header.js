import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import  '../../styles.css';
import '../includes/css/line-awesome-font-awesome.css';
import logo from '../fotos/logo.png'



class Header extends Component {
    render() {
        return (           

			<header>
				<div className="container">
					<div className="header-data">
						<div className="logo">
							<Link to="/home" title=""><img src={logo} alt="" /></Link>
						</div>
						<div className="search-bar">
							<form>
								<input type="text" name="search" placeholder="Search..." />
								<button type="submit"><i className="la la-search"></i></button>
							</form>
						</div>

						<nav>
							<ul>
								<li>
									<Link to="/imovelBuscar" title="">
										<span className="icon"><i className="fa fa-home"></i></span>
										Imóveis
								</Link>
								</li>

								<li>
									<Link to="/usuarioBuscar" title="">
										<span className="icon"><i className="fa fa-group"></i></span>
										Usuários
								</Link>
								</li>
							
								<li>
									<Link to="/mensagensUsuario/10" title="">
										<span><i className="fa fa-envelope-o"></i></span>
										Mensagens
									</Link>								
								</li>
								<li>
									<Link to="/listaNotificacoes/10" title="">
										<span className="icon"><i className="fa fa-bell-o"></i></span>
										Notificações
									</Link>
								</li>
								<li>
									<Link to="/usuarioConta/10" title="">
										<span className="icon"><i className="fa fa-pencil-square-o"></i></span>
										Conta
									</Link>
								</li>

							</ul>
						</nav>

					</div>
				</div>
			</header>                    
          
        );
    }
}

export default Header;