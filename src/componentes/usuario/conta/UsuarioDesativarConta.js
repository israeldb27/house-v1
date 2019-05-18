import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../layout/Header';

class UsuarioDesativarConta extends Component {

  desativarConta(event){

    event.preventDefault();
    console.log('email  selecionado: ' + this.email.value);
    console.log('password  selecionado: ' + this.password.value);
    console.log('explicacao  selecionado: ' + this.explicacao.value);    
  }  

  render() {
    return (

        <div>
            <Header />
            <br />

            <section className="profile-account-setting">
                <div className="container">
                    <div className="account-tabs-setting">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="acc-leftbar">
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <Link className="nav-item nav-link" id="nav-acc-tab" data-toggle="tab" to="/usuarioConta/10" role="tab" aria-controls="nav-acc" aria-selected="true"><i className="la la-cogs"></i>Conta</Link>
                                        <Link class="nav-item nav-link" id="nav-status-tab" data-toggle="tab" to="/usuarioFotoPrincipal/10" role="tab" aria-controls="nav-status" aria-selected="false"><i class="fa fa-file-image-o"></i>Foto Principal</Link>
                                        <Link className="nav-item nav-link" id="nav-password-tab" data-toggle="tab" to="/usuarioPassword/10" role="tab" aria-controls="nav-password" aria-selected="false"><i className="fa fa-lock"></i>Mudar Senha</Link>
                                        <a className="nav-item nav-link" id="privacy" data-toggle="tab" href="#privacy" role="tab" aria-controls="privacy" aria-selected="false"><i className="fa fa-paw"></i>Privacidade</a>
                                        <a className="nav-item nav-link active" id="nav-deactivate-tab" data-toggle="tab" href="#nav-deactivate" role="tab" aria-controls="nav-deactivate" aria-selected="false"><i className="fa fa-random"></i>Desativar Conta</a>
                                    </div>
                                </div>{/*acc-leftbar end*/}
                            </div>
                            <div className="col-lg-9">
                                <div className="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="nav-deactivate" role="tabpanel" aria-labelledby="nav-deactivate-tab">
                                        <div class="acc-setting">
                                            <h3>Desativar Conta</h3>
                                            <form onSubmit={this.desativarConta.bind(this)}>
                                                <div class="cp-field">
                                                    <h5>Email</h5>
                                                    <div class="cpp-fiel">
                                                        <input type="text" name="email" ref={(input) => this.email = input} placeholder="Email" />
                                                        <i class="fa fa-envelope"></i>
                                                    </div>
                                                </div>
                                                <div class="cp-field">
                                                    <h5>Password</h5>
                                                    <div class="cpp-fiel">
                                                        <input type="password" name="password" ref={(input) => this.password = input} placeholder="Password" />
                                                        <i class="fa fa-lock"></i>
                                                    </div>
                                                </div>
                                                <div class="cp-field">
                                                    <h5>Explicação </h5>
                                                    <textarea ref={(textarea) => this.explicacao = textarea} ></textarea>
                                                </div>

                                                <div class="save-stngs pd3">
                                                    <ul>
                                                        <li><button type="submit">Desativar</button></li>
                                                    </ul>
                                                </div>{/*save-stngs end*/}
                                            </form>
                                        </div>{/*acc-setting end*/}
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>{/*account-tabs-setting end*/}
                </div>
            </section>
        </div>    

        

    )
  }
}

export default UsuarioDesativarConta
