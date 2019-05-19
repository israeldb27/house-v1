import React, { Component } from 'react'
import HeaderUsuarioCadastrar from './HeaderUsuarioCadastrar';
import { BrowserRouter, Link, Router } from 'react-router-dom';
import history from '../../History';

class UsuarioCadastrar extends Component {

  cadastrarPrimeiroPasso(e){
        e.preventDefault();
        console.log('Nome usuario: ' + this.nome.value);
        console.log('Email usuario: ' + this.email.value);
        console.log('Perfil usuario: ' + this.perfilUsuario.value);
        history.push('/usuarioCadastrarPasso2');
  }  

  render() {
    return (
      <div>
        <HeaderUsuarioCadastrar />

        <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                                        <div className="main-left-sidebar no-margin">                                 

                                        </div>{/*--main-left-sidebar end*/}
                                    </div>

                                    <div className="col-lg-6 col-md-8 no-pd">
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="nav-acc" role="tabpanel" aria-labelledby="nav-acc-tab">
                                                <div className="acc-setting">
                                                    <h3>Novo Usuário</h3>
                                                    <form onSubmit={this.cadastrarPrimeiroPasso.bind(this)}>
                                                        <div className="cp-field">
                                                            <h5>Nome</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" ref={(input) => this.nome = input} name="nome" placeholder="Nome" />
                                                            </div>
                                                        </div>    

                                                        <div className="cp-field">
                                                            <h5>Email</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" ref={(input) => this.email = input} name="email" placeholder="Email" />                                                                
                                                            </div>
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Perfil Usuário</h5>
                                                            <div className="cpp-fiel">                                                                
                                                                <select ref={(select) => this.perfilUsuario = select}>
                                                                    <option  value=""> Selecione uma opção</option>
                                                                    <option  value="N"> Normal</option>
                                                                    <option  value="C"> Corretor</option>
                                                                    <option  value="I"> Imobiliária</option>        
                                                                </select>  
                                                            </div>
                                                        </div>                                                

                                                        <div className="save-stngs pd2">
                                                            <ul>
                                                                <li><button type="submit">Avançar Cadastro</button></li>                                                                
                                                            </ul>
                                                        </div>{/*save-stngs end*/}
                                                    </form>
                                                </div>{/*acc-setting end*/}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
        
      </div>
    )
  }
}

export default UsuarioCadastrar
