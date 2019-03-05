import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class UsuarioDesativarConta extends Component {
  render() {
    return (

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
                                        <form>
                                            <div class="cp-field">
                                                <h5>Email</h5>
                                                <div class="cpp-fiel">
                                                    <input type="text" name="email" placeholder="Email" />
                                                    <i class="fa fa-envelope"></i>
                                                </div>
                                            </div>
                                            <div class="cp-field">
                                                <h5>Password</h5>
                                                <div class="cpp-fiel">
                                                    <input type="password" name="password" placeholder="Password" />
                                                    <i class="fa fa-lock"></i>
                                                </div>
                                            </div>
                                            <div class="cp-field">
                                                <h5>Please Explain Further</h5>
                                                <textarea></textarea>
                                            </div>
                                            <div class="cp-field">
                                                <div class="fgt-sec">
                                                    <input type="checkbox" name="cc" id="c4" />
                                                    <label for="c4">
                                                        <span></span>
                                                    </label>
                                                    <small>Email option out</small>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium nulla quis erat dapibus, varius hendrerit neque suscipit. Integer in ex euismod, posuere lectus id,</p>
                                            </div>
                                            <div class="save-stngs pd3">
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

export default UsuarioDesativarConta
