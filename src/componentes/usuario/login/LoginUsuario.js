import React, { Component } from 'react'
import history from '../../History';
import UsuarioService from '../../../services/UsuarioService';
import { setUsuarioStorage, getUsuarioStorage, setIdUsuarioStorage } from '../../common/Utils'

class LoginUsuario extends Component {

    constructor(props) {
        super(props)  
        this.state = {
          email: '',
          password: '',
          emailError: '',
          passwordError: '' 
        }
        
    }
    validate = () =>{
        let isValido = true;
        
        if (this.state.email === '' || this.state.email === undefined)  {                        
            this.setState({emailError: 'Campo Obrigatorio'})                
            isValido = false;
        }
        else {
            this.setState({emailError: ''})                
        }

        if (this.state.password === '' || this.state.password === undefined)  {                        
            this.setState({passwordError: 'Campo Obrigatorio'})                
            isValido = false;
        }
        else {
            this.setState({passwordError: ''})                
        }

        return isValido;
    }

    submitLogin = e => {
        e.preventDefault();
        console.log('chamou login');        
        const isValido = this.validate();
        if ( isValido ){
            UsuarioService.login(this.state.email, this.state.password).then(response => {
                const {nome, email, perfil, _id, accessToken, createdAt, localizacao} = response
                if ( accessToken !== undefined ){
                    console.log('Gerou token');
                    UsuarioService.buscarUsuarioPorId(_id).then(user => {
                        const usuario = {
                            nome: user.nome, 
                            email: user.email,
                            perfil: user.perfil, 
                            createdAt: user.createdAt,    
                            localizacao: user.localizacao,               
                            _id: user._id,
                            accessToken: accessToken,
                            quantTotalSeguidores: user.quantTotalSeguidores,
                            quantTotalContatos: user.quantTotalContatos,
                            quantTotalImoveis: user.quantTotalImoveis,
                            descricao: user.descricao
                        }
                        setUsuarioStorage(usuario);
                        setIdUsuarioStorage(_id);
                        console.log('usuario sessao: ' + JSON.stringify(usuario));
                        history.push('/home');    
                    })
                }
                else {
                    console.log(' nao conseguiu Gerou token')
                    this.setState({passwordError: 'Email ou senha invalida'})   
                }          
            })            
        }
        
    }  

    goUsuarioCadastrar(e) {
        e.preventDefault();
        console.log('chamou goUsuarioCadastrar');
        history.push('/usuarioCadastrar');
    }

    handleChange = event => {
        event.preventDefault();    
        this.setState({              
            [event.target.name]: event.target.value                  
        });
  };   

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
                                                        <input type="text" name="email" placeholder="Informa o seu email"  value={this.state.email} onChange={this.handleChange}  />
                                                        <i className="la la-user"></i>
                                                    </div>{/*sn-field end*/}
                                                </div>
                                                <div className="col-lg-12 no-pdd">
                                                    <div className="sn-field">
                                                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Informe o seu password" />
                                                        <i className="la la-lock"></i>
                                                    </div>
                                                    <div style={{fontSize: 12, color: 'red'}}>
                                                        {this.state.passwordError} 
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
