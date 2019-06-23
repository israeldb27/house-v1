import React, { Component } from 'react'
import HeaderUsuarioCadastrar from './HeaderUsuarioCadastrar';
import { BrowserRouter, Link, Router } from 'react-router-dom';
import history from '../../History';
import PerfilUsuarioEnum from '../../common/PerfilUsuarioEnum';

class UsuarioCadastrar extends Component {

    constructor(props) {
        super(props)  
        this.state = {
            tipoPerfilUsuario: [],           
            nome: '',
            email: '',
            perfilUsuario: '',            
            cpf: '',
            creci: '',
            cnpj: '',
            localizacao: '',
            descricao: '',
            perfilUsuarioError: '',
            nomeError: '',
            emailError: ''
        }
        
    }

  componentDidMount() {
        console.log('chamou o didmount');
        this.setState({ tipoPerfilUsuario: PerfilUsuarioEnum.enumValues });

        if ( this.props.location.state){
            this.setState({ nome: this.props.location.state.nome });
            this.setState({ email: this.props.location.state.email });
            this.setState({ perfilUsuario: this.props.location.state.perfilUsuario });
            this.setState({ cpf: this.props.location.state.cpf });
            this.setState({ creci: this.props.location.state.creci });
            this.setState({ cnpj: this.props.location.state.cnpj });
            this.setState({ localizacao: this.props.location.state.localizacao });
            this.setState({ descricao: this.props.location.state.descricao });
        }    
  }    

  validate = () => {
    
    let isValido = true;   

    if (this.state.nome === '' || this.state.nome === undefined)  {                        
        this.setState({nomeError: 'Campo Obrigatorio'})                
        isValido = false;
    }
    else {
        this.setState({nomeError: ''})                
    }

    if (this.state.email === '' || this.state.email === undefined)  {                        
        this.setState({emailError: 'Campo Obrigatorio'})                
        isValido = false;
    }
    else {
        this.setState({emailError: ''})                
    }

    if (this.state.perfilUsuario === '' || this.state.perfilUsuario === undefined)  {                        
        this.setState({perfilUsuarioError: 'Campo Obrigatorio'})                
        isValido = false;
    }
    else {
        this.setState({perfilUsuarioError: ''})                
    }

    return isValido;
    
  }    

  avancarPasso2 = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid){
            const usuario = {
                nome: this.state.nome,
                email: this.state.email,
                perfilUsuario: this.state.perfilUsuario,
                cpf: this.state.cpf,
                creci: this.state.creci,
                cnpj: this.state.cnpj,
                password: this.state.password,
                localizacao: this.state.localizacao,
                descricao: this.state.descricao
            }
            history.push('/usuarioCadastrarPasso2', usuario);
        }        
  }  

  handleChange = event => {
        event.preventDefault();    
        this.setState({              
            [event.target.name]: event.target.value                  
        });
  };   

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
                                                    <form onSubmit={this.avancarPasso2.bind(this)}>
                                                        <div className="cp-field">
                                                            <h5>Nome</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" value={this.state.nome} onChange={this.handleChange} name="nome" placeholder="Nome" />
                                                            </div>
                                                            <div style={{fontSize: 12, color: 'red'}}>
                                                                {this.state.nomeError} 
                                                            </div>
                                                        </div>    

                                                        <div className="cp-field">
                                                            <h5>Email</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email" />                                                                
                                                            </div>
                                                            <div style={{fontSize: 12, color: 'red'}}>
                                                                {this.state.emailError} 
                                                            </div>
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Perfil Usuário</h5>
                                                            <div className="cpp-fiel">   
                                                                <select name="perfilUsuario" value={this.state.perfilUsuario} onChange={this.handleChange}>
                                                                    <option value="">Selecione uma opção</option>
                                                                    {
                                                                        this.state.tipoPerfilUsuario.map(tipo => {
                                                                            return (
                                                                                <option key={tipo.id} value={tipo.id} style={{}}>{tipo.description}</option>
                                                                            );
                                                                        })
                                                                    }        
                                                                </select>                                                                
                                                            </div>
                                                            <div style={{fontSize: 12, color: 'red'}}>
                                                                {this.state.perfilUsuarioError} 
                                                            </div>
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Localização</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" value={this.state.localizacao} onChange={this.handleChange} name="localizacao" placeholder="Informe sua localização" />                                                                
                                                            </div>                                                        
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Sobre mim</h5>
                                                            <div className="cpp-fiel">
                                                                <textarea rows="5" cols="33" value={this.state.descricao} onChange={this.handleChange} name="descricao" placeholder="Informe uma descrição sobre você" />                                                                
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

export default UsuarioCadastrar
