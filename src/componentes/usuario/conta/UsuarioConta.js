import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class UsuarioConta extends Component {
  render() {
    return (
        <section class="profile-account-setting">
         <div class="container">
            <div class="account-tabs-setting">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="acc-leftbar">
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <Link class="nav-item nav-link active" id="nav-acc-tab" data-toggle="tab" to="/usuarioConta/10" role="tab" aria-controls="nav-acc" aria-selected="true"><i class="la la-cogs"></i>Conta</Link>
                                <a class="nav-item nav-link" id="nav-status-tab" data-toggle="tab" href="#nav-status" role="tab" aria-controls="nav-status" aria-selected="false"><i class="fa fa-line-chart"></i>Status</a>
                                <Link class="nav-item nav-link " id="nav-password-tab" data-toggle="tab" to="/usuarioPassword/10" role="tab" aria-controls="nav-password" aria-selected="false"><i class="fa fa-lock"></i>Mudar Senha</Link>                                
                                <Link class="nav-item nav-link" id="privacy" data-toggle="tab" to="/usuarioPrivacidade/10" role="tab" aria-controls="privacy" aria-selected="false"><i class="fa fa-paw"></i>Privacidade</Link>                                
                                <Link class="nav-item nav-link" id="nav-deactivate-tab" data-toggle="tab" to="/usuarioDesativarConta/10" role="tab" aria-controls="nav-deactivate" aria-selected="false"><i class="fa fa-random"></i>Desativar Conta</Link>
                              </div>
                        </div>{/*acc-leftbar end*/}
                    </div>
                    <div class="col-lg-9">
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-acc" role="tabpanel" aria-labelledby="nav-acc-tab">
                                <div class="acc-setting">
                                    <h3>Conta</h3>
                                    <form>
                                        <div class="cp-field">
                                            <h5>Nome</h5>
                                            <div class="cpp-fiel">
                                                <input type="text" name="old-password" placeholder="Nome" />                                                
                                            </div>
                                        </div>
                                        <div class="cp-field">
                                            <h5>Email</h5>
                                            <div class="cpp-fiel">
                                                <input type="text" name="new-password" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div class="cp-field">
                                            <h5>Repeat Password</h5>
                                            <div class="cpp-fiel">
                                                <input type="text" name="repeat-password" placeholder="Repeat Password" />
                                                <i class="fa fa-lock"></i>
                                            </div>
                                        </div>
                                        <div class="cp-field">
                                            <h5><a href="#" title="">Forgot Password?</a></h5>
                                        </div>
                                        <div class="save-stngs pd2">
                                            <ul>
                                                <li><button type="submit">Save Setting</button></li>
                                                <li><button type="submit">Restore Setting</button></li>
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

    )
  }
}

export default UsuarioConta
