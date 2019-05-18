import React, { Component } from 'react'
import HeaderUsuarioCadastrar from './HeaderUsuarioCadastrar';
import { Link } from 'react-router-dom';
import history from '../../History';

class UsuarioCadastrarPasso2 extends Component {

 cadastrarSegundoPasso(e){
        e.preventDefault();
        console.log('Password: ' + this.password.value);
        console.log('Confirm password: ' + this.confirmaPassword.value);     
        history.push('/usuarioCadastrarPasso3');
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
                                                    <form onSubmit={this.cadastrarSegundoPasso.bind(this)}>
                                                        <div className="cp-field">
                                                            <h5>Password</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="password" ref={(input) => this.password = input} name="old-password" placeholder="Password" />
                                                            </div>
                                                        </div>                                                       

                                                        <div className="cp-field">
                                                            <h5>Confirma Password</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="password" ref={(input) => this.confirmaPassword = input} name="repeat-password" placeholder="Valor" />                                                                
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

export default UsuarioCadastrarPasso2;
