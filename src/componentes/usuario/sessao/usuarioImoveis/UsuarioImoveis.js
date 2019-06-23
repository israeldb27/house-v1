import React, { Component } from 'react';
import UsuarioResumoDetalhes from '../../UsuarioResumoDetalhes';
import UsuarioResumoContatos from '../../UsuarioResumoContatos';
import ImovelDestaqueUsuario from '../../../imovel/ImovelDestaqueUsuario';
import { Link } from 'react-router-dom';
import UsuarioSessaoMenuFuncionalidades from '../../UsuarioSessaoMenuFuncionalidades';
import UsuarioSessaoDetalhesHeader from '../UsuarioSessaoDetalhesHeader';
import imovel2 from '../../../fotos/imovel2.jpg';
import Header from '../../../layout/Header'
import ImovelService from '../../../../services/ImovelService'
import { getAcaoImovel, getPerfilUsuario, getTipoImovel, getIdUsuarioStorage, getUsuarioStorage } from '../../../common/Utils';
import ItemUsuarioImovel from './ItemUsuarioImovel';

class UsuarioImoveis extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       listaImoveis: [],
       usuario: getUsuarioStorage()
    }
    
  }

  componentWillMount(){
    // carregando lista de imoveis do usuario
    let idUsuario = getIdUsuarioStorage();
    ImovelService.listarImoveisPorUsuario(idUsuario).then( lista => {
        console.log('Lista usuario imoveis: ' + JSON.stringify(lista));
        this.setState({listaImoveis: lista})
    })
    
  }
     
  render() {
    return (
        <div>
            <Header />
            <br />

            <main>
                <br /> <br />  <br /> <br /> <br /> <br /> <br />
                <div className="main-section">
                    <div className="container">
                        <div className="main-section-data">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="main-left-sidebar">

                                        <UsuarioResumoDetalhes usuarioSessao={this.state.usuario}/>

                                        <UsuarioResumoContatos />
                                    </div> {/*main-left-sidebar end */}
                                </div>
                                <div className="col-lg-6">
                                    <div className="main-ws-sec">

                                        <UsuarioSessaoDetalhesHeader usuarioSessao={this.state.usuario}/>

                                        <div className="tab-feed st2">
                                            <ul>
                                                <li data-tab="info-dd" >
                                                    <Link to="/usuarioSessaoDetalhes/10" title="">
                                                        <img src="images/ic2.png" alt="" />
                                                        <span>Info</span>
                                                    </Link>
                                                </li>
                                                <li data-tab="feed-dd" >
                                                    <Link to="/usuarioFeed/10" title="">
                                                        <img src="images/ic1.png" alt="" />
                                                        <span>Feed</span>
                                                    </Link>
                                                </li>

                                                <li data-tab="saved-jobs" className="active">
                                                    <Link to="/usuarioImoveis/10" title="">
                                                        <img src="images/ic4.png" alt="" />
                                                        <span>Imóveis</span>
                                                    </Link>
                                                </li>
                                                <li data-tab="my-bids">
                                                    <Link to="/usuarioFavoritos/10" title="">
                                                        <img src="images/ic5.png" alt="" />
                                                        <span>Favoritos</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div> {/* tab-feed end */}                                        
                                            {
                                                this.state.listaImoveis.map(imovel => <ItemUsuarioImovel item={imovel} /> )                                          
                                            }
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="right-sidebar">
                                        <div className="message-btn">
                                            <Link to="/imovelAdicionar" title=""><i className="fa fa-plus"></i> Imóvel </Link>  {/*  este link eh usado apenas pelo usuario da sessao*/}
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href="#" title=""><i className="fa fa-envelope"></i> Mensagem</a>
                                        </div>

                                        <UsuarioSessaoMenuFuncionalidades />

                                        <ImovelDestaqueUsuario />

                                    </div> {/*right-sidebar end */}
                                </div>
                            </div>
                        </div> {/* main-section-data end */}
                    </div>
                </div>
            </main>
        </div>
           
      )
  }
}

export default UsuarioImoveis
