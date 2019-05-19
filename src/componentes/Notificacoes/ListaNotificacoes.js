import React, { Component } from 'react'
import Header from '../layout/Header';
import NotificacaoService from '../../services/NotificacaoService';


class ListaNotificacoes extends Component {

    constructor() {
        super()  
     
        this.state = {
           listaNotificacoes: [] 
        }
      } 

     componentDidMount() {
        let idUsuario = 1;
        NotificacaoService.listarNotificacoesPorUsuario(idUsuario).then(listaNotificacoes => {
            this.setState({listaNotificacoes: listaNotificacoes});            
        })
    }

  render() {
    return (
        <div>
            <Header />
            <br />
            
            <section className="companies-info">
                <div className="container">

                    <div class="tab-pane fade show" id="nav-notification" role="tabpanel" aria-labelledby="nav-notification-tab">
                        <div class="acc-setting">
                            <h3>Notificações</h3>
                            <div class="notifications-list">
                                {
                                this.state.listaNotificacoes.map(notificacao=> {
                                    return (
                                        <div class="notfication-details">
                                            <div class="noty-user-img">
                                                <img src="http://via.placeholder.com/35x35" alt="" />
                                            </div>
                                            <div class="notification-info">
                                                <h3><a href="#" title="">{notificacao.nomeUsuario}</a> {notificacao.descricao}</h3>
                                                <span>{notificacao.dataNotificacao}</span>
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
                        </div>
                                                
                    </div>
                </div>
            </section>
        </div>    
    )
  }
}

export default ListaNotificacoes
