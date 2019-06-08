import React, { Component } from 'react'
import Header from '../layout/Header';
import NotificacaoService from '../../services/NotificacaoService';
import { when } from 'q';


class ListaNotificacoes extends Component {

    constructor() {
        super()  
     
        this.state = {
           listaNotificacoes: ''            
        }
      } 

     componentDidMount() {
        let idUsuario = 1;
        NotificacaoService.listarNotificacoesPorUsuario(idUsuario).then(listaNotificacoes => {
            console.log('Lista notificacao: ' + JSON.stringify(listaNotificacoes));
            console.log('Lista notificacao - p2 : ' + listaNotificacoes);
            console.log('Lista notificacao - p3 : ' + Object.values(listaNotificacoes));
            this.setState({listaNotificacoes: listaNotificacoes});                                    
        })
    }

  render() {
     const isLoading = this.state.listaNotificacoes.length > 0; 
   
     if ( isLoading) {
        return (
            <div>
                <Header />
                <br />  
    
                <section className="companies-info">
                    <div className="container">    
                        <div className="tab-pane fade show" id="nav-notification" role="tabpanel" aria-labelledby="nav-notification-tab">
                            <div className="acc-setting">
                                <h3>Notificações</h3>
                                <div className="notifications-list">                              
                                    {
                                        this.state.listaNotificacoes.map((notificacao, index)=> {
                                            return (
                                                <div className="notfication-details" key={notificacao._id}>
                                                    <div className="noty-user-img">
                                                        <img src="http://via.placeholder.com/35x35" alt="" />
                                                    </div>
                                                    <div className="notification-info" key={notificacao._id}>
                                                        <h3>
                                                            <a href="#" title="">
                                                                {
                                                                    notificacao.tipoNotificacao === 'C' && 
                                                                    ( 
                                                                        <div>
                                                                            <span> {notificacao.usuarioConvite.nome} &nbsp;&nbsp; </span> 
                                                                            <p> Aceitou seu convite </p>
                                                                        </div>
                                                                     ) 
                                                                } 
                                                                {
                                                                    notificacao.tipoNotificacao === 'P' && 
                                                                    ( 
                                                                        <div>
                                                                            <span> {notificacao.imovel.titulo} &nbsp;&nbsp; </span> 
                                                                            <p> Parceria foi fechada com o imóvel </p>
                                                                        </div>
                                                                     ) 
                                                                } 

                                                                {
                                                                    notificacao.tipoNotificacao === 'I' && 
                                                                    ( 
                                                                        <div>
                                                                            <span> {notificacao.imovel.titulo} &nbsp;&nbsp; </span> 
                                                                            <p> Intermediação foi fechada com o imóvel </p>
                                                                        </div>
                                                                     ) 
                                                                } 
                                                            </a>                                                             
                                                        </h3>
                                                        
                                                        <span className="date timeago" >
                                                                {new Intl.DateTimeFormat('pt-BR', { 
                                                                    month: 'numeric', 
                                                                    day: 'numeric',
                                                                    year: 'numeric',                                                                    
                                                                }).format(new Date(notificacao.createdAt))}

                                                                &nbsp; &nbsp;&nbsp;

                                                                {new Intl.DateTimeFormat('pt-BR', {                                                                   
                                                                    hour: 'numeric', 
                                                                    minute: 'numeric',
                                                                    second: 'numeric', 
                                                                }).format(new Date(notificacao.createdAt))}
                                                        </span>
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

     else {
         return (

             <div>
                 <Header />
                 <br />

                 <section className="companies-info">
                     <div className="container">

                         <div className="tab-pane fade show" id="nav-notification" role="tabpanel" aria-labelledby="nav-notification-tab">
                             <div className="acc-setting">
                                 <h3>Notificações</h3>
                                 <div className="notifications-list">
                                     <div className="notfication-details" >
                                        <span>Nenhuma notificação existente</span>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section>
             </div> 

         )
     }
    
  }
}

export default ListaNotificacoes
