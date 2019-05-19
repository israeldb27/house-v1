import React, { Component } from 'react';
import PerfilUsuarioEnum from '../../common/PerfilUsuarioEnum';
import UsuarioResultadoBuscar from './UsuarioResultadoBuscar';
import Header from '../../layout/Header';
import UsuarioService from '../../../services/UsuarioService'


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
    }

    buscarChaveUsuario(event){
        event.preventDefault();
        console.log('Chave busca: ' + this.chave.value);

        UsuarioService.buscarUsuarioPorChave(this.chave.value).then(listaUsuarios => {
            this.setState({listaUsuarios: listaUsuarios})
        })  
    }

    buscarUsuario(event){
        event.preventDefault();
        console.log('invocou metodo buscarUsuario');
        
        UsuarioService.buscarUsuario(this.localizacao.value, this.perfil.value).then(listaUsuarios => {
            this.setState({listaUsuarios: listaUsuarios})
        })  
    }


    render() {
        return (
            <div>
             <Header />
             <br />   
             
            <div className="search-sec">
                <div className="container">
                    <div className="search-box">
                    <form onSubmit={this.buscarChaveUsuario.bind(this)}>
                            <input type="text" ref={(input) => this.chave = input} name="search" placeholder="Chave Busca Usuario"/>
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
                                        </div>
                                        <div className="paddy">
                                                <div className="filter-dd">
                                                    <div className="filter-ttl">
                                                        <h3>Localização</h3>
                                                    </div>
                                                    <form>
                                                        <input type="text" ref={(input) => this.localizacao = input} name="search-skills" placeholder="Digite uma localização" />
                                                    </form>
                                                </div>
                                          
                                            <div className="filter-dd">
                                                    <div className="filter-ttl">
                                                        <h3>Perfil Usuário</h3>
                                                        <a href="#" title="">Clear</a>
                                                    </div>
                                                    <form className="job-tp">
                                                    <select ref={(select) => this.perfil = select}>
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
                                          

                                            <div className="post-st">
                                                    <ul>                                
                                                        <li><a className="post-jb active" href="#" title="" onClick={this.buscarUsuario.bind(this)} >Buscar</a></li>
                                                        <br />  <br /> <br /> 
                                                    </ul>
                                            </div> 

                                        </div>
                                    </div>{/*filter-secs end*/}
                                </div>

                                    <UsuarioResultadoBuscar listaUsuarios={this.state.listaUsuarios} />
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