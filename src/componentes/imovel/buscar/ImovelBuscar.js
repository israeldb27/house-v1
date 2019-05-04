import React, { Component } from 'react';

import AnuncioImoveis from '../../layout/AnuncioImoveis';
import AnuncioImobiliaria from '../../layout/AnuncioImobiliaria';

import TipoImovelEnum from '../../common/TipoImovelEnum';
import AcaoImovelEnum from '../../common/AcaoImovelEnum';
import StatusImovelEnum from '../../common/StatusImovelEnum';


import ImovelResultadoBusca from './ImovelResultadoBusca';

let id = 0;
function createData(id, nomeUsuario, perfilUsuario, urlFoto, 
                    localizacao, titulo, acao, valorImovel, 
                    valorIptu, valorCondominio, descricao, 
                    area, quartos, banheiros, garagens, suites, likes, comments, views) {
  id += 1;
  return {id, nomeUsuario, perfilUsuario, urlFoto, 
          localizacao, titulo, acao, valorImovel, 
          valorIptu, valorCondominio, descricao, 
          area, quartos, banheiros, garagens, suites, likes, comments, views} ;
}

const rows = [
  createData(1, 'Gisele Kremer', 'Corretor', '/img1.jpg',
             'Boa Viagem, Niteroi - RJ', 'Luxo Place', 'Aluguel', '1320',
             550, 1560, 'Excelente espaço e bem localizado',
             210, 2, 2, 1, 1, 15, 12, 20),

  createData(2, 'Zirtaeb', 'Imobiliaria', '/img1.jpg',
             'Centro, Niteroi - RJ', 'Flat Centro', 'Venda', '700',
             211, 800, 'Localizado no centro da cidade',
             80, 1, 0, 0, 0, 22, 12, 33)
];


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
        this.setState({ acaoImovel: AcaoImovelEnum.enumValues })
        this.setState({ statusImovel: StatusImovelEnum.enumValues })

        for (let i = 0; i < rows.length; i++){
            let list = this.state.listaImoveis;
            list.push(rows[i]);
            this.setState({listaImoveis: list});            
        }
    }

    buscarChaveImovel(event){
        event.preventDefault();
        console.log('Chave busca: ' + this.chave.value);
    }

    buscarImovel(event){
        event.preventDefault();
        console.log('invocou metodo buscarImovel');
        console.log('acao imovel selecionado: ' + this.acaoImovel.value);
        console.log('tipoImovel selecionado: ' + this.tipoImovel.value);
        console.log('localizacao selecionado: ' + this.localizacao.value);
        console.log('status selecionado: ' + this.statusImovel.value);        
    }

    render() {
        return (
            <div>
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