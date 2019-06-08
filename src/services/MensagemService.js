import React, { Component } from 'react'
import { URL_API, MOCK, HEADER_REQ_API } from '../componentes/common/environment';

const resource = "mensagems";

const resourceItem = "itemmensagems";

function api(url_api, r, info) {
    return new Promise(resolve => {
        let url;
        url = url_api + r;
        console.log('chamada API: ' + url);
        fetch(url, info)
          .then(response => response.json())
          .then(res => {
              console.log('valores recuperados: ' + res);   
              resolve(res)            
          })
          .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?" ))          
    })    
}

class MensagemService extends Component {    


    static listaMensagensPorUsuario(idUsuarioSessao){

        if (!MOCK) {
            const requestInfo = {
                method: 'GET',                
                headers: new Headers(HEADER_REQ_API)
                // inserir o(s) parametro(s) aqui
            }
            return api(URL_API, resource, requestInfo );
        }
        else {
            let id = 0;
            function createData(id, nomeUsuario, descricao, urlFoto, dataMensagem, quantNovasMensagens) {
                id += 1;
                return {id, nomeUsuario, descricao, urlFoto, dataMensagem, quantNovasMensagens} ;
            }

            const rows = [
                createData(1, 'Niteroi Imoveis', 'novas informações para você', '/img1.jpg', '11/12/2018 11:15:00', 2 ),
                createData(2, 'Cristiana Souza', 'iniciou nova conexão', '/img1.jpg', '22/12/2018 10:15:00', 2 ),
                createData(3, 'Pamela Alves', 'enviou convite para nova conexão', '/img1.jpg' , '15/12/2018 11:15:00', 3 ),
                createData(4, 'Israel Barreto', 'enviou uma nova oferta ', '/img1.jpg', '18/12/2018 11:15:00', 1 ),
                createData(5, 'Marli Barreto', 'aceitou parceria sobre imovel', '/img1.jpg', '16/12/2018 11:15:00', 2 ),
            ];

            return new Promise(resolve => {
                    resolve(rows) 
            })    
        }        

        
    }


    static listaItensMensagensPorUsuario(idUsuarioSessao, idUsuarioRemetente) {

        let id = 0;        
        if (!MOCK) {
            const requestInfo = {
                method: 'GET',                
                headers: new Headers(HEADER_REQ_API)
                // inserir o(s) parametro(s) aqui
            }
            return api(URL_API, resourceItem, requestInfo );
        }
        else {
            console.log('APP estah mockado');
            function createData(id, descricao, urlFoto, dataMensagem, nomeUsuario) {
                id += 1;
                return {id, descricao, urlFoto, dataMensagem, nomeUsuario} ;
            }

            const rows = [
                createData(1, 'novas informações para você oooooo', '/img1.jpg', '11/12/2018 11:15:00', 'Arya Stark' ),
                createData(2, 'iniciou nova conexão pp', '/img1.jpg', '22/12/2018 10:15:00',  'Arya Stark'),
                createData(3, 'enviou convite para nova conexão', '/img1.jpg' , '15/12/2018 11:15:00',  'Arya Stark' ),
                createData(4, 'enviou uma nova oferta ', '/img1.jpg', '18/12/2018 11:15:00', 'Arya Stark' ),
                createData(4, 'enviou uma nova oferta ', '/img1.jpg', '18/12/2018 11:15:00', 'Arya Stark' ),
                createData(4, 'enviou uma nova oferta ', '/img1.jpg', '18/12/2018 11:15:00', 'Arya Stark' ),
                createData(4, 'enviou uma nova oferta ', '/img1.jpg', '18/12/2018 11:15:00', 'Arya Stark' )
              ];    
    
              return new Promise(resolve => {
                    resolve(rows) 
             })
        }

        
    }

}

export default MensagemService
