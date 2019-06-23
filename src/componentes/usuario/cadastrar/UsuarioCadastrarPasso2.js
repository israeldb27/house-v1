import React, { Component } from 'react'
import HeaderUsuarioCadastrar from './HeaderUsuarioCadastrar';
import { Link } from 'react-router-dom';
import history from '../../History';
import PerfilUsuarioEnum from '../../common/PerfilUsuarioEnum';
import UsuarioService from '../../../services/UsuarioService';


class UsuarioCadastrarPasso2 extends Component {

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
            password: '',
            confirmaPassword: '',
            localizacao: '',
            descricao: '',
            passwordError: '',
            confirmaPasswordError: '',
            comparePasswordError: '',
            cpfError: '',
            cnpjError: '',
            creciError: ''            
        }
        
    }

    componentDidMount() {
        console.log('chamou o didmount');
        console.log('passo2 - props:  ' + JSON.stringify(this.props.location.state));
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

            console.log('Perfil usuario:  ' + this.state.perfilUsuario);
            console.log('Perfil usuario - props :  ' + this.props.location.state.perfilUsuario);
        }    
    }   

    validate = () => {

        console.log('Perfil usuario: ' + this.state.perfilUsuario);
        console.log('password: ' + this.state.password);
        console.log('confirma password: ' + this.state.confirmaPassword);
        let isValido = true;      
        let isPasswordNotEmtpy = true;

        if (this.state.confirmaPassword === '' || this.state.confirmaPassword === undefined)  {                        
            this.setState({confirmaPasswordError: 'Campo Obrigatorio'})                
            isValido = false;
        }
        else {
            this.setState({confirmaPasswordError: ''})                
        }

        if ( this.state.perfilUsuario === 'C' || this.state.perfilUsuario === 'N'){            
            if (this.state.cpf === '' || this.state.cpf === undefined)  {                        
                this.setState({cpfError: 'Campo Obrigatorio'})                
                isValido = false;
            }
            else {
                this.setState({cpfError: ''})                
            }
        }

        if ( this.state.perfilUsuario === 'C' ){            
            if (this.state.creci === '' || this.state.creci === undefined)  {                        
                this.setState({creciError: 'Campo Obrigatorio'})                
                isValido = false;
            }
            else {
                this.setState({creciError: ''})                
            }
        }

        if ( this.state.perfilUsuario === 'I' ){            
            if (this.state.cnpj === '' || this.state.cnpj === undefined)  {                        
                this.setState({cnpjError: 'Campo Obrigatorio'})                
                isValido = false;
            }
            else {
                this.setState({cnpjError: ''})                
            }
        }

        if (this.state.password === '' || this.state.password === undefined)  {                        
            this.setState({passwordError: 'Campo Obrigatorio'})                         
            isValido = false;
            isPasswordNotEmtpy = false;
        }
        else {
            this.setState({passwordError: ''})                
        }


        if ( this.state.password !== this.state.confirmaPassword && isPasswordNotEmtpy === true ){
            this.setState({comparePasswordError: 'Os campos password e confirma password não coincidem'})                            
            isValido = false;            
        }
        else {
            this.setState({comparePasswordError: ''})                            
        }


        console.log('msg password: ' + this.state.passwordError);
        console.log('msg confirma password: ' + this.state.confirmPasswordError);
        return isValido;
    }

    avancarPasso3 = e => {
        e.preventDefault();
        const isValid = this.validate();
        if ( isValid){           

            const usuario = {
                nome: this.state.nome,
                email: this.state.email,
                password: this.state.password,
                perfil: this.state.perfilUsuario,
                cpf: this.state.cpf,
                cnpj: this.state.cnpj,
                creci: this.state.creci,
                localizacao: this.state.localizacao,
                descricao: this.state.descricao,
            }

            console.log('Usuario a ser cadastrado: ' + JSON.stringify(usuario));

            UsuarioService.cadastrarUsuario(usuario).then(response => {
                console.log('Response cadastro: ' + JSON.stringify(response));
            })
            history.push('/usuarioCadastrarPasso3');
        }
           
        
  }    

  retornarPasso1(){
        console.log('chamou retornarPasso');
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
                                                    <form onSubmit={this.avancarPasso3.bind(this)}>

                                                        <div className="cp-field">
                                                            <h5>Password</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Informe o password" />
                                                            </div>
                                                            <div style={{fontSize: 12, color: 'red'}}>
                                                                {this.state.passwordError} 
                                                            </div>
                                                            <div style={{fontSize: 12, color: 'red'}}>
                                                                {this.state.comparePasswordError} 
                                                            </div>                                                            
                                                        </div>                                                       

                                                        <div className="cp-field">
                                                            <h5>Confirma Password</h5> 
                                                            <div className="cpp-fiel">
                                                                <input type="password" value={this.state.confirmaPassword} onChange={this.handleChange} name="confirmaPassword" placeholder="Informe o confirma password" />                                                                
                                                            </div>
                                                            <div style={{fontSize: 12, color: 'red'}}>
                                                                {this.state.confirmaPasswordError} 
                                                            </div>
                                                        </div>

                                                        {
                                                            this.props.location.state.perfilUsuario === 'C'  && (
                                                                <div>
                                                                    <div className="cp-field">
                                                                        <h5>CPF</h5>
                                                                        <div className="cpp-fiel">
                                                                            <input type="text" value={this.state.cpf} onChange={this.handleChange} name="cpf" placeholder="Informe o seu CPF" />                                                                
                                                                        </div>
                                                                        <div style={{fontSize: 12, color: 'red'}}>
                                                                            {this.state.cpfError} 
                                                                        </div>
                                                                    </div>

                                                                    <div className="cp-field">
                                                                        <h5>CRECI</h5>
                                                                        <div className="cpp-fiel">
                                                                            <input type="text" value={this.state.creci} onChange={this.handleChange} name="creci" placeholder="Informe o seu CRECI" />                                                                
                                                                        </div>
                                                                        <div style={{fontSize: 12, color: 'red'}}>
                                                                            {this.state.creciError} 
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }

                                                        {
                                                            this.props.location.state.perfilUsuario === 'N'  && (                                                                
                                                                <div className="cp-field">
                                                                    <h5>CPF</h5>
                                                                    <div className="cpp-fiel">
                                                                        <input type="text" value={this.state.cpf} onChange={this.handleChange} name="cpf" placeholder="Informe o seu CPF" />                                                                
                                                                    </div>
                                                                    <div style={{fontSize: 12, color: 'red'}}>
                                                                        {this.state.cpfError} 
                                                                    </div>
                                                                </div>                                                                
                                                            )
                                                        }

                                                        {
                                                            this.props.location.state.perfilUsuario === 'I' && (                                                                
                                                                <div className="cp-field">
                                                                    <h5>CNPJ</h5>
                                                                    <div className="cpp-fiel">
                                                                        <input type="text" value={this.state.cnpj} onChange={this.handleChange} name="cnpj" placeholder="Informe o seu CNPJ" />                                                                
                                                                    </div>
                                                                    <div style={{fontSize: 12, color: 'red'}}>
                                                                        {this.state.cnpjError} 
                                                                    </div>
                                                                </div>
                                                            )
                                                        }

                                                        <div className="save-stngs pd2">
                                                            <ul>
                                                                <li><button type="button" onClick={this.retornarPasso1.bind(this)}>Retornar </button></li>                                                                
                                                                <li><button type="submit" > Registrar</button></li>                                                                                                                                
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

export default UsuarioCadastrarPasso2;
