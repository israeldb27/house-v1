import React, { Component } from 'react'
import MensagemService from '../../services/MensagemService';


let id = 0;
function createDataUsuarioRemetente(id, nomeUsuario, perfilUsuario, urlFoto) {
  id += 1;
  return {id, nomeUsuario, perfilUsuario, urlFoto} ;
}

const rowUsuario = createDataUsuarioRemetente(1, 'Barra Imobiliaria', 'imobiliaria', '/img1.jpg' );

class ItensMensagem extends Component {

    constructor() {
        super()  
     
        this.state = {
           usuarioRemetente: '', 
           listaItensMensagem: [] 
        }
      } 

     componentDidMount() {
         this.setState({usuarioRemetente: rowUsuario});
         this.carregarListaItensMensagens();
    }

    carregarListaItensMensagens(event){
        let idUsuarioSessao = 1;
        let idUsuarioRemetente = 2;
        MensagemService.listaItensMensagensPorUsuario(idUsuarioSessao, idUsuarioRemetente).then(listaMensagens => {
            console.log('mensagens: ' + listaMensagens);
            this.setState({listaItensMensagem: listaMensagens});            
        })
    }

    enviarMensagem(event){
        event.preventDefault();
        console.log('mensagem selecionado: ' + this.mensagem.value);
    }

  render() {
    return (
     <div className="col-lg-8 col-md-12 pd-right-none pd-left-none">
        <div className="main-conversation-box">

            <div className="message-bar-head">
                <div className="usr-msg-details">
                    <div className="usr-ms-img">
                        <img src="http://via.placeholder.com/50x50" alt="" />
                    </div>
                    <div className="usr-mg-info">
                        <h3>{this.state.usuarioRemetente.nomeUsuario}</h3>
                        <p>{this.state.usuarioRemetente.perfilUsuario}</p>
                    </div>{/*usr-mg-info end*/}
                </div>
                <a href="#" title=""><i className="fa fa-ellipsis-v"></i></a>
            </div>{/*message-bar-head end*/}

            <div className="messages-line mCustomScrollbar _mCS_1"> 
                <br /> <br />  <br /> <br />  <br />  <br /> <br /> 

                {
                    this.state.listaItensMensagem.map(itemMensagem => {    
                        return (  
                            <div className="notifications-list" key={itemMensagem.id}>
                                 <div className="notfication-details">
                                    <div className="noty-user-img-2">
                                        <img src="http://via.placeholder.com/35x35" alt="" />
                                    </div>
                                    <div className="notification-info">
                                        <h3><a href="#" title="">{itemMensagem.usuarioAutor.nome}</a> </h3>
                                        <p>{itemMensagem.descricao} </p>
                                        <span>{new Intl.DateTimeFormat('pt-BR', { 
                                                                        month: 'numeric', 
                                                                        day: 'numeric',
                                                                        year: 'numeric',    
                                                                        hour: 'numeric',
                                                                        minute: 'numeric',
                                                                        second: 'numeric'                                                                
                                                                    }).format(new Date(itemMensagem.updatedAt))}</span>
                                    </div>
                                </div>
                            </div>                                
                        );                                           
                    })
                }      
            </div>{/*messages-line end*/}
            
            <div className="message-send-area">
                <form onSubmit={this.enviarMensagem.bind(this)}>
                    <div className="mf-field">
                        <input type="text" name="message" ref={(input) => this.mensagem = input}  placeholder="Type a message here" />
                        <button type="submit">Enviar</button>
                    </div>
                    <ul>
                        <li><a href="#" title=""><i className="fa fa-smile-o"></i></a></li>
                        <li><a href="#" title=""><i className="fa fa-camera"></i></a></li>
                        <li><a href="#" title=""><i className="fa fa-paperclip"></i></a></li>
                    </ul>
                </form>
            </div>{/*message-send-area end*/}
        </div>{/*main-conversation-box end*/}
    </div>
    )
  }
}

export default ItensMensagem
