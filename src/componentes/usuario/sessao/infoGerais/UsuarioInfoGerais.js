import React, { Component } from 'react'
import UsuarioService from '../../../../services/UsuarioService';
import RecomendacaoService from '../../../../services/RecomendacaoService';
import { getPerfilUsuario, getUsuarioStorage } from '../../../common/Utils';

class UsuarioInfoGerais extends Component {
   
    constructor(props) {
        super(props)
      
        this.state = {
           usuarioSessao: this.props.usuarioSessao,
           listaUltimasUsuario: [],
           listaTrabalhosRealizados: [],
           listaRecomendacoes: []        
        }
    }

    componentDidMount(){   
        this.setState({usuarioSessao: this.props.usuarioSessao }) 
        this.carregaListaUltimasUsuario();
        this.carregaListaTrabalhosRealizados();
        this.carregarListaRecomendacoes();      
    }

    carregaListaUltimasUsuario(){       
        let idUsuario = 1;
        UsuarioService.listarUltimasUsuario(idUsuario).then(listaUltimas => {
            this.setState({listaUltimasUsuario: listaUltimas});            
        })
    }

    carregaListaTrabalhosRealizados(){
        let idUsuario = 1;
        UsuarioService.listaTrabalhosRealizadosPorUsuario(idUsuario).then(listaTrabalhos => {
            this.setState({listaTrabalhosRealizados: listaTrabalhos});            
        })
    }

    carregarListaRecomendacoes() {
        let idUsuario = 1;
        RecomendacaoService.listarRecomendacoesPorUsuario(idUsuario).then(listaRecomendacoes => {
            this.setState({listaRecomendacoes: listaRecomendacoes});            
        })
    }

  render() {
    return (
        <div className="product-feed-tab current" id="info-dd">
            <div className="user-profile-ov">
                <h3><a href="#" title="" className="overview-open">Descrição  </a> <a href="#" title="" className="overview-open"> </a></h3>
                <p> {this.state.usuarioSessao.descricao} </p>
            </div>       

            <div className="user-profile-ov">
                <h3><a href="#" title="" className="ed-box-open">Últimas do Usuário</a> </h3>

                <div className="suggestions-list">

                    {
                        this.state.listaUltimasUsuario.map(ultima => {
                            return (
                                <div className="suggestion-usd">
                                    <img src="http://via.placeholder.com/35x35" alt="" />
                                    <div className="sgt-text">
                                        {
                                            ultima.tipo === 'CO' &&  ( <div ><h4>Estabeleceu novo contato com: </h4> {ultima.usuarioContato.nome} &nbsp; &nbsp; </div> ) 
                                        }                                          
                                        {
                                            ultima.tipo === 'CI' &&  ( <div ><h4>Cadastrou novo imóvel: </h4> {ultima.imovel.titulo} &nbsp; &nbsp; </div> ) 
                                        }     
                                        {
                                            ultima.tipo === 'AI' &&  ( <div ><h4>Foram atualizadas informações do imóvel: </h4> {ultima.imovel.titulo} &nbsp; &nbsp; </div> ) 
                                        }                                          
                                        {
                                            ultima.tipo === 'AP' &&  ( <div ><h4>Foram atualizadas informações pessoais do usuário: </h4>  &nbsp; &nbsp; </div> ) 
                                        }                                          
                                        <span>{new Intl.DateTimeFormat('pt-BR', { 
                                                                        month: 'numeric', 
                                                                        day: 'numeric',
                                                                        year: 'numeric',    
                                                                        hour: 'numeric',
                                                                        minute: 'numeric',
                                                                        second: 'numeric'                                                                
                                                                    }).format(new Date(ultima.updatedAt))}</span>
                                    </div>                  
                                </div>
                            );
                        })
                    }

                </div>
            </div> 

            {/* Esta aba sera usada para informar quantos e quais imoveis o usuario corretor ou imobiliaria vendeu ou conseguiu alugar por exemplo */}
           <div className="user-profile-ov">
                <h3><a href="#" title="" className="ed-box-open">Trabalhos realizados</a> </h3>

                <div className="suggestions-list">
                    {
                        this.state.listaTrabalhosRealizados.map(trabalho => {
                            return (
                                <div className="suggestion-usd">
                                    <img src="http://via.placeholder.com/35x35" alt="" />
                                    <div className="sgt-text">
                                        <h4>{trabalho.tituloImovel}</h4>
                                        {
                                            trabalho.tipo === 'V' &&  ( <div ><h4>Conseguiu vender imóvel: </h4> {trabalho.imovel.titulo} &nbsp; &nbsp; </div> ) 
                                        }                                          
                                        {
                                            trabalho.tipo === 'A' &&  ( <div ><h4>Conseguiu alugar imóvel: </h4> {trabalho.imovel.titulo} &nbsp; &nbsp; </div> ) 
                                        }     
                                        {
                                            trabalho.tipo === 'T' &&  ( <div ><h4>Conseguiu alugar por temporada o imóvel: </h4> {trabalho.imovel.titulo} &nbsp; &nbsp; </div> ) 
                                        }  
                                    </div>                  
                                </div>  
                            );
                        })
                    }                    
                </div>
            </div> 

            <div className="user-profile-ov">
                <h3><a href="#" title="" className="ed-box-open">Recomendações</a> </h3>

                <div className="suggestions-list">
                    {
                        this.state.listaRecomendacoes.map( recomendacao => {
                            return (
                                <div className="suggestion-usd">
                                    <img src="http://via.placeholder.com/35x35" alt="" />
                                    <div className="sgt-text">
                                        <h4>{recomendacao.usuario.nome}</h4>
                                        <span>{getPerfilUsuario(recomendacao.usuario.perfil)}</span>
                                    </div>
                                    <span>
                                        <br />                                        
                                        <p>{recomendacao.descricao} </p>
                                        <br /> <br />                                       
                                    </span>
                                    
                                </div>                                 
                            );
                        })
                    }
                </div>
            </div> {/*user-profile-ov end */}

            <div className="user-profile-ov">
                <h3><a href="#" title="" className="skills-open">Skills</a> <a href="#" title="" className="skills-open"><i className="fa fa-pencil"></i></a> <a href="#"><i className="fa fa-plus-square"></i></a></h3>
                <ul>
                    <li><a href="#" title="">HTML</a></li>
                    <li><a href="#" title="">PHP</a></li>
                    <li><a href="#" title="">CSS</a></li>
                    <li><a href="#" title="">Javascript</a></li>
                    <li><a href="#" title="">Wordpress</a></li>
                    <li><a href="#" title="">Photoshop</a></li>
                    <li><a href="#" title="">Illustrator</a></li>
                    <li><a href="#" title="">Corel Draw</a></li>
                </ul>
            </div> {/*user-profile-ov end */}
        </div> 

    )
  }
}

export default UsuarioInfoGerais
