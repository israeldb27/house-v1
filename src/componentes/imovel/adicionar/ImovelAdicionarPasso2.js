import React, { Component } from 'react';
import ViewProfileMeusIMoveis from '../meusImoveis/ViewProfileMeusIMoveis';
import { Link } from 'react-router-dom';
import Header from '../../layout/Header';
import history from '../../History';

class ImovelAdicionarPasso2 extends Component {

    constructor(props) {
        super(props) 
        
        this.state = {                 
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
            areaError: '',
            quartoError: '',
            vagaError: '', 
            suiteError: ''            
         }     
    }

    handleChange = event => {
        event.preventDefault();        
        this.setState({              
              [event.target.name]: event.target.value                  
        });
    };

    componentDidMount() {

       console.log('Passo 2 - props : ' + JSON.stringify(this.props.location));

       this.setState({titulo : this.props.location.state.titulo});
       this.setState({tipo : this.props.location.state.tipo});
       this.setState({acao : this.props.location.state.acao});
       this.setState({status : this.props.location.state.status});
       this.setState({valor : this.props.location.state.valor});
       this.setState({descricao : this.props.location.state.descricao});
       this.setState({area : this.props.location.state.area});
       this.setState({banheiro : this.props.location.state.banheiro});
       this.setState({ quarto: this.props.location.state.quarto });
       this.setState({ vaga: this.props.location.state.vaga });
       this.setState({ suite: this.props.location.state.suite });
       this.setState({ localizacao: this.props.location.state.localizacao });
       this.setState({ valorIptu: this.props.location.state.valorIptu });
       this.setState({ valorCondominio: this.props.location.state.valorCondominio });
       this.setState({ outrasTaxas: this.props.location.state.outrasTaxas });       
    }

    retornarPasso1 = event => {
        event.preventDefault();
        console.log('chamou retorno passo 1')  ;
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
            vaga: this.state.vaga,
            suite: this.state.suite,
            localizacao: this.state.localizacao,
            valorIptu: this.state.valorIptu,
            valorCondominio: this.state.valorCondominio,
            outrasTaxas: this.state.outrasTaxas
        }
        history.push('/imovelAdicionar', imovel);
    }

    avancarPasso3 = event => {
        event.preventDefault();
        console.log('chamou avancar passo 3')  ;
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
        history.push('/imovelAdicionarPasso3', imovel);
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
                                                    <h3>Novo Imóvel </h3>
                                                    <form>
                                                        <div className="cp-field">
                                                            <h5>Área m² </h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" name="area" value={this.state.area} onChange={this.handleChange} placeholder="Área do imóvel" />
                                                            </div>
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Banheiro(s)</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" name="banheiro" value={this.state.banheiro} onChange={this.handleChange} placeholder="Quantidade de banheiros  (se houver) " />
                                                            </div>
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Quarto(s)</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" name="quarto" value={this.state.quarto} onChange={this.handleChange} placeholder="Quantidade de quartos  (se houver) " />
                                                            </div>
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Vaga(s)</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" name="vaga" value={this.state.vaga} onChange={this.handleChange} placeholder="Quantidade de vagas de garagem  (se houver)" />
                                                            </div>
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Suíte</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" name="suite" value={this.state.suite} onChange={this.handleChange} placeholder="Quantidade de suites  (se houver)" />
                                                            </div>
                                                        </div>

                                                        <div className="save-stngs pd2">
                                                            <ul>
                                                                <li><button type="submit" onClick={this.retornarPasso1.bind(this)} >Retornar </button></li>                                                                
                                                                <li><button type="submit" onClick={this.avancarPasso3.bind(this)} > Avançar </button></li>                                                                
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

export default ImovelAdicionarPasso2;