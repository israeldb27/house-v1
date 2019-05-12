import React, { Component } from 'react'

class UsuarioResultadoBuscar extends Component {
  render() {
    return (
        <div className="col-lg-9">
            <div className="companies-list">
                <div className="row">

                    {
                        this.props.listaUsuarios.map(usuario => {
                            return (
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="company_profile_info">
                                        <div className="company-up-info">
                                            <img src="http://via.placeholder.com/90x90" alt="" />
                                            <h3>{usuario.nomeUsuario}</h3>
                                            <h4>{usuario.perfilUsuario}</h4>
                                            <ul>
                                                <li><a href="#" title="" className="follow">Seguir</a></li>
                                                <li><a href="#" title="" className="message-us">Convite</a></li>
                                            </ul>
                                        </div>
                                        <a href="#" title="" className="view-more-pro">View Profile</a>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
  }
}

export default UsuarioResultadoBuscar