import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class UsuarioFotoPrincipal extends Component {
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
                                <Link class="nav-item nav-link  active" id="nav-status-tab" data-toggle="tab" to="/usuarioFotoPrincipal/10" role="tab" aria-controls="nav-status" aria-selected="false"><i class="fa fa-file-image-o"></i>Foto Principal</Link>
                                <Link class="nav-item nav-link " id="nav-password-tab" data-toggle="tab" to="/usuarioPassword/10" role="tab" aria-controls="nav-password" aria-selected="false"><i class="fa fa-lock"></i>Mudar Senha</Link>                                
                                <Link className="nav-item nav-link" id="privacy" data-toggle="tab" to="/usuarioPrivacidade/10" role="tab" aria-controls="privacy" aria-selected="false"><i className="fa fa-paw"></i>Privacidade</Link>
                                <Link className="nav-item nav-link" id="nav-deactivate-tab" data-toggle="tab" to="/usuarioDesativarConta/10" role="tab" aria-controls="nav-deactivate" aria-selected="false"><i className="fa fa-random"></i>Desativar Conta</Link>
                            </div>
                        </div>{/*acc-leftbar end*/}
                    </div>
                    <div className="col-lg-9">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-password" role="tabpanel" aria-labelledby="nav-password-tab">
                                <div className="acc-setting">
                                    <h3>Foto Principal</h3>
                                    <form>
                                        <div className="cp-field">
                                            <h5>Arquivo Foto</h5>
                                            <div className="cpp-fiel">
                                                <input type="text" name="old-password" placeholder="Selecione uma foto" />
                                                <i className="fa fa-file-image-o"></i>
                                            </div>
                                        </div>
                                       
                                        <div className="save-stngs pd2">
                                            <ul>
                                                <li><button type="submit">Salvar</button></li>                                        
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

export default UsuarioFotoPrincipal
