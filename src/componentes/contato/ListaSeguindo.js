import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import ContatoService from '../../services/ContatoService';
import SeguidoresService from '../../services/SeguidoresService';

class ListaSeguindo extends Component {

    constructor() {
        super()  
     
        this.state = {       
           listaSeguindo: [] 
        }
      } 

    componentDidMount() {        
        let idUsuario = 1;
        SeguidoresService.listarSeguindoPorUsuario(idUsuario).then(lista => {
            this.setState({listaSeguindo: lista});            
        })
    }

    buscarSeguindo(event) {
        event.preventDefault();
        console.log('old  selecionado: ' + this.chaveBusca.value);  
        let idUsuario = 1;
        SeguidoresService.listarSeguindoPorUsuarioPorChave(this.chaveBusca.value, idUsuario).then(lista => {
            this.setState({listaSeguindo: lista});            
        })      
   } 
  

  render() {
    return (
        <div>
            <Header />
            <br />

            <section className="companies-info">
                <div className="container">

                    <div className="tab-feed st2">
                        <ul>                      
                            <li data-tab="info-dd" >
                                <Link to="/listaContatosUsuario/10" title="">
                                    <img src="images/ic2.png" alt="" />
                                    <span>Contatos</span>
                                </Link>
                            </li>
                            <li data-tab="feed-dd" >
                                <Link to="/listarSeguidores/10" title="">
                                    <img src="images/ic1.png" alt="" />
                                    <span>Seguidores</span>
                                </Link>
                            </li>

                            <li data-tab="my-bids" className="active">
                                <Link to="/listarSeguindo/10" title="">
                                    <img src="images/ic5.png" alt="" />
                                    <span>Seguindo</span>
                                </Link>
                            </li>

                            <li data-tab="my-bids" >
                                    <Link to="/listarConvites/10">
                                        <img src="images/ic5.png" alt="" />
                                        <span>Convites</span>
                                    </Link>
                            </li>
                            
                        </ul>
                    </div> 

                    <div className="search-sec">
                            <div className="container">
                                <div className="search-box">
                                    <form onSubmit={this.buscarSeguindo.bind(this)}>
                                        <input type="text" name="search" placeholder="Chave Busca Usuario" ref={(input) => this.chaveBusca = input} />
                                        <button type="submit">Buscar</button>                                        
                                    </form>
                                    <br /> <br /><br /> <br /> 
                                </div>
                            </div>
                      </div>

                      <div className="companies-list">
                            <div className="row">
                                {
                                    this.state.listaSeguindo.map(contato => {
                                        return (
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="company_profile_info">
                                                    <div className="company-up-info">
                                                        <img src="http://via.placeholder.com/90x90" alt="" />
                                                        <h3>{contato.nomeUsuario}</h3>
                                                        <h4>{contato.perfilUsuario}</h4>
                                                        <ul>
                                                            <li><a href="#" title="" className="follow">Seguir</a></li>
                                                            <li><a href="#" title="" className="message-us"><i className="fa fa-envelope"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <a href="#" title="" className="view-more-pro">View Profile</a>
                                                </div>
                                            </div>  
                                        );
                                    })
                                }
                               
                            </div>
                     </div>

                   
                    <div className="process-comm">
                        <div className="spinner">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                        </div>
                    </div>{/*-process-comm end*/}
                </div>
            </section>{/*-companies-info end*/}

        </div>
    )
  }
}

export default ListaSeguindo
