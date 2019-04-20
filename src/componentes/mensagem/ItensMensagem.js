import React, { Component } from 'react'


let id = 0;
function createDataUsuarioRemetente(id, nomeUsuario, perfilUsuario, urlFoto) {
  id += 1;
  return {id, nomeUsuario, perfilUsuario, urlFoto} ;
}

id = 0;
function createData(id, descricao, urlFoto, dataMensagem) {
    id += 1;
    return {id, descricao, urlFoto, dataMensagem} ;
  }

const rowUsuario = createDataUsuarioRemetente(1, 'Barra Imobiliaria', 'imobiliaria', '/img1.jpg' );

const rows = [
  createData(1, 'novas informações para você', '/img1.jpg', '11/12/2018 11:15:00', 2 ),
  createData(2, 'iniciou nova conexão', '/img1.jpg', '22/12/2018 10:15:00', 2 ),
  createData(3, 'enviou convite para nova conexão', '/img1.jpg' , '15/12/2018 11:15:00', 3 ),
  createData(4, 'enviou uma nova oferta ', '/img1.jpg', '18/12/2018 11:15:00', 1 ),
  createData(5, 'aceitou parceria sobre imovel', '/img1.jpg', '16/12/2018 11:15:00', 2 ),
];


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

        for (let i = 0; i < rows.length; i++){
            let list = this.state.listaItensMensagem;
            list.push(rows[i]);
            this.setState({listaItensMensagem: list});            
        }
    }

  render() {
    return (
     <div class="col-lg-8 col-md-12 pd-right-none pd-left-none">
        <div class="main-conversation-box">

            <div class="message-bar-head">
                <div class="usr-msg-details">
                    <div class="usr-ms-img">
                        <img src="http://via.placeholder.com/50x50" alt="" />
                    </div>
                    <div class="usr-mg-info">
                        <h3>{this.state.usuarioRemetente.nomeUsuario}</h3>
                        <p>{this.state.usuarioRemetente.perfilUsuario}</p>
                    </div>{/*usr-mg-info end*/}
                </div>
                <a href="#" title=""><i class="fa fa-ellipsis-v"></i></a>
            </div>{/*message-bar-head end*/}

            <div class="messages-line">

                {
                    this.state.listaItensMensagem.map(itemMensagem=> {    
                        return (
                            <div class="main-message-box st3">
                                <div class="message-dt st3">
                                    <div class="message-inner-dt">
                                        <p>{itemMensagem.descricao}</p>
                                    </div>{/*message-inner-dt end*/}
                                    <span>itemMensagem.dataMensagem}</span>
                                </div>{/*message-dt end*/}
                                <div class="messg-usr-img">
                                    <img src="http://via.placeholder.com/50x50" alt="" />
                                </div>
                            </div> 

                        );                                           
                    })
                }

                <div class="main-message-box ta-right">
                    <div class="message-dt">
                        <div class="message-inner-dt">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
                        </div>{/*message-inner-dt end*/}
                        <span>Sat, Aug 23, 1:08 PM</span>
                    </div>{/*message-dt end*/}
                    <div class="messg-usr-img">
                        <img src="http://via.placeholder.com/50x50" alt="" />
                    </div>{/*messg-usr-img end*/}
                </div>{/*main-message-box end*/}

            </div>{/*messages-line end*/}
            <div class="message-send-area">
                <form>
                    <div class="mf-field">
                        <input type="text" name="message" placeholder="Type a message here" />
                        <button type="submit">Send</button>
                    </div>
                    <ul>
                        <li><a href="#" title=""><i class="fa fa-smile-o"></i></a></li>
                        <li><a href="#" title=""><i class="fa fa-camera"></i></a></li>
                        <li><a href="#" title=""><i class="fa fa-paperclip"></i></a></li>
                    </ul>
                </form>
            </div>{/*message-send-area end*/}
        </div>{/*main-conversation-box end*/}
    </div>
    )
  }
}

export default ItensMensagem
