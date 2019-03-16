import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UsuarioSessaoMenuFuncionalidades extends Component {
    render() {
        return (
            <div className="widget widget-about">
                <div className="sd-title">
                    <h3>Menu</h3>
                </div>
                <ul className="social_links">
                    <li><Link to="/ofertasRecebidas/10"       title=""><i className="la la-globe"></i>Ofertas</Link></li>
                    <li><Link to="/visualizacoesRecebidas/10" title=""><i className="la la-globe"></i>Visualizacoes</Link></li>
                    <li><Link to="/parceriasRecebidas/10"   title=""><i className="la la-globe"></i>Parcerias</Link></li>
                    <li><Link to="/intermediacoesRecebidas/10" title=""><i className="la la-globe"></i>Intermediações</Link></li>   
                    <li><Link to="/indicacoesRecebidas/10" title=""><i className="la la-globe"></i>Indicações</Link></li>
                </ul>                
            </div>
        );
    }
}

export default UsuarioSessaoMenuFuncionalidades;