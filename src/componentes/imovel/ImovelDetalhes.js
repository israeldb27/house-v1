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
import { getUsuarioStorage, getPerfilUsuario, getAcaoImovel, getIdUsuarioStorage, isEmpty } from '../common/Utils';
import ImovelService from '../../services/ImovelService';
 

class ImovelDetalhes extends Component {    

    constructor(props) {
        super(props)  
     
        this.state = {  
           listaComentarios: [] , 
           listaUltimas: [],
           comentario: '',
           usuarioSessao: getUsuarioStorage(),
           idImovel: '',
           imovel: '',
           usuarioImovel: '',
           msgOferta: '',
           isExisteOFertaEnviada: false,
           msgSolParceria: '',
           isExisteSolParceria: false,
           msgSolIntermediacao: '',
           isExisteSolIntermediacao: false,
           valorOfertaEnviada: 0,
           observacaoOfertaEnviada: ''
        }   
      } 


     componentDidMount(){
       let idImovel = this.props.match.params.id;
       ImovelService.buscarImovePorId(idImovel).then(imovel => {
           this.setState({imovel: imovel})           
           this.setState({usuarioImovel: imovel.usuario})
       })
       this.setState({idImovel: idImovel});              
       this.carregarListaUltimaAtualizacoes();  
       this.carregarListaComentarios(idImovel);

       // checar se o usuario ja enviou solicitacao de parceria para este imovel
       this.checarExisteSolicitacaoParceriaEnviada(idImovel, getIdUsuarioStorage());

       // checar se o usuario ja enviou solicitacao de parceria para este imovel
       this.checarExisteSolicitacaoIntermediacaoEnviada(idImovel, getIdUsuarioStorage());

       // checar se o usuario já enviou uma oferta para este imovel 
       this.checarExisteOFertaEnviadaPorUsuario(idImovel, getIdUsuarioStorage());
     } 


     checarExisteSolicitacaoParceriaEnviada = (idImovel, idUsuario) => {
          ParceriaService.buscarSolicitacaoParceriaPorImovel(idImovel, idUsuario).then(parceria => {
            if (!isEmpty(parceria)){
                this.setState({msgSolParceria: 'Solicitação de parceria já enviada anteriormente', 
                              isExisteSolParceria: true})    
            }  
          })
     }

    checarExisteSolicitacaoIntermediacaoEnviada = (idImovel, idUsuario) => {
        IntermediacaoService.buscarSolicitacaoIntermediacaoPorImovel(idImovel, idUsuario).then(intermediacao => {     
            if (!isEmpty(intermediacao)){
                this.setState({msgSolIntermediacao: 'Solicitação de intermediação já enviada anteriormente', 
                               isExisteSolIntermediacao: true})
            }           
        })
    }

    checarExisteOFertaEnviadaPorUsuario = (idImovel, idUsuario) => {
        OfertaService.buscarOFertaEnviadaPorImovelUsuario(idImovel, idUsuario).then(oferta => {
            if (!isEmpty(oferta)){
                this.setState({msgOferta: 'Oferta já enviada anteriormente', 
                            isExisteOFertaEnviada: true,
                            valorOfertaEnviada: oferta.valorOferta,
                            observacaoOfertaEnviada: oferta.observacao})
            }            
        })
    }    

     carregarListaComentarios = (idImovel) => {                   
        ComentarioService.listarComentariosPorImovel(idImovel).then(listaResultado => {                                     
            listaResultado.map(item => this.setState({listaComentarios: item}))
        })
        console.log('Resultado lista: ' + JSON.stringify(this.state.listaComentarios))        
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

    enviarOfertaImovel = (event) => {
        event.preventDefault();
        let idUsuario = getIdUsuarioStorage();
        let idImovel = this.state.idImovel;
        OfertaService.cadastrarOferta(idUsuario, idImovel, this.valorOferta.value, this.observacaoOferta.value).then(response => {            
            this.setState({msgOferta : 'OFerta enviada com sucesso', 
                           isExisteOFertaEnviada: true,
                           valorOfertaEnviada: this.valorOferta.value,
                           observacaoOfertaEnviada: this.observacaoOferta.value});
            
          //  this.valorOferta.value = '';
           // this.observacaoOferta.value = '';
        })
    }

    enviarSolicitacaoParceria(event){
        event.preventDefault();        
        let idUsuario = getIdUsuarioStorage();
        let idImovel = this.state.idImovel;
        ParceriaService.cadastrarSolicitacaoParceria(idUsuario, idImovel, this.descSolParceria.value).then(response => {            
            this.setState({msgSolParceria : 'Solicitação de parceria enviada com sucesso', 
                           isExisteSolParceria: true});            
        })
    }

    cancelarSolicitacaoParceria = (event) => {
        event.preventDefault();        
        let idUsuario = getIdUsuarioStorage();
        let idImovel = this.state.idImovel;

        ParceriaService.cancelarSolicitacaoParceria(idUsuario, idImovel).then(response => {            
            this.setState({msgSolParceria : '' , isExisteSolParceria: false});
            this.descSolParceria.value = '';
        })
    }

    enviarSolicitacaoIntermediacao(event){
        event.preventDefault();
        let idUsuario = getIdUsuarioStorage();
        let idImovel = this.state.idImovel;
        IntermediacaoService.cadastrarSolicitacaoIntermediacao(idUsuario, idImovel, this.descSolIntermediacao.value).then(response => {
            this.setState({msgSolIntermediacao : 'Solicitação de intermediação enviada com sucesso', 
                          isExisteSolIntermediacao: true});            
        })
    }

    cancelarSolicitacaoIntermediacao = (event) => {
        event.preventDefault();
        let idUsuario = getIdUsuarioStorage();
        let idImovel = this.state.idImovel;
        IntermediacaoService.cancelarSolicitacaoIntermediacao(idUsuario, idImovel).then(response => {            
            this.setState({msgSolIntermediacao : '' , 
                           isExisteSolIntermediacao: false});
            
        })
    }

    enviarComentario(event){
        event.preventDefault();        
        ComentarioService.cadastrarComentario(this.state.idImovel, this.state.usuarioSessao._id, this.comentario.value).then(response => {
            this.carregarListaComentarios(this.state.idImovel);
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
                                                                <Link to="/visualizarImovelDetalhes/10">
                                                                    <span className="icon"><i className="fa fa-info-circle"></i></span>
                                                                    <span>Informações</span>                                                            
                                                                </Link>
                                                        </li>
                                                        <li data-tab="feed-dd" >
                                                                <Link to="/visualizarImovelDetalhes/10">
                                                                    <span className="icon"><i className="fa fa-image"></i></span>
                                                                    <span>Galeria de Fotos</span>
                                                                </Link>                                                            
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="posts-section">
                                                    <div className="post-bar">

                                                        <div className="suggestion-usd">
                                                            <img src="http://via.placeholder.com/35x35" alt="" />
                                                            <div className="sgt-text">
                                                                <h4>{this.state.usuarioImovel.nome}</h4>
                                                                <span>{getPerfilUsuario(this.state.usuarioImovel.perfil)}</span>
                                                            </div>
                                                        </div>

                                                        <div className="post_topbar">
                                                            <h3 style={{ fontSize: '20px' }}><strong>{this.state.imovel.titulo} </strong></h3> <br />
                                                            <Link to={{ pathname: `/visualizarImovelDetalhes/${this.state.idImovel}` }}>
                                                                <img src={imovel2} alt="" style={{ position: 'relative', float: 'center', width: '100%' }} />
                                                            </Link>
                                                            <br />
                                                        </div>

                                                        <div className="epi-sec">

                                                            <ul className="descp">
                                                                <li><span className="icon"><i className="fa fa-map-marker"></i></span><span>{this.state.imovel.localizacao}</span></li>
                                                            </ul>
                                                            <ul className="bk-links">
                                                                <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                                <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job_descp">
                                                            <ul className="job-dt">
                                                                <li><a href="#" title="">{getAcaoImovel(this.state.imovel.acao)}</a></li>
                                                                <li><span>$ {this.state.imovel.valor}</span></li>
                                                            </ul>
                                                            <ul className="job-dt" style={{ fontSize: '12px' }}>
                                                                <li><p>IPTU </p> $ {this.state.imovel.valorIptu} </li>
                                                                <li> </li>
                                                                <li><p>Condomínio </p> $ {this.state.imovel.valorCondominio} </li>
                                                                <li> </li>
                                                                <li><p>Outras Taxas </p> $ {this.state.imovel.outrasTaxas} </li>
                                                            </ul>

                                                            <ul className="skill-tags">
                                                                <li><a href="#" title=""> {this.state.imovel.area} m²</a></li>
                                                                <li><a href="#" title=""> {this.state.imovel.quantQuartos} Quarto(s)</a></li>
                                                                <li><a href="#" title=""> {this.state.imovel.quantBanheiros} Banheiro(s)</a></li>
                                                                <li><a href="#" title=""> {this.state.imovel.quantVagas} Vaga(s)</a></li>
                                                                <li><a href="#" title=""> {this.state.imovel.quantSuites} Suíte(s)</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job-status-bar">
                                                            <ul className="bk-links" >
                                                                <li><button style={{ border: 'none' }}><i className="fa fa-bookmark-o"></i></button></li>
                                                                <li><button style={{ border: 'none' }}><i className="fa fa-hand-pointer-o"></i></button></li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="epi-secright">

                                                </div>

                                                <div className="product-feed-tab current" id="info-dd">
                                                    <div className="user-profile-ov">
                                                        <h3><a href="#" title="" className="overview-open">Descrição</a> <a href="#" title="" className="overview-open"><i className="fa fa-pencil"></i></a></h3>
                                                        <p> {this.state.imovel.descricao} </p>
                                                    </div>

                                                    <div className="user-profile-ov">
                                                        <h3><a href="#" title="" className="lct-box-open">Mapa</a> </h3>

                                                        <p>Inserir google maps aqui </p>
                                                    </div>

                                                    <div className="user-profile-ov st2">
                                                        <h3><a href="#" title="" className="exp-bx-open">Estatísticas </a></h3>
                                                        <br />

                                                        <ul className="skill-tags">
                                                            <li><a href="#a" title="" style={{ color: '#3F3F3F' }}>Total Visualizações: &nbsp;&nbsp; &nbsp;&nbsp; {this.state.imovel.quantTotalVisualizacoes}</a></li>
                                                            <li><a href="#a" title="" style={{ color: '#3F3F3F' }}>Total de Ofertas: &nbsp;&nbsp; &nbsp;&nbsp; {this.state.imovel.quantTotalOfertas} </a></li>
                                                            <li><a href="#a" title="" style={{ color: '#3F3F3F' }}>Total de Interessados: &nbsp;&nbsp; &nbsp;&nbsp; {this.state.imovel.quantTotalFavoritos} </a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="user-profile-ov st2">
                                                        <h3><a href="#" title="" className="exp-bx-open">Oferta </a></h3>
                                                        <div className="notifications-list">

                                                            <div className="post-comment d-block">
                                                                <div className="comment_box d-block w-100">
                                                                    <br />
                                                                    <form>

                                                                        {this.state.isExisteOFertaEnviada}
                                                                        {
                                                                            this.state.isExisteOFertaEnviada === false && (
                                                                                <div>
                                                                                    <input type="text" ref={(input) => this.valorOferta = input} placeholder="envie oferta em R$" maxLength="5" className="d-block w-100 mb-3" style={{ backgroundColor: '#f8f9fa' }} />
                                                                                    <input type="textarea" ref={(input) => this.observacaoOferta = input} placeholder="envie uma observação" className="d-block w-100 mb-3" style={{ backgroundColor: '#f8f9fa' }} />
                                                                                    <button type="submit" onClick={this.enviarOfertaImovel.bind(this)} >Enviar</button>
                                                                                </div>    
                                                                            )
                                                                        }
 
                                                                        {
                                                                            this.state.isExisteOFertaEnviada === true && (
                                                                                 <div>   
                                                                                       <div className="notification-info">
                                                                                            <h3>Valor Oferta: {this.state.valorOfertaEnviada} </h3>
                                                                                            <h4 style={{fontSize: '13px', color: '#686868'}}>
                                                                                                Observação: {this.state.observacaoOfertaEnviada}
                                                                                            </h4>
                                                                                            <br /> <br /> 
                                                                                        </div>
                                                                                        <br /> <br /> 
                                                                                        <button type="submit" onClick={this.enviarOfertaImovel.bind(this)} >Cancelar</button>
                                                                                        <br /> <br /> 
                                                                                 </div>    
                                                                            )    
                                                                        }
                                                                        
                                                                    </form>
                                                                </div>
                                                                <div style={{fontSize: 12, color: 'red'}}>
                                                                    {this.state.msgOferta} 
                                                                </div>
                                                            </div>                                                         

                                                        </div>
                                                    </div>

                                                    <div className="user-profile-ov st2">
                                                        <h3><a href="#" title="" className="exp-bx-open">Parceria </a></h3>
                                                        <div className="notifications-list">
                                                            <div className="post-comment">
                                                                <div className="comment_box d-block w-100">
                                                                    <br />
                                                                    <form>                                                                        
                                                                        {
                                                                            this.state.isExisteSolParceria === true && ( 
                                                                                <div>
                                                                                    <button type="submit" onClick={this.cancelarSolicitacaoParceria.bind(this)}>Cancelar</button> 
                                                                                    <br /> <br />
                                                                                </div>
                                                                            )
                                                                        }

                                                                        {                                                                            
                                                                            this.state.isExisteSolParceria === false && ( 
                                                                                    <div>
                                                                                        <input type="textarea" ref={(input) => this.descSolParceria = input} placeholder="envie uma observação" className="d-block w-100 mb-3" style={{ backgroundColor: '#f8f9fa' }} />
                                                                                        <br /> <br />
                                                                                        <button type="submit" onClick={this.enviarSolicitacaoParceria.bind(this)}>Enviar  </button> 
                                                                                    </div>
                                                                            )
                                                                        }     
                                                                    </form>
                                                                </div>
                                                                <div style={{fontSize: 12, color: 'red'}}>
                                                                    {this.state.msgSolParceria} 
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
                                                                        {
                                                                            this.state.isExisteSolIntermediacao === true && (
                                                                                <div>
                                                                                     <button type="submit" onClick={this.cancelarSolicitacaoIntermediacao.bind(this)}>Cancelar</button> 
                                                                                     <br /> <br />
                                                                                </div>
                                                                            )
                                                                        }

                                                                        {
                                                                            this.state.isExisteSolIntermediacao === false && (
                                                                                <div>
                                                                                    <input type="textarea" ref={(input) => this.descSolIntermediacao = input} placeholder="envie uma observação" className="d-block w-100 mb-3" style={{ backgroundColor: '#f8f9fa' }} />
                                                                                    <br /> <br />
                                                                                    <button type="submit" onClick={this.enviarSolicitacaoIntermediacao.bind(this)}>Enviar</button>
                                                                                </div>
                                                                            )    
                                                                        }                                                                        
                                                                    </form>
                                                                </div>
                                                                <div style={{fontSize: 12, color: 'red'}}>
                                                                    {this.state.msgSolIntermediacao} 
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
                                                                        <div key={comment._id} className="notfication-details">
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
                                                                    <div key={ultima.id}>
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