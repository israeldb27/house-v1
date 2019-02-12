import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UsuarioPrivacidade extends Component {
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
                                        <a className="nav-item nav-link" id="nav-status-tab" data-toggle="tab" href="#nav-status" role="tab" aria-controls="nav-status" aria-selected="false"><i className="fa fa-line-chart"></i>Status</a>
                                        <Link className="nav-item nav-link" id="nav-password-tab" data-toggle="tab" to="/usuarioPassword/10" role="tab" aria-controls="nav-password" aria-selected="false"><i className="fa fa-lock"></i>Mudar Senha</Link>
                                        <a className="nav-item nav-link active" id="privacy" data-toggle="tab" href="#privacy" role="tab" aria-controls="privacy" aria-selected="false"><i className="fa fa-paw"></i>Privacidade</a>
                                        <Link className="nav-item nav-link" id="nav-deactivate-tab" data-toggle="tab" to="/usuarioDesativarConta/10" role="tab" aria-controls="nav-deactivate" aria-selected="false"><i className="fa fa-random"></i>Desativar Conta</Link>
                                    </div>
                                </div>{/*acc-leftbar end*/}
                            </div>
                            <div className="col-lg-9">
                                <div className="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="nav-acc" role="tabpanel" aria-labelledby="nav-acc-tab">
                                        <div class="acc-setting">
                                            <h3>Privacidade</h3>
                                            <form>
                                                <div class="notbar">
                                                    <h4>Notification Sound</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium nulla quis erat dapibus, varius hendrerit neque suscipit. Integer in ex euismod, posuere lectus id</p>
                                                    <div class="toggle-btn">
                                                        <a href="#" title=""><img src="images/up-btn.png" alt="" /></a>
                                                    </div>
                                                </div>
                                                <div class="notbar">
                                                    <h4>Notification Email</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium nulla quis erat dapibus, varius hendrerit neque suscipit. Integer in ex euismod, posuere lectus id</p>
                                                    <div class="toggle-btn">
                                                        <a href="#" title=""><img src="images/up-btn.png" alt="" /></a>
                                                    </div>
                                                </div>
                                                <div class="notbar">
                                                    <h4>Chat Message Sound</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium nulla quis erat dapibus, varius hendrerit neque suscipit. Integer in ex euismod, posuere lectus id</p>
                                                    <div class="toggle-btn">
                                                        <a href="#" title=""><img src="images/up-btn.png" alt="" /></a>
                                                    </div>
                                                </div>
                                                <div class="save-stngs">
                                                    <ul>
                                                        <li><button type="submit">Save Setting</button></li>
                                                        <li><button type="submit">Restore Setting</button></li>
                                                    </ul>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>{/*account-tabs-setting end*/}
                </div>
            </section> 
        );
    }
}

export default UsuarioPrivacidade;