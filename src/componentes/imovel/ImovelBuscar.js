import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnuncioImoveis from '../layout/AnuncioImoveis';
import AnuncioImobiliaria from '../layout/AnuncioImobiliaria';

import TipoImovelEnum from '../common/TipoImovelEnum';
import AcaoImovelEnum from '../common/AcaoImovelEnum';
import StatusImovelEnum from '../common/StatusImovelEnum';

import { Link } from 'react-router-dom';
import imovel from '../fotos/imovel.jpg';
import imovel2 from '../fotos/imovel2.jpg';

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
        super()  
     
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

    render() {
        return (
            <div>
                <div className="search-sec">
                    <div className="container">
                        <div className="search-box">
                            <form>
                                <input type="text" name="search" placeholder="Chave Busca Imovel"/>
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
                                                        <input type="text" name="search-skills" placeholder="Digite uma localização" />
                                                    </form>
                                                </div>
                                                <div className="filter-dd">
                                                    <div className="filter-ttl">
                                                        <h3>Ação</h3>
                                                        <a href="#" title="">Clear</a>
                                                    </div>
                                                    <form className="job-tp">
                                                        <select>
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
                                                    <select>
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
                                                    <ul className="avail-checks">
                                                        {
                                                            this.state.statusImovel.map(status=> {
                                                                return (                                                                    
                                                                    <li>
                                                                        <input type="radio" name={status.id} id={status.id} key={status.id} />
                                                                        <label for="c1">
                                                                            <span></span>
                                                                        </label>
                                                                        <small>{status.description}</small>
                                                                    </li>  
                                                                );                                           
                                                            })
                                                        }                                                        
                                                    </ul>
                                                    
                                                </div>
                                                <div className="filter-dd">
                                                    <div className="filter-ttl">
                                                        <h3>Countries</h3>
                                                        <a href="#" title="">Clear</a>
                                                    </div>
                                                    <form className="job-tp">
                                                        <select>
                                                            <option>Select a country</option>
                                                            <option>United Kingdom</option>
                                                            <option>United States</option>
                                                            <option>Russia</option>
                                                        </select>
                                                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>{/*filter-secs end*/}
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="main-ws-sec">
                                              <div className="posts-section">

                                              {
                                                    this.state.listaImoveis.map(imovel => {                                                       
                                                        return (
                                                            <div className="post-bar">
                                                        
                                                                <div className="suggestion-usd">
                                                                    <img src="http://via.placeholder.com/35x35" alt="" />
                                                                    <div className="sgt-text">
                                                                        <h4>{imovel.nomeUsuario}</h4>
                                                                        <span>{imovel.perfilUsuario}</span>
                                                                    </div>
                                                                </div>

                                                                <div className="post_topbar">                               
                                                                    
                                                                    <Link to={{ pathname: `/visualizarImovelDetalhes/${imovel.id}`}}>
                                                                        <img src={imovel2} alt="" style={{position: 'relative', float:'center', width: '100%'}} />
                                                                    </Link>  
                                                                    <br />
                                                                </div>
                                                                <div className="epi-sec">
                                                            
                                                                    <ul className="descp">
                                                                        <li><img src="images/icon8.png" alt="" /><span>{imovel.localizacao }</span></li>                                    
                                                                    </ul>
                                                                    <ul className="bk-links">
                                                                        <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                                        <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="job_descp">
                                                                    <h3>{imovel.titulo}</h3>
                                                                    <ul className="job-dt">
                                                                        <li><a href="#" title="">{imovel.acao}</a></li>
                                                                        <li><span>$ {imovel.valorImovel}</span></li>                                  
                                                                    </ul>  
                                                                    <ul className="job-dt" style={{fontSize:'12px'}}>
                                                                        <li><p>IPTU </p> $ {imovel.valorIptu} </li>
                                                                        <li> </li>
                                                                        <li><p>Condomínio </p> $ {imovel.valorCondominio} </li>           
                                                                    </ul>                          
                                                                    <p>{imovel.descricao}}... <a href="#" title="">view more</a></p>
                                                                    <ul className="skill-tags">
                                                                        <li><a href="#" title="">{imovel.area} m²</a></li>
                                                                        <li><a href="#" title="">{imovel.quartos} Quartos(s)</a></li>
                                                                        <li><a href="#" title="">{imovel.banheiros} Banheiro(s)</a></li>
                                                                        <li><a href="#" title="">{imovel.garagens} Vaga(s)</a></li>
                                                                        <li><a href="#" title="">{imovel.suites} Suíte(s)</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="job-status-bar">
                                                                    <ul className="like-com">
                                                                        <li>
                                                                            <a href="#"><i className="la la-heart"></i> Like</a>
                                                                            <img src="images/liked-img.png" alt="" />
                                                                            <span>{imovel.likes}</span>
                                                                        </li>
                                                                        <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment {imovel.comments}</a></li>
                                                                    </ul>
                                                                    <a><i className="la la-eye"></i>Views {imovel.views}</a>
                                                                </div>
                                                            </div>                             
                                                        )
                                                    })
                                                }      
                                                   
                                                <div className="process-comm">
                                                        <div className="spinner">
                                                            <div className="bounce1"></div>
                                                            <div className="bounce2"></div>
                                                            <div className="bounce3"></div>
                                                        </div>
                                                    </div>{/*--process-comm end*/}
                                            </div>{/*--posts-section end*/}
            
                                        </div>{/*main-ws-sec end*/}
                                    </div>
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