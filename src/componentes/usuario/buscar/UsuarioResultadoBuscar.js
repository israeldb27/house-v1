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
                                <div className="col-lg-4 col-md-4 col-sm-6" key={usuario.id}>
                                    <div className="company_profile_info">
                                        <div className="company-up-info">
                                            <img src="http://via.placeholder.com/90x90" alt=""  />
                                            <h3>{usuario.nome}</h3>                                            
                                            {
                                                usuario.perfil === 'C' &&  ( <h4>Corretor</h4>  ) 
                                            } 
                                            {
                                                usuario.perfil === 'I' &&  ( <h4>Imobiliária</h4>  ) 
                                            } 
                                            {
                                                usuario.perfil === 'N' &&  ( <h4>Normal</h4>  ) 
                                            } 
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
