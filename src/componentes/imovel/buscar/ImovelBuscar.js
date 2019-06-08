import React, { Component } from 'react';

import AnuncioImoveis from '../../layout/AnuncioImoveis';
import AnuncioImobiliaria from '../../layout/AnuncioImobiliaria';

import TipoImovelEnum from '../../common/TipoImovelEnum';
import AcaoImovelEnum from '../../common/AcaoImovelEnum';
import StatusImovelEnum from '../../common/StatusImovelEnum';


import ImovelResultadoBusca from './ImovelResultadoBusca';
import Header from '../../layout/Header';
import ImovelService from '../../../services/ImovelService';


class ImovelBuscar extends Component {
    constructor() {
        super();
             
        this.state = {
           tipoImovel: [],
           acaoImovel: [],
           statusImovel: [],
           listaImoveis: [] 
        }
      } 
      
    componentDidMount() {
        console.log('chamou o didmount');
        this.setState({ tipoImovel: TipoImovelEnum.enumValues });
        this.setState({ acaoImovel: AcaoImovelEnum.enumValues });
        this.setState({ statusImovel: StatusImovelEnum.enumValues });

    }

    buscarChaveImovel(event){
        event.preventDefault();
        console.log('Chave busca: ' + this.chave.value);
        ImovelService.buscarImoveisPorChave(this.chave.value).then(listaImoveis => {
            this.setState({listaImoveis: listaImoveis});   
        })
        
    }

    buscarImovel(event){
        event.preventDefault();
        console.log('invocou metodo buscarImovel');             

        ImovelService.buscarImoveis(this.acaoImovel.value, this.tipoImovel.value, this.localizacao.value, this.statusImovel.value).then(listaImoveis => {
            console.log('Resultado lista imoveis: ' + JSON.stringify(listaImoveis));
            this.setState({listaImoveis: listaImoveis});   
        })
    }

    render() {
        return (
            <div>
                <Header />
                <br />
                <div className="search-sec">
                    <div className="container">
                        <div className="search-box">
                            <form onSubmit={this.buscarChaveImovel.bind(this)}>
                                <input type="text" ref={(input) => this.chave = input} name="search" placeholder="Chave Busca Imovel"/>
                                <button type="submit">Buscar</button>
                            </form>
                        </div>{/*search-box end*/}
                    </div>
                </div>{/*search-sec end*/}    

                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">                                    
                                    <div className="col-lg-3">

                                        <div className="filter-secs">
                                            <div className="filter-heading">
                                                <h3>Filtros</h3>
                                                <a href="#" title="">Clear all filters</a>
                                            </div>{/*filter-heading end*/}
                                            <div className="paddy">
                                                <div className="filter-dd">
                                                    <div className="filter-ttl">
                                                        <h3>Localização</h3>
                                                        <a href="#" title="">Clear</a>
                                                    </div>
                                                    <form>
                                                        <input type="text" ref={(input) => this.localizacao = input} name="search-skills" placeholder="Digite uma localização" />
                                                    </form>
                                                </div>
                                                <div className="filter-dd">
                                                    <div className="filter-ttl">
                                                        <h3>Ação</h3>
                                                        <a href="#" title="">Clear</a>
                                                    </div>
                                                    <form className="job-tp">
                                                        <select ref={(select) => this.acaoImovel = select}>
                                                            {
                                                                this.state.acaoImovel.map(acao=> {
                                                                    return (
                                                                        <option key={acao.id} value={acao.id}>{acao.description}</option>
                                                                    );                                           
                                                                })
                                                            }                       
                                                        </select>
                                                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                    </form>
                                                </div>
                                                <div className="filter-dd">
                                                    <div className="filter-ttl">
                                                        <h3>Tipo Imóvel</h3>
                                                        <a href="#" title="">Clear</a>
                                                    </div>
                                                    <form className="job-tp">
                                                    <select ref={(select) => this.tipoImovel = select}>
                                                        {
                                                            this.state.tipoImovel.map(tipo=> {
                                                                return (
                                                                    <option key={tipo.id} value={tipo.id}>{tipo.description}</option>
                                                                );                                           
                                                            })
                                                        }                       
                                                    </select>
                                                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                    </form>
                                                </div>
                                                <div className="filter-dd">
                                                    <div className="filter-ttl">
                                                        <h3>Valor ($)</h3>
                                                        <a href="#" title="">Clear</a>
                                                    </div>
                                                    <div className="rg-slider">
                                                        <input className="rn-slider slider-input" type="hidden" value="5,50" />
                                                    </div>
                                                    <div className="rg-limit">
                                                        <h4>1</h4>
                                                        <h4>100+</h4>
                                                    </div>{/*rg-limit end*/}
                                                </div>

                                                <div className="filter-dd">
                                                    <div className="filter-ttl">
                                                        <h3>Status</h3>
                                                        <a href="#" title="">Clear</a>
                                                    </div>
                                                    <form className="job-tp">
                                                    <select ref={(select) => this.statusImovel = select}>
                                                            {
                                                                this.state.statusImovel.map(status=> {
                                                                    return (
                                                                        <option key={status.id} value={status.id}>{status.description}</option>
                                                                    );                                           
                                                                })
                                                            }                       
                                                        </select>    
                                                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                    </form>
                                                </div> 

                                                <div className="post-st">
                                                    <ul>                                
                                                        <li><a className="post-jb active" href="#" title="" onClick={this.buscarImovel.bind(this)} >Buscar</a></li>
                                                        <br />  <br /> <br /> 
                                                    </ul>
                                                </div>                                                 

                                            </div>
                                        </div>{/*filter-secs end*/}
                                        
                                    </div>

                                   <ImovelResultadoBusca listaImoveis={this.state.listaImoveis}/>

                                    <div className="col-lg-3">
                                        <div className="right-sidebar">
                                            <AnuncioImoveis />

                                            <AnuncioImobiliaria />
                                            
                                        </div>{/*right-sidebar end*/}
                                    </div>
                                </div>
                            </div>{/* main-section-data end*/}
                        </div>
                    </div>
                </main>

            </div>
        );
    }
}


export default ImovelBuscar;