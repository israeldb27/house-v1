import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import ContatoService from '../../services/ContatoService';



class ListaConvites extends Component {

   constructor() {
        super()

        this.state = {
            listaConvites: []
        }
    } 

    componentDidMount() {     
        let idUsuario = 1;
        ContatoService.listarConvitesPorUsuario(idUsuario).then(listaConvites => {
            this.setState({listaConvites: listaConvites});            
        })
        
    }

    aceitarConvite(e){
        e.preventDefault();
        console.log('clicou em aceitar');
    }

    recusarConvite(e){
        e.preventDefault();
        console.log('clicou em recusar');
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
                                <Link to="/listarSeguidores/10" >
                                    <img src="images/ic1.png" alt="" />
                                    <span>Seguidores</span>
                                </Link>
                            </li>

                            <li data-tab="my-bids">
                                <Link to="/listarSeguindo/10">
                                    <img src="images/ic5.png" alt="" />
                                    <span>Seguindo</span>
                                </Link>
                            </li>

                            <li data-tab="my-bids" className="active">
                                <Link to="/listarConvites/10">
                                    <img src="images/ic5.png" alt="" />
                                    <span>Convites</span>
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div className="companies-list">
                        <div className="row">
                            {
                                this.state.listaConvites.map(convite => {
                                    return (
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="company_profile_info">
                                                <div className="company-up-info">
                                                    <img src="http://via.placeholder.com/90x90" alt="" />
                                                    <h3>{convite.nomeUsuario}</h3>
                                                    <h4>{convite.perfilUsuario}</h4>
                                                    <ul>
                                                        <li><a href="#" title="" onClick={this.aceitarConvite.bind(this)} className="follow">Aceitar</a></li>
                                                        <li><a href="#" title="" onClick={this.recusarConvite.bind(this)} className="message-us">Recusar</a></li>
                                                    </ul>
                                                </div>
                                                <a href="#" title="" className="view-more-pro">View Profile</a>
                                            </div>{/*-company_profile_info end*/}
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
                    </div>
                </div>
            </section>

        </div>
    )
  }
}

export default ListaConvites
