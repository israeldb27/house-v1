import React, { Component } from 'react';
import PerfilUsuarioEnum from '../../common/PerfilUsuarioEnum';
import UsuarioResultadoBuscar from './UsuarioResultadoBuscar';
import Header from '../../layout/Header';


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

    buscarChaveUsuario(event){
        event.preventDefault();
        console.log('Chave busca: ' + this.chave.value);
    }

    buscarUsuario(event){
        event.preventDefault();
        console.log('invocou metodo buscarUsuario');
        console.log('localizacao selecionado: ' + this.localizacao.value);
        console.log('perfil selecionado: ' + this.perfil.value);
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