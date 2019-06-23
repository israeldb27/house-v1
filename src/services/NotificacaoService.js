import React, { Component } from 'react'
import { URL_API, MOCK, HEADER_REQ_API } from '../componentes/common/environment';

const resource = 'notificacaos';

function api(url_api, r, info) {
    return new Promise(resolve => {
        let url;
        url = url_api + r;        
        fetch(url, info)
          .then(response => response.json())
          .then(res => {               
              resolve(res)            
          })
          .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?" ))          
    })    
}

class NotificacaoService extends Component {

    static listarNotificacoesPorUsuario(idUsuario){

        if (! MOCK ) {

            const requestInfo = {
                method: 'GET',                
                headers: new Headers(HEADER_REQ_API)
            }
            return api(URL_API, resource, requestInfo );
        }
        else {
            let id = 0;
            function createData(id, nomeUsuario, descricao, urlFoto, dataNotificacao) {
                id += 1;
                return {id, nomeUsuario, descricao, urlFoto, dataNotificacao} ;
            }

            const rows = [
                createData(1, 'Barra Imoveis', 'comentou post', '/img1.jpg', '11/12/2018 11:15:00' ),
                createData(2, 'Zirtaeb', 'iniciou nova conexão', '/img1.jpg', '22/12/2018 10:15:00' ),
                createData(3, 'Pamela Alves', 'enviou convite para nova conexão', '/img1.jpg' , '15/12/2018 11:15:00' ),
                createData(4, 'Israel Barreto', 'enviou uma nova oferta para seu imovel', '/img1.jpg', '18/12/2018 11:15:00' ),
                createData(5, 'Marli Barreto', 'aceitou parceria sobre imovel', '/img1.jpg', '16/12/2018 11:15:00' ),
                createData(5, 'Marli Barreto', 'aceitou parceria sobre imovel', '/img1.jpg', '16/12/2018 11:15:00' ),
                createData(5, 'Marli Barreto', 'aceitou parceria sobre imovel', '/img1.jpg', '16/12/2018 11:15:00' ),
                createData(5, 'Marli Barreto', 'aceitou parceria sobre imovel', '/img1.jpg', '16/12/2018 11:15:00' ),
            ];

            return new Promise(resolve => {            
                resolve(rows);
            })      
        }
        
    }
}

export default NotificacaoService;