import React, { Component } from 'react';
import ViewProfileMeusIMoveis from '../meusImoveis/ViewProfileMeusIMoveis';
import { Link } from 'react-router-dom';

import TipoImovelEnum from '../../common/TipoImovelEnum';
import AcaoImovelEnum from '../../common/AcaoImovelEnum';
import StatusImovelEnum from '../../common/StatusImovelEnum';

class ImovelAdicionar extends Component {

    constructor() {
        super()  
     
        this.state = {
           tipoImovel: [],
           acaoImovel: [],
           statusImovel: []
        }
      }

     componentDidMount() {
        console.log('chamou o didmount');
        this.setState({ tipoImovel: TipoImovelEnum.enumValues });
        this.setState({ acaoImovel: AcaoImovelEnum.enumValues })
        this.setState({ statusImovel: StatusImovelEnum.enumValues })
    }

    render() {
        return (
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
                                                <form>
                                                    <div className="cp-field">
                                                        <h5>Titulo</h5>
                                                        <div className="cpp-fiel">
                                                            <input type="text" name="old-password" placeholder="Titulo" />
                                                        </div>
                                                    </div>

                                                    <div className="cp-field">
                                                        <h5>Tipo</h5>
                                                        <div className="cpp-fiel">
                                                            <select>
                                                                <option value="">Selecione uma opção</option>
                                                                {
                                                                    this.state.tipoImovel.map(tipo=> {
                                                                        return (
                                                                            <option key={tipo.id} value={tipo.id} style={{}}>{tipo.description}</option>
                                                                        );                                           
                                                                    })
                                                                }                       
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="cp-field">
                                                        <h5>Ação</h5>
                                                        <div className="cpp-fiel">
                                                            <select>
                                                                <option value="">Selecione uma opção</option>
                                                                {
                                                                    this.state.acaoImovel.map(acao=> {
                                                                        return (
                                                                            <option key={acao.id} value={acao.id} style={{}}>{acao.description}</option>
                                                                        );                                           
                                                                    })
                                                                }                       
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="cp-field">
                                                        <h5>Status</h5>
                                                        <div className="cpp-fiel">
                                                            <select>
                                                                <option value="">Selecione uma opção</option>
                                                                {
                                                                    this.state.statusImovel.map(status=> {
                                                                        return (
                                                                            <option key={status.id} value={status.id} style={{}}>{status.description}</option>
                                                                        );                                           
                                                                    })
                                                                }                       
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="cp-field">
                                                        <h5>Valor</h5>
                                                        <div className="cpp-fiel">
                                                            <input type="text" name="repeat-password" placeholder="Valor" />
                                                            <i className="fa fa-money"></i>
                                                        </div>
                                                    </div>
                                                                
                                                    <div className="cp-field">
                                                        <h5>Descrição</h5>
                                                        <div className="cpp-fiel">                                                            
                                                            <textarea rows="20" cols="60" placeholder="Descrição imóvel" />                                                       
                                                        </div>
                                                    </div>            

                                                    <div className="save-stngs pd2">
                                                        <ul>                                                           
                                                            <li><button type="submit">Avançar Cadastro</button></li>
                                                            <li><Link to="/imovelAdicionarPasso2" className="button" >Avançar Cadastro</Link></li>
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
        );
    }
}

export default ImovelAdicionar;