import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../layout/Header';

class UsuarioPrivacidade extends Component {
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
                                                        <h4>Convite</h4>
                                                        <p>Você aceita receber convites de outros usuários da plataforma </p>
                                                        <div class="toggle-btn">
                                                            <select class="browser-default custom-select">
                                                                <option value="S" selected>Sim &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                                                <option value="N">Não &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                                            </select>
                                                        </div>

                                                    </div>

                                                    <div class="notbar">
                                                        <h4>Seguidores</h4>
                                                        <p>Você aceita ter seguidores na plataforma?</p>
                                                        <div class="toggle-btn">
                                                            <select class="browser-default custom-select">
                                                                <option value="S" selected >Sim &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                                                <option value="N" > Não &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="notbar">
                                                        <h4>Timeline</h4>
                                                        <p>Quem pode visualizar as publicações em sua timeline?</p>
                                                        <div class="toggle-btn">
                                                            <select class="browser-default custom-select">
                                                                <option value="T" selected>Todos</option>
                                                                <option value="C"> Contatos</option>
                                                                <option value="S"> Seguidores</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="notbar">
                                                        <h4>Mensagem</h4>
                                                        <p>Quem pode me enviar mensagens?</p>
                                                        <div class="toggle-btn">
                                                            <select class="browser-default custom-select">
                                                                <option value="N" selected>Nínguem</option>
                                                                <option value="C"> Contatos</option>
                                                                <option value="S"> Seguidores</option>
                                                                <option value="T"> Todos</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="notbar">
                                                        <h4>Parceria</h4>
                                                        <p>Você deseja receber solicitações de parceria em seus imóveis?</p>
                                                        <div class="toggle-btn">
                                                            <select class="browser-default custom-select">
                                                                <option value="S" selected >Sim &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                                                <option value="N" > Não &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="notbar">
                                                        <h4>Intermediação</h4>
                                                        <p>Você deseja receber solicitações de intermediação em seus imóveis?</p>
                                                        <div class="toggle-btn">
                                                            <select class="browser-default custom-select">
                                                                <option value="S" selected >Sim &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                                                <option value="N" > Não &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="notbar">
                                                        <h4>Parceria</h4>
                                                        <p>Você deseja receber ofertas em seus imóveis?</p>
                                                        <div class="toggle-btn">
                                                            <select class="browser-default custom-select">
                                                                <option value="S" selected >Sim &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                                                <option value="N" > Não &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="notbar">
                                                        <h4>Parceria</h4>
                                                        <p>Você deseja receber comentários em seus imóveis?</p>
                                                        <div class="toggle-btn">
                                                            <select class="browser-default custom-select">
                                                                <option value="S" selected >Sim &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                                                <option value="N" > Não &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="save-stngs">
                                                        <ul>
                                                            <li><button type="submit">Salvar</button></li>
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

            </div>
           
        );
    }
}

export default UsuarioPrivacidade;