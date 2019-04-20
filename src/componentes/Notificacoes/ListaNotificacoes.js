import React, { Component } from 'react'


let id = 0;
function createData(id, nomeUsuario, descricao, urlFoto, dataNotificacao) {
  id += 1;
  return {id, nomeUsuario, descricao, urlFoto, dataNotificacao} ;
}

const rows = [
  createData(1, 'Lagoa Imoveis', 'comentou post', '/img1.jpg', '11/12/2018 11:15:00' ),
  createData(2, 'Zirtaeb', 'iniciou nova conexão', '/img1.jpg', '22/12/2018 10:15:00' ),
  createData(3, 'Pamela Alves', 'enviou convite para nova conexão', '/img1.jpg' , '15/12/2018 11:15:00' ),
  createData(4, 'Israel Barreto', 'enviou uma nova oferta para seu imovel', '/img1.jpg', '18/12/2018 11:15:00' ),
  createData(5, 'Marli Barreto', 'aceitou parceria sobre imovel', '/img1.jpg', '16/12/2018 11:15:00' ),
];

class ListaNotificacoes extends Component {

    constructor() {
        super()  
     
        this.state = {
           listaNotificacoes: [] 
        }
      } 

     componentDidMount() {
        for (let i = 0; i < rows.length; i++){
            let list = this.state.listaNotificacoes;
            list.push(rows[i]);
            this.setState({listaNotificacoes: list});            
        }
    }

  render() {
    return (
        <div>
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
