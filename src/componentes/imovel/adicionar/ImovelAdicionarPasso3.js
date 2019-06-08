import React, { Component } from 'react';
import ViewProfileMeusIMoveis from '../meusImoveis/ViewProfileMeusIMoveis';
import { Link } from 'react-router-dom';
import Header from '../../layout/Header';
import history from '../../History';
import ImovelService from '../../../services/ImovelService';

class ImovelAdicionarPasso3  extends Component {

    constructor(props) {        
        super(props); 
        
        this.state = {                 
            titulo: '',
            tipo: '',
            acao: '',
            status: '',
            valor: 0,
            descricao: '',  
            area: 0,
            quarto: 0,
            vaga: 0,
            suite: 0,    
            localizacao: '',  
            valorIptu: 0,
            valorCondominio: 0,
            outrasTaxas: 0,     
            localizacaoError: '',            
        }     
    }
    
    handleChange = event => {
        event.preventDefault();        
        this.setState({              
                [event.target.name]: event.target.value                  
        });
    };   

    retornarPasso2 = event => {
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
        history.push('/imovelAdicionarPasso2', imovel);
    }

    validate = () => {

        if (this.state.localizacao === '' || this.state.localizacao === undefined){
            return false;
        }
        else {
            return true;
        }
    }

    avancarPasso4 = event => {
        event.preventDefault();
        console.log('chamou avancar passo 4')  ;
        const isValid = this.validate();
        if ( isValid ){
            console.log('chamou avancarPasso3');
            /*
                Neste metodo os dados do imovel serao inseridos no BD. 
                E o sistema irá para a tela seguinte onde nesta tela o usuário irá inserir a foto principal do imóvel e as fotos da galeria do imóvel
            */
           let idUsuario = '5ce95bb16b4e216264be787e';
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
           ImovelService.cadastrarImovel(idUsuario, imovel).then(response => {
               console.log('acionoui metodo cadastrar')
           })
    
            history.push('/imovelAdicionarPasso3');
        }
        else {

        }
    }

    componentDidMount() {

        console.log('Passo 3 - props : ' + JSON.stringify(this.props.location)); 
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
                                                            <h5>IPTU</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" name="valorIptu" value={this.state.valorIptu} onChange={this.handleChange} placeholder="Informe o valor do IPTU (se houver) " />
                                                            </div>
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Condomínio</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" name="valorCondominio" value={this.state.valorCondominio} onChange={this.handleChange} placeholder="Informe o valor do condomínio (se houver)" />
                                                            </div>
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Outras Taxas</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" name="outrasTaxas" value={this.state.outrasTaxas} onChange={this.handleChange} placeholder="Informe o valor de outras taxas (se houver)" />
                                                            </div>
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Localização do imóvel </h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" name="localizacao" value={this.state.localizacao} onChange={this.handleChange} placeholder="Informe a localização do imóvel" />
                                                            </div>
                                                        </div>

                                                        {/*--devera ser inserido aqui a tela do Google Maps*/}

                                                        <div className="save-stngs pd2">
                                                            <ul>
                                                                <li><button type="submit" onClick={this.retornarPasso2.bind(this)} >Retornar </button></li>                                                                
                                                                <li><button type="submit" onClick={this.avancarPasso4.bind(this)} > Avançar </button></li>                                                                
                                                            </ul>
                                                        </div>

                                                    </form>
                                                </div>
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

export default ImovelAdicionarPasso3;