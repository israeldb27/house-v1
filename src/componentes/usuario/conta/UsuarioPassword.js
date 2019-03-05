import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class UsuarioPassword extends Component {
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
                                    <a className="nav-item nav-link active" id="nav-password-tab" data-toggle="tab" href="#nav-password" role="tab" aria-controls="nav-password" aria-selected="false"><i className="fa fa-lock"></i>Mudar Senha</a>
                                    <Link className="nav-item nav-link" id="privacy" data-toggle="tab" to="/usuarioPrivacidade/10" role="tab" aria-controls="privacy" aria-selected="false"><i className="fa fa-paw"></i>Privacidade</Link>
                                    <Link className="nav-item nav-link" id="nav-deactivate-tab" data-toggle="tab" to="/usuarioDesativarConta/10" role="tab" aria-controls="nav-deactivate" aria-selected="false"><i className="fa fa-random"></i>Desativar Conta</Link>
                                </div>
                            </div>{/*acc-leftbar end*/}
                        </div>
                        <div className="col-lg-9">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-password" role="tabpanel" aria-labelledby="nav-password-tab">
                                    <div className="acc-setting">
                                        <h3>Account Setting</h3>
                                        <form>
                                            <div className="cp-field">
                                                <h5>Old Password</h5>
                                                <div className="cpp-fiel">
                                                    <input type="text" name="old-password" placeholder="Old Password" />
                                                    <i className="fa fa-lock"></i>
                                                </div>
                                            </div>
                                            <div className="cp-field">
                                                <h5>New Password</h5>
                                                <div className="cpp-fiel">
                                                    <input type="text" name="new-password" placeholder="New Password" />
                                                    <i className="fa fa-lock"></i>
                                                </div>
                                            </div>
                                            <div className="cp-field">
                                                <h5>Repeat Password</h5>
                                                <div className="cpp-fiel">
                                                    <input type="text" name="repeat-password" placeholder="Repeat Password" />
                                                    <i className="fa fa-lock"></i>
                                                </div>
                                            </div>
                                            <div className="cp-field">
                                                <h5><a href="#" title="">Forgot Password?</a></h5>
                                            </div>
                                            <div className="save-stngs pd2">
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

export default UsuarioPassword
