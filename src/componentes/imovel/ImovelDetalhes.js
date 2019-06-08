import React, { Component } from 'react';
import ImovelUsuarioResponsavel from './ImovelUsuarioResponsavel';
import OutrosImoveisUsuario from './OutrosImoveisUsuario';
import israel from '../fotos/israel.jpg'
import imovel2 from '../fotos/imovel2.jpg';
import AnuncioImobiliaria from '../layout/AnuncioImobiliaria';
import AnuncioImoveis from '../layout/AnuncioImoveis';
import '../includes/css/line-awesome-font-awesome.css';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import ComentarioService from '../../services/ComentarioService';
import OfertaService from '../../services/OfertaService';
import ParceriaService from '../../services/ParceriaService';
import IntermediacaoService from '../../services/IntermediacaoService';

class ImovelDetalhes extends Component {

    constructor() {
        super()  
     
        this.state = {                   
           nomeUsuario: 'Israel Barreto',
           perfilUsuario: 'Imobiliaria', 
           titulo: 'Copacabana Palace Residence',
           localizacao: 'Boa Viagem, Niteroi - RJ',
           idImovel: 12,
           acao: 'Venda',
           valorImovel: 256000.00,
           valorCondominio: 770,
           valorIptu: 300,
           quantBanheiros: 2,
           quantQuartos: 4,
           quantSuites: 1,
           quantVagas: 1,
           area: 110,
           valorTaxas: 100,
           descricao: 'Apartamento localizado próximo da praia, bem tranquilo, ótima vista e bem frequentado',
           totalVisualizacoes: 90,
           totalOfertas: 20,
           totalInteressados: 12,
           listaComentarios: [] ,
           listaUltimas: [],
           comentario: ''
        }
      } 

     componentDidMount(){
       this.carregarListaComentarios();
       this.carregarListaUltimaAtualizacoes();
     } 

     carregarListaComentarios(){        
        let idImovel = 1;
        ComentarioService.listarComentariosPorImovel(idImovel).then(listaComentarios => {
            this.setState({listaComentarios: listaComentarios})
        })
     }

     carregarListaUltimaAtualizacoes() {
        let id = 0;
        function createData(id, acao, descAcao) {
          id += 1;
          return {id, acao, descAcao} ;
        }

        const rows = [
            createData(1, 'Imóvel ', 'Adicionou novo imóvel' ),
            createData(2, 'Imóvel', 'Atualizou informações do imóvel'),
            createData(3, 'Contato', 'Adicionou novo contato'),
            createData(4, 'Informações Pessoais', 'Editou suas informações pessoais')            
          ];

          for (let i = 0; i < rows.length; i++){
            let list = this.state.listaUltimas;
            list.push(rows[i]);
            this.setState({listaUltimas: list});            
        }
     }

    enviarOfertaImovel(event){
        event.preventDefault();
        console.log('valor oferta selecionado: ' + this.valorOferta.value);
        console.log('obs selecionado: ' + this.observacaoOferta.value);

        let idUsuario = '5ce95a266b4e216264be787d';
        let idImovel = '5ce9862257ece819786e7ae5';
        OfertaService.cadastrarOferta(idUsuario, idImovel, this.valorOferta.value, this.observacaoOferta.value).then(response => {
            console.log('Response enviarOferta: ' + response);
            this.valorOferta.value = '';
            this.observacaoOferta.value = '';
        })

    }

    enviarSolicitacaoParceria(event){
        event.preventDefault();
        console.log('Descricao Sol. Parceria selecionado: ' + this.descSolParceria.value);
        let idUsuario = '5ce95a266b4e216264be787d';
        let idImovel = '5ce9862257ece819786e7ae5';
        ParceriaService.cadastrarSolicitacaoParceria(idUsuario, idImovel, this.descSolParceria.value).then(response => {
            console.log('Response - enviarSolicitacaoParceria:  ' + response);
            this.descSolParceria.value = '';
        })
    }

    enviarSolicitacaoIntermediacao(event){
        event.preventDefault();
        console.log('Descricao Sol. Intermediacao selecionada: ' + this.descSolIntermediacao.value);
        let idUsuario = '5ce95a266b4e216264be787d';
        let idImovel = '5ce9862257ece819786e7ae5';
        IntermediacaoService.cadastrarSolicitacaoIntermediacao(idUsuario, idImovel, this.descSolIntermediacao.value).then(response => {
            console.log('Response - enviarSolicitacaoIntermediacao:  ' + response);
            this.descSolIntermediacao.value = '';
        })
    }

    enviarComentario(event){
        event.preventDefault();
        console.log('Comentario enviado: ' + this.comentario.value);
        let idUsuario = '5ce95a266b4e216264be787d';
        let idImovel = '5ce9862257ece819786e7ae5';
        ComentarioService.cadastrarComentario(idImovel, idUsuario, this.comentario.value).then(response => {
            console.log('Comentario - response - enviarComentario: ' + response);
            this.carregarListaComentarios();
            this.comentario.value = '';
        })
    }


    render() {
        return (

            <div>
                <Header />

                <main>
                    <br /> <br />  <br /> <br /> <br /> <br /> <br />
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="main-left-sidebar">

                                            <ImovelUsuarioResponsavel />

                                            <OutrosImoveisUsuario />

                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="main-ws-sec">
                                            <div className="user-tab-sec">

                                                <div className="tab-feed st2">

                                                    <ul>
                                                        <li data-tab="info-dd" className="active">
                                                            <a href="#" title="">
                                                                <span className="icon"><i class="fa fa-info-circle"></i></span>
                                                                <span><Link to="/visualizarImovelDetalhes/10">Informações</Link></span>
                                                            </a>
                                                        </li>
                                                        <li data-tab="feed-dd" >
                                                            <a href="#" title="">
                                                                <span className="icon"><i class="fa fa-image"></i></span>
                                                                <span><Link to="/">Galeria de Fotos</Link></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="posts-section">
                                                    <div className="post-bar">

                                                        <div className="suggestion-usd">
                                                            <img src="http://via.placeholder.com/35x35" alt="" />
                                                            <div className="sgt-text">
                                                                <h4>{this.state.nomeUsuario}</h4>
                                                                <span>{this.state.perfilUsuario}</span>
                                                            </div>
                                                        </div>

                                                        <div className="post_topbar">
                                                            <h3 style={{ fontSize: '20px' }}><strong>{this.state.titulo} </strong></h3> <br />
                                                            <Link to={{ pathname: `/visualizarImovelDetalhes/${this.state.idImovel}` }}>
                                                                <img src={imovel2} alt="" style={{ position: 'relative', float: 'center', width: '100%' }} />
                                                            </Link>
                                                            <br />
                                                        </div>

                                                        <div className="epi-sec">

                                                            <ul className="descp">
                                                                <li><span className="icon"><i class="fa fa-map-marker"></i></span><span>{this.state.localizacao}</span></li>
                                                            </ul>
                                                            <ul className="bk-links">
                                                                <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                                <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job_descp">
                                                            <ul className="job-dt">
                                                                <li><a href="#" title="">{this.state.acao}</a></li>
                                                                <li><span>$ {this.state.valorImovel}</span></li>
                                                            </ul>
                                                            <ul className="job-dt" style={{ fontSize: '12px' }}>
                                                                <li><p>IPTU </p> $ {this.state.valorIptu} </li>
                                                                <li> </li>
                                                                <li><p>Condomínio </p> $ {this.state.valorCondominio} </li>
                                                                <li> </li>
                                                                <li><p>Outras Taxas </p> $ {this.state.valorTaxas} </li>
                                                            </ul>

                                                            <ul className="skill-tags">
                                                                <li><a href="#" title=""> {this.state.area} m²</a></li>
                                                                <li><a href="#" title=""> {this.state.quantQuartos} Quarto(s)</a></li>
                                                                <li><a href="#" title=""> {this.state.quantBanheiros} Banheiro(s)</a></li>
                                                                <li><a href="#" title=""> {this.state.quantVagas} Vaga(s)</a></li>
                                                                <li><a href="#" title=""> {this.state.quantSuites} Suíte(s)</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job-status-bar">
                                                            <ul class="bk-links" >
                                                                <li><button style={{ border: 'none' }}><i class="fa fa-bookmark-o"></i></button></li>
                                                                <li><button style={{ border: 'none' }}><i class="fa fa-hand-pointer-o"></i></button></li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="epi-secright">

                                                </div>

                                                <div className="product-feed-tab current" id="info-dd">
                                                    <div className="user-profile-ov">
                                                        <h3><a href="#" title="" className="overview-open">Descrição</a> <a href="#" title="" className="overview-open"><i className="fa fa-pencil"></i></a></h3>
                                                        <p> {this.state.descricao} </p>
                                                    </div>

                                                    <div className="user-profile-ov">
                                                        <h3><a href="#" title="" className="lct-box-open">Mapa</a> </h3>

                                                        <p>Inserir google maps aqui </p>
                                                    </div>

                                                    <div className="user-profile-ov st2">
                                                        <h3><a href="#" title="" className="exp-bx-open">Estatísticas </a></h3>
                                                        <br />

                                                        <ul className="skill-tags">
                                                            <li><a href="#a" title="" style={{ color: '#3F3F3F' }}>Total Visualizações: &nbsp;&nbsp; &nbsp;&nbsp; {this.state.totalVisualizacoes}</a></li>
                                                            <li><a href="#a" title="" style={{ color: '#3F3F3F' }}>Total de Ofertas: &nbsp;&nbsp; &nbsp;&nbsp; {this.state.totalOfertas} </a></li>
                                                            <li><a href="#a" title="" style={{ color: '#3F3F3F' }}>Total de Interessados: &nbsp;&nbsp; &nbsp;&nbsp; {this.state.totalInteressados} </a></li>
                                                        </ul>

                                                    </div>

                                                    <div className="user-profile-ov st2">
                                                        <h3><a href="#" title="" className="exp-bx-open">Oferta </a></h3>
                                                        <div className="notifications-list">

                                                            <div className="post-comment d-block">
                                                                <div className="comment_box d-block w-100">
                                                                    <br />
                                                                    <form>
                                                                        <input type="text" ref={(input) => this.valorOferta = input} placeholder="envie oferta em R$" maxLength="5" class="d-block w-100 mb-3" style={{ backgroundColor: '#f8f9fa' }} />
                                                                        <input type="textarea" ref={(input) => this.observacaoOferta = input} placeholder="envie uma observação" class="d-block w-100 mb-3" style={{ backgroundColor: '#f8f9fa' }} />
                                                                        <button type="submit" onClick={this.enviarOfertaImovel.bind(this)} >Enviar</button>
                                                                    </form>
                                                                </div>
                                                            </div>{/*--post-comment end*/}

                                                        </div>
                                                    </div>

                                                    <div className="user-profile-ov st2">
                                                        <h3><a href="#" title="" className="exp-bx-open">Parceria </a></h3>
                                                        <div className="notifications-list">
                                                            <div className="post-comment">
                                                                <div className="comment_box d-block w-100">
                                                                    <br />
                                                                    <form>
                                                                        <input type="textarea" ref={(input) => this.descSolParceria = input} placeholder="envie uma observação" class="d-block w-100 mb-3" style={{ backgroundColor: '#f8f9fa' }} />
                                                                        <br /> <br />
                                                                        <button type="submit" onClick={this.enviarSolicitacaoParceria.bind(this)}>Enviar</button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="user-profile-ov st2">
                                                        <h3><a href="#" title="" className="exp-bx-open">Intermediação </a></h3>
                                                        <div className="notifications-list">
                                                            <div className="post-comment">
                                                                <div className="comment_box d-block w-100">
                                                                    <br />
                                                                    <form>
                                                                        <input type="textarea" ref={(input) => this.descSolIntermediacao = input} placeholder="envie uma observação" class="d-block w-100 mb-3" style={{ backgroundColor: '#f8f9fa' }} />
                                                                        <br /> <br />
                                                                        <button type="submit" onClick={this.enviarSolicitacaoIntermediacao.bind(this)}>Enviar</button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="user-profile-ov st2">
                                                        <h3><a href="#" title="" className="exp-bx-open">Comentários </a></h3>
                                                        <div className="notifications-list">
                                                            {
                                                                this.state.listaComentarios.map(comment => {
                                                                    return (
                                                                        <div className="notfication-details">
                                                                            <div className="noty-user-img">
                                                                                <img src={israel} alt="" />
                                                                            </div>
                                                                            <div className="notification-info">
                                                                                <h3><a href="#" title="">{comment.usuarioComentario.nome}</a></h3>
                                                                                <h4 style={{fontSize: '13px', color: '#686868'}}>
                                                                                    {comment.comentario}
                                                                                </h4>
                                                                                
                                                                                <span>  {new Intl.DateTimeFormat('pt-BR', { 
                                                                                                                month: 'numeric', 
                                                                                                                day: 'numeric',
                                                                                                                year: 'numeric',    
                                                                                                                hour: 'numeric',
                                                                                                                minute: 'numeric',
                                                                                                                second: 'numeric'                                                                
                                                                                                            }).format(new Date(comment.createdAt))}  </span>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }

                                                        </div>
                                                        
                                                        <div className="post-comment">
                                                        <br /> <br />  
                                                            <div className="cm_img">
                                                                <img src={israel} alt="" style={{ width: '40px', height: '40px' }} />
                                                            </div>
                                                            <div className="comment_box">
                                                                <br />
                                                                <form>
                                                                    <input type="text" ref={(input) => this.comentario = input}  placeholder="Insira um comentário" style={{ backgroundColor: '#f8f9fa' }} />
                                                                    <br /> <br />                                                                    
                                                                    <button type="submit" onClick={this.enviarComentario.bind(this)}>Enviar</button>
                                                                </form>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="user-profile-ov st2">
                                                        <h3><a href="#" title="" className="exp-bx-open">Últimas Atualizações </a></h3>
                                                        {
                                                            this.state.listaUltimas.map(ultima => {
                                                                return (
                                                                    <div>
                                                                        <h4 >{ultima.acao} <a href="#" title=""><i className="fa fa-pencil"></i></a></h4>
                                                                        <p>{ultima.descAcao} </p>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 pd-right-none no-pd">
                                        <div className="right-sidebar">

                                            <div className="message-btn">
                                                <Link to="/imovelEditar/10" title=""><i className="fa fa-home"></i> Editar Imóvel</Link>
                                            </div>
                                            <AnuncioImobiliaria />

                                            <AnuncioImoveis />
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

export default ImovelDetalhes;