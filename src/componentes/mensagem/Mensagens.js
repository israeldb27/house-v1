import React, { Component } from 'react'
import ItensMensagem from './ItensMensagem';
import Header from '../layout/Header';
import MensagemService from '../../services/MensagemService';


class Mensagens extends Component {

    constructor() {
        super()  
     
        this.state = {
           listaMensagens: [],
           idMensagem: '' 
        }
      } 

    componentDidMount() {
        let idUsuarioSessao = 1;
        MensagemService.listaMensagensPorUsuario(idUsuarioSessao).then(listaMensagens => {
            console.log('Lista mensagens: ' + listaMensagens);
            this.setState({listaMensagens: listaMensagens});            
        })
    }

    selecionarMensagem(id) {
        console.log('Id mensagem selecionada')
        this.setState({idMensagem: id});            
    }

    render() {
        return (

            <div>
                <Header />
                <br />

                <section className="messages-page">
                    <div className="container">
                        <div className="messages-sec">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 no-pdd">
                                    <div className="msgs-list">
                                        <div className="msg-title">
                                            <h3>Mensagens</h3>
                                            <ul>
                                                <li><a href="#" title=""><i className="fa fa-cog"></i></a></li>
                                                <li><a href="#" title=""><i className="fa fa-ellipsis-v"></i></a></li>
                                            </ul>
                                        </div>{/*msg-title end*/}
                                        <div className="messages-list">
                                            <ul>
                                                {
                                                    this.state.listaMensagens.map(mensagem => {
                                                        return (
                                                            <li >
                                                                <div className="usr-msg-details">
                                                                    <div className="usr-ms-img">
                                                                        <img src="http://via.placeholder.com/50x50" alt="" />
                                                                        <span className="msg-status"></span>
                                                                    </div>
                                                                    <div className="usr-mg-info">
                                                                        <h3> {mensagem.usuarioPara.nome} </h3>
                                                                        <p> {mensagem.descricaoUltimaMensagem} <img src="images/smley.png" alt="" /></p>
                                                                    </div>
                                                                    <span className="posted_time">{new Intl.DateTimeFormat('pt-BR', { 
                                                                                            month: 'numeric', 
                                                                                            day: 'numeric',
                                                                                            year: 'numeric',    
                                                                                            hour: 'numeric',
                                                                                            minute: 'numeric',
                                                                                            second: 'numeric'                                                                
                                                                                        }).format(new Date(mensagem.updatedAt))}</span>

                                                                    

                                                                    <span className="msg-notifc" style={{width: '45px'}}> novo </span>
                                                                </div>
                                                            </li>
                                                        );
                                                    })
                                                }
                                                <li className="active">
                                                    <div className="usr-msg-details">
                                                        <div className="usr-ms-img">
                                                            <img src="http://via.placeholder.com/50x50" alt="" />
                                                            <span className="msg-status"></span>
                                                        </div>
                                                        <div className="usr-mg-info">
                                                            <h3>John Doe</h3>
                                                            <p>Lorem ipsum dolor <img src="images/smley.png" alt="" /></p>
                                                        </div>{/*usr-mg-info end*/}
                                                        <span className="posted_time">1:55 PM</span>
                                                        <span className="msg-notifc">1</span>
                                                    </div>{/*usr-msg-details end*/}
                                                </li>

                                            </ul>
                                        </div>{/*messages-list end*/}
                                    </div>{/*msgs-list end*/}
                                </div>

                                <ItensMensagem idMensagemSelecionada={this.state.idMensagem} />

                            </div>
                        </div>{/*messages-sec end*/}
                    </div>
                </section>

            </div>
            
        )
  }
}

export default Mensagens
