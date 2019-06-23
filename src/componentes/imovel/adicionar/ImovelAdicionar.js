import React, { Component } from 'react';
import ViewProfileMeusIMoveis from '../meusImoveis/ViewProfileMeusIMoveis';
import { Link } from 'react-router-dom';

import TipoImovelEnum from '../../common/TipoImovelEnum';
import AcaoImovelEnum from '../../common/AcaoImovelEnum';
import StatusImovelEnum from '../../common/StatusImovelEnum';
import Header from '../../layout/Header';
import history from '../../History';

const initialStateErrors = {
    tituloError: '',
    tipoError: '',
    acaoError: '', 
    statusError: '',
    valorError: '',
    descricaoError: ''
}

class ImovelAdicionar extends Component {

    constructor(props) {
        super(props)  
     
        this.state = {
           tipoImovel: [],
           acaoImovel: [],
           statusImovel: [],        
           titulo: '',
           tipo: '',
           acao: '',
           status: '',
           valor: 0,
           descricao: '',  
           area: 0,
           banheiro: 0,
           quarto: 0,
           vaga: 0,
           suite: 0,   
           localizacao: '',
           valorIptu: 0,
           valorCondominio: 0,
           outrasTaxas: 0, 
           tituloError: '',
           tipoError: '',
           acaoError: '', 
           statusError: '',
           valorError: '',
           descricaoError: ''
        }

        this.handleChange = this.handleChange.bind(this);     
      }

      validate = event => {
        event.preventDefault();  

        let isValido = true;        

        if ( this.state.status === undefined){
            console.log('status is undefined');
        }

        if (this.state.titulo === '' || this.state.titulo === undefined)  {                        
            this.setState({tituloError: 'Campo Obrigatorio'})                
            isValido = false;
        }
        else {
            this.setState({tituloError: ''})                
        }

        if (this.state.tipo === '' || this.state.tipo === undefined)  {                                    
            this.setState({tipoError : 'Campo Obrigatorio'})                
            isValido = false;
        }
        else {
            this.setState({tipoError : ''})                
        }

        if (this.state.acao === '' || this.state.acao === undefined)  {                                    
            this.setState({acaoError: 'Campo Obrigatorio'})
            isValido = false;             
        }
        else {
            this.setState({acaoError: ''})
        }

        if (this.state.status === '' || this.state.status === undefined)  {                        
            this.setState({statusError: 'Campo Obrigatorio'})
            isValido = false;    
        }
        else {
            this.setState({statusError: ''})
        }

        if (this.state.valor === 0 || this.state.valor === undefined)  {                                    
            this.setState({valorError: 'Campo Obrigatorio'}) 
            isValido = false;    
        }
        else {
            this.setState({valorError: ''}) 
        }

        if (this.state.descricao === '' || this.state.descricao === undefined )  {                                     
            this.setState({descricaoError: 'Campo Obrigatorio'})
            isValido = false;
        }
        else {
            this.setState({descricaoError: ''})
        }
        return true;
      }

      avancarPasso2 = event => {
         event.preventDefault(); 
        console.log('chamou avancarPasso2')  ;       
        const isValid = this.validate(event);
        if ( isValid ){
            const imovel = {
                titulo: this.state.titulo,
                acao: this.state.acao,
                tipo: this.state.tipo,
                status: this.state.status,
                valor: this.state.valor,
                descricao: this.state.descricao,
                area: this.state.area,
                banheiro: this.state.banheiro,
                quarto: this.state.quarto,
                suite: this.state.suite,
                vaga: this.state.vaga,
                localizacao: this.state.localizacao,
                valorIptu: this.state.valorIptu,
                valorCondominio: this.state.valorCondominio,
                outrasTaxas: this.state.outrasTaxas
            }
            console.log('chamou avancarPasso2 - form valido')  ;
            history.push('/imovelAdicionarPasso2', imovel );
        }        
      }

      handleChange = event => {
          event.preventDefault();    
          this.setState({              
                [event.target.name]: event.target.value                  
          });
      };      
      

     componentDidMount() {
        console.log('chamou o didmount');
        this.setState({ tipoImovel: TipoImovelEnum.enumValues });
        this.setState({ acaoImovel: AcaoImovelEnum.enumValues })
        this.setState({ statusImovel: StatusImovelEnum.enumValues })

        console.log('Passo 1 - props  : ' + JSON.stringify(this.props.location));

        if ( this.props.location.state){
            console.log('is state is not null');
            this.setState({ titulo: this.props.location.state.titulo });
            this.setState({ acao: this.props.location.state.acao });
            this.setState({ tipo: this.props.location.state.tipo });
            this.setState({ status: this.props.location.state.status });
            this.setState({ valor: this.props.location.state.valor });
            this.setState({ descricao: this.props.location.state.descricao });
            this.setState({ area: this.props.location.state.area });
            this.setState({ banheiro: this.props.location.state.banheiro });
            this.setState({ quarto: this.props.location.state.quarto });
            this.setState({ vaga: this.props.location.state.vaga });
            this.setState({ suite: this.props.location.state.suite });
            this.setState({ localizacao: this.props.location.state.localizacao });
            this.setState({ valorIptu: this.props.location.state.valorIptu });
            this.setState({ valorCondominio: this.props.location.state.valorCondominio });
            this.setState({ outrasTaxas: this.props.location.state.outrasTaxas });     
        }
        else {
            console.log('is state is null');
        }
    }
    
    render() {
        return (
            <div>
                <Header />
                <br />

                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                                        <div className="main-left-sidebar no-margin">

                                            <ViewProfileMeusIMoveis />

                                        </div>{/*--main-left-sidebar end*/}
                                    </div>

                                    <div className="col-lg-6 col-md-8 no-pd">
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="nav-acc" role="tabpanel" aria-labelledby="nav-acc-tab">
                                                <div className="acc-setting">
                                                    <h3>Novo Imóvel</h3>
                                                    <form >
                                                        <div className="cp-field">
                                                            <h5>Titulo</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" placeholder="Titulo" name="titulo" value={this.state.titulo} onChange={this.handleChange}/>
                                                            </div>
                                                            <div style={{fontSize: 12, color: 'red'}}>
                                                                {this.state.tituloError} 
                                                            </div>
                                                        </div>                                                        

                                                        <div className="cp-field">
                                                            <h5>Tipo</h5>
                                                            <div className="cpp-fiel">
                                                                <select name="tipo" value={this.state.tipo} onChange={this.handleChange}>
                                                                    <option value="">Selecione uma opção</option>
                                                                    {
                                                                        this.state.tipoImovel.map(tipo => {
                                                                            return (
                                                                                <option key={tipo.id} value={tipo.id} style={{}}>{tipo.description}</option>
                                                                            );
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                            <div style={{fontSize: 12, color: 'red'}}>
                                                                {this.state.tipoError} 
                                                            </div>
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Ação</h5>
                                                            <div className="cpp-fiel">
                                                                <select name="acao" value={this.state.acao} onChange={this.handleChange}>
                                                                    <option value="">Selecione uma opção</option>
                                                                    {
                                                                        this.state.acaoImovel.map(acao => {
                                                                            return (
                                                                                <option key={acao.id} value={acao.id} style={{}}>{acao.description}</option>
                                                                            );
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                            <div style={{fontSize: 12, color: 'red'}}>
                                                                {this.state.acaoError} 
                                                            </div>
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Status</h5>
                                                            <div className="cpp-fiel">
                                                                <select name="status" value={this.state.status} onChange={this.handleChange}>
                                                                    <option value="">Selecione uma opção</option>
                                                                    {
                                                                        this.state.statusImovel.map(status => {
                                                                            return (
                                                                                <option key={status.id} value={status.id} style={{}}>{status.description}</option>
                                                                            );
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                            <div style={{fontSize: 12, color: 'red'}}>
                                                                {this.state.statusError} 
                                                            </div>
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Valor</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" name="valor" placeholder="Valor" value={this.state.valor} onChange={this.handleChange} />
                                                                <i className="fa fa-money"></i>
                                                            </div>
                                                            <div style={{fontSize: 12, color: 'red'}}>
                                                                {this.state.valorError} 
                                                            </div>
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Descrição</h5>
                                                            <div className="cpp-fiel">
                                                                <textarea rows="20" cols="60" name="descricao" placeholder="Descrição imóvel" value={this.state.descricao} onChange={this.handleChange} />
                                                            </div>
                                                            <div style={{fontSize: 12, color: 'red'}}>
                                                                {this.state.descricaoError} 
                                                            </div>
                                                        </div>
                                                     
                                                         <br />   <br />                   <br />   <br />           <br />   <br />           

                                                        <div className="save-stngs pd2">
                                                            <ul>
                                                                <li><button type="submit" onClick={this.avancarPasso2.bind(this)} >Avançar</button></li>                                                                
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
            
        );
    }
}

export default ImovelAdicionar;