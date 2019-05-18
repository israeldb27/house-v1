import React, { Component } from 'react';

import  '../../../styles.css';
import '../../includes/css/line-awesome-font-awesome.css';
import logo from '../../fotos/logo.png'

class HeaderUsuarioCadastrar extends Component {
    render() {
        return (           

			<header>
				<div className="container">
					<div className="header-data">
						<div className="logo">
							<img src={logo} alt="" />
						</div>
						<div className="search-bar">
							<br /> <br /> <br />
						</div>		

					</div>
				</div>
			</header>                    
          
        );
    }
}

export default HeaderUsuarioCadastrar;