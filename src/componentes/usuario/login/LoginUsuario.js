import React, { Component } from 'react'
import history from '../../History';
import UsuarioService from '../../../services/UsuarioService';

class LoginUsuario extends Component {

  submitLogin(e) {
    e.preventDefault();
    console.log('chamou login');
    
    UsuarioService.login(+ this.email.value, this.password.value);
    history.push('/');
  }  

  goUsuarioCadastrar(e) {
    e.preventDefault();
    console.log('chamou goUsuarioCadastrar');
    history.push('/usuarioCadastrar');
  }

  render() {
    return (
        
        <div className="wrapper">
            <div className="sign-in-page">
                <div className="signin-popup">
                    <div className="signin-pop">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="cmp-info">
                                    <div className="cm-logo">
                                        <img src="images/cm-logo.png" alt="" />
                                        <p>House Pass, a sua primeira rede social voltada para o mercado imobiliário</p>
                                    </div>{/*cm-logo end*/}
                                    <img src="images/cm-main-img.png" alt="" />
                                </div>{/*cmp-info end*/}
                            </div>
                            <div className="col-lg-6">
                                <div className="login-sec">
                                    <ul className="sign-control">
                                        <li data-tab="tab-1" className="current"><a href="#" title="">Sign in</a></li>
                                        <li data-tab="tab-2"><a href="#" title="">Sign up</a></li>
                                    </ul>
                                    <div className="sign_in_sec current" id="tab-1">

                                        <h3>Login</h3>
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-12 no-pdd">
                                                    <div className="sn-field">
                                                        <input type="text" name="email" placeholder="Email" ref={(input) => this.email = input} />
                                                        <i className="la la-user"></i>
                                                    </div>{/*sn-field end*/}
                                                </div>
                                                <div className="col-lg-12 no-pdd">
                                                    <div className="sn-field">
                                                        <input type="password" name="password" ref={(input) => this.password = input} placeholder="Password" />
                                                        <i className="la la-lock"></i>
                                                    </div>
                                                </div>                                            
                                                <div className="col-lg-12 no-pdd">
                                                    <button type="submit" value="submit" onClick={this.submitLogin.bind(this)}>Acessar</button>
                                                    &nbsp; &nbsp; &nbsp;
                                                    <button type="button" value="registrar"  onClick={this.goUsuarioCadastrar.bind(this)} >Registrar-se</button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>{/*sign_in_sec end*/}
                                    
                                </div>{/*login-sec end*/}
                            </div>
                        </div>
                    </div>{/*signin-pop end*/}
                </div>{/*signin-popup end*/}
   
            </div>{/*sign-in-page end*/}
        </div>
    )
  }
}

export default LoginUsuario
