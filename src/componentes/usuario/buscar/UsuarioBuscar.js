import React, { Component } from 'react';
import PerfilUsuarioEnum from '../../common/PerfilUsuarioEnum';


let id = 0;
function createData(id, nomeUsuario, perfilUsuario, urlFoto) {
  id += 1;
  return {id, nomeUsuario, perfilUsuario, urlFoto} ;
}

const rows = [
  createData(1, 'Lagoa Imoveis', 'Imobiliaria', '/img1.jpg' ),

  createData(2, 'Zirtaeb', 'Imobiliaria', '/img1.jpg'),

  createData(3, 'Pamela Alves', 'Corretor', '/img1.jpg'),

  createData(4, 'Israel Barreto', 'Normal', '/img1.jpg'),

  createData(5, 'Marli Barreto', 'Normal', '/img1.jpg')
];

class UsuarioBuscar extends Component {
    constructor() {
        super()  
     
        this.state = {
           perfilUsuario: [],
           listaUsuarios: [] 
        }
      } 

     componentDidMount() {
        this.setState({ perfilUsuario: PerfilUsuarioEnum.enumValues });  

        for (let i = 0; i < rows.length; i++){
            let list = this.state.listaUsuarios;
            list.push(rows[i]);
            this.setState({listaUsuarios: list});            
        }
    }

    render() {
        return (
            <div>
            <div className="search-sec">
                <div className="container">
                    <div className="search-box">
                        <form>
                            <input type="text" name="search" placeholder="Chave Busca Usuario"/>
                            <button type="submit">Buscar</button>
                        </form>
                    </div>{/*search-box end*/}
                </div>
            </div>{/*search-sec end*/}    

            <main>
                <div className="main-section">
                    <div className="container">
                        <div className="main-section-data">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="filter-secs">
                                        <div className="filter-heading">
                                            <h3>Filtros</h3>
                                            <a href="#" title="">Clear all filters</a>
                                        </div>{/*filter-heading end*/}
                                        <div className="paddy">
                                            <div className="filter-dd">
                                                <div className="filter-ttl">
                                                    <h3>Localização</h3>                                                    
                                                </div>
                                                <form>
                                                    <input type="text" name="search-skills" placeholder="Digite uma localização" />
                                                </form>
                                            </div>
                                          
                                            <div className="filter-dd">
                                                    <div className="filter-ttl">
                                                        <h3>Perfil Usuário</h3>
                                                        <a href="#" title="">Clear</a>
                                                    </div>
                                                    <form className="job-tp">
                                                        <select>
                                                            {
                                                                this.state.perfilUsuario.map(perfil=> {
                                                                    return (
                                                                        <option key={perfil.id} value={perfil.id}>{perfil.description}</option>
                                                                    );                                           
                                                                })
                                                            }                       
                                                        </select>
                                                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                    </form>
                                             </div>
                                           
                                            <div className="filter-dd">
                                                <div className="filter-ttl">
                                                    <h3>Job Type</h3>
                                                    <a href="#" title="">Clear</a>
                                                </div>
                                                <form className="job-tp">
                                                    <select>
                                                        <option>Select a job type</option>
                                                        <option>Select a job type</option>
                                                        <option>Select a job type</option>
                                                        <option>Select a job type</option>
                                                    </select>
                                                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                </form>
                                            </div>
                                            
                                            <div className="filter-dd">
                                                <div className="filter-ttl">
                                                    <h3>Experience Level</h3>
                                                    <a href="#" title="">Clear</a>
                                                </div>
                                                <form className="job-tp">
                                                    <select>
                                                        <option>Select a experience level</option>
                                                        <option>3 years</option>
                                                        <option>4 years</option>
                                                        <option>5 years</option>
                                                    </select>
                                                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                </form>
                                            </div>
                                            <div className="filter-dd">
                                                <div className="filter-ttl">
                                                    <h3>Countries</h3>
                                                    <a href="#" title="">Clear</a>
                                                </div>
                                                <form className="job-tp">
                                                    <select>
                                                        <option>Select a country</option>
                                                        <option>United Kingdom</option>
                                                        <option>United States</option>
                                                        <option>Russia</option>
                                                    </select>
                                                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                </form>
                                            </div>
                                        </div>
                                    </div>{/*filter-secs end*/}
                                </div>

                                    <div className="col-lg-9">
                                        <div className="companies-list">
                                            <div className="row">
                                                
                                                    {
                                                        this.state.listaUsuarios.map(usuario=> {
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
                                        </div>{/*-companies-list end*/}
                                    </div>
                            </div>
                        </div>{/* main-section-data end*/}
                    </div>
                </div>
            </main>

        </div>
        );
    }
}


export default UsuarioBuscar;