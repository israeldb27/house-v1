import React, { Component } from 'react'
import ItensMensagem from './ItensMensagem';

let id = 0;
function createData(id, nomeUsuario, descricao, urlFoto, dataMensagem, quantNovasMensagens) {
  id += 1;
  return {id, nomeUsuario, descricao, urlFoto, dataMensagem, quantNovasMensagens} ;
}

const rows = [
  createData(1, 'Lagoa Imoveis', 'novas informações para você', '/img1.jpg', '11/12/2018 11:15:00', 2 ),
  createData(2, 'Cristiana Souza', 'iniciou nova conexão', '/img1.jpg', '22/12/2018 10:15:00', 2 ),
  createData(3, 'Pamela Alves', 'enviou convite para nova conexão', '/img1.jpg' , '15/12/2018 11:15:00', 3 ),
  createData(4, 'Israel Barreto', 'enviou uma nova oferta ', '/img1.jpg', '18/12/2018 11:15:00', 1 ),
  createData(5, 'Marli Barreto', 'aceitou parceria sobre imovel', '/img1.jpg', '16/12/2018 11:15:00', 2 ),
];

class Mensagens extends Component {

    constructor() {
        super()  
     
        this.state = {
           listaMensagens: [] 
        }
      } 

     componentDidMount() {
        for (let i = 0; i < rows.length; i++){
            let list = this.state.listaMensagens;
            list.push(rows[i]);
            this.setState({listaMensagens: list});            
        }
    }

    render() {
        return (
            <section class="messages-page">
                <div class="container">
                    <div class="messages-sec">
                        <div class="row">
                            <div class="col-lg-4 col-md-12 no-pdd">
                                <div class="msgs-list">
                                    <div class="msg-title">
                                        <h3>Mensagens</h3>
                                        <ul>
                                            <li><a href="#" title=""><i class="fa fa-cog"></i></a></li>
                                            <li><a href="#" title=""><i class="fa fa-ellipsis-v"></i></a></li>
                                        </ul>
                                    </div>{/*msg-title end*/}
                                    <div class="messages-list">
                                        <ul>
                                        {
                                            this.state.listaMensagens.map(mensagem=> {    
                                                return (
                                                    <li >
                                                        <div class="usr-msg-details">
                                                            <div class="usr-ms-img">
                                                                <img src="http://via.placeholder.com/50x50" alt="" />
                                                                <span class="msg-status"></span>
                                                            </div>
                                                            <div class="usr-mg-info">
                                                                <h3> {mensagem.nomeUsuario} </h3>
                                                                <p> {mensagem.descricao} <img src="images/smley.png" alt="" /></p>
                                                            </div>
                                                            <span class="posted_time">{mensagem.dataMensagem}</span>
                                                            <span class="msg-notifc"> {mensagem.quantNovasMensagens} </span>
                                                        </div>
                                                    </li>
                                                );                                           
                                            })
                                        }            
                                            <li class="active">
                                                <div class="usr-msg-details">
                                                    <div class="usr-ms-img">
                                                        <img src="http://via.placeholder.com/50x50" alt="" />
                                                        <span class="msg-status"></span>
                                                    </div>
                                                    <div class="usr-mg-info">
                                                        <h3>John Doe</h3>
                                                        <p>Lorem ipsum dolor <img src="images/smley.png" alt="" /></p>
                                                    </div>{/*usr-mg-info end*/}
                                                    <span class="posted_time">1:55 PM</span>
                                                    <span class="msg-notifc">1</span>
                                                </div>{/*usr-msg-details end*/}
                                            </li>
                                           
                                        </ul>
                                    </div>{/*messages-list end*/}
                                </div>{/*msgs-list end*/}
                            </div>

                            <ItensMensagem />

                        </div>
                    </div>{/*messages-sec end*/}
                </div>
            </section>
        )
  }
}

export default Mensagens
