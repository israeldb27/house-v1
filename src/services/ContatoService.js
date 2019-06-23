import React, { Component } from 'react'
import { URL_API, MOCK, HEADER_REQ_API } from '../componentes/common/environment';

const resource = 'contatos';

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

class ContatoService extends Component {

    static enviarConvite(idUsuario, idUsuarioSolicitante){
        const requestInfo = {
            method: 'POST',                
            headers: new Headers(HEADER_REQ_API),
            body: JSON.stringify ({
                usuarioHost: idUsuarioSolicitante,
                usuarioConvidado: idUsuario,
                status: 'C',
                statusLeitura: 'N'
            })
        }
        return api(URL_API, resource, requestInfo );
    }

    static listaResumoContatosPorUsuario(idUsuario){
        if (!MOCK) {
            const requestInfo = {
                method: 'GET',                
                headers: new Headers(HEADER_REQ_API)
            }
            return api(URL_API, resource, requestInfo );
        }
        else {
            let id = 0;
            function createData(id, nome, perfil, urlFoto) {
                id += 1;
                return {id, nome, perfil, urlFoto};
            }

            const rows = [
                createData(1, 'Marli Barreto', 'Corretor', '/img1.jpg'),
                createData(2, 'Patricia Barreto', 'Corretor', '/img1.jpg'),
                createData(3, 'Borgocirin', 'Imobiliária', '/img1.jpg'),
            ];

            return new Promise(resolve => {            
                resolve(rows);
            })    
        }
        
    }

    static listaSugestoesContatos(idUsuario){

        if (!MOCK) {
            const requestInfo = {
                method: 'GET',                
                headers: new Headers(HEADER_REQ_API)
            }  
            return api(URL_API, resource, requestInfo );
        }
        else {
            let id = 0;
            function createData(id, nome, perfil, urlFoto) {
                id += 1;
                return {id, nome, perfil, urlFoto};
            }

            const rows = [
                createData(1, 'Antonio Barreto', 'Corretor', '/img1.jpg'),
                createData(2, 'Pedro Barreto', 'Corretor', '/img1.jpg'),
                createData(3, 'Borgocirin', 'Imobiliária', '/img1.jpg'),
            ];

            return new Promise(resolve => {            
                resolve(rows);
            }) 
        }
           
    }

    static listarContatosPorUsuario(idUsuario){

        if (!MOCK) {
            const requestInfo = {
                method: 'GET',                
                headers: new Headers(HEADER_REQ_API)
            }
            return api(URL_API, resource, requestInfo );
        }
        else {
            let id = 0;
            function createData(id, nomeUsuario, perfilUsuario, urlFoto) {
                id += 1;
                return {id, nomeUsuario, perfilUsuario, urlFoto} ;
            }

            const rows = [
                createData(1, 'Lagoa Imoveis', 'Imobiliaria', '/img1.jpg' ),
                createData(2, 'Zirtaeb', 'Imobiliaria', '/img1.jpg'),
                createData(3, 'Pamela Alves', 'Corretor', '/img1.jpg'),
                createData(4, 'Israel Barreto', 'Normal', '/img1.jpg'),
                createData(5, 'Marli Barreto', 'Normal', '/img1.jpg')
            ];

            return new Promise(resolve => {            
                resolve(rows);
            }) 
        }        
    }

    static listarContatosPorUsuarioPorChave(idUsuario, chave){

        if (!MOCK) {
            const requestInfo = {
                method: 'GET',                
                headers: new Headers(HEADER_REQ_API)
            }
            return api(URL_API, resource, requestInfo );
        }
        else {
            let id = 0;
            function createData(id, nomeUsuario, perfilUsuario, urlFoto) {
                id += 1;
                return {id, nomeUsuario, perfilUsuario, urlFoto} ;
            }

            const rows = [            
                createData(4, 'Israel Barreto', 'Normal', '/img1.jpg'),
                createData(5, 'Marli Barreto', 'Normal', '/img1.jpg')
            ];

            return new Promise(resolve => {            
                resolve(rows);
            }) 
        }
        
    }

    static listarConvitesPorUsuario(idUsuario){

        if (!MOCK) {
            const requestInfo = {
                method: 'GET',                
                headers: new Headers(HEADER_REQ_API)
            }
            return api(URL_API, resource, requestInfo );
        }
        else {
            let id = 0;
            function createData(id, nomeUsuario, perfilUsuario, urlFoto) {
                id += 1;
                return {id, nomeUsuario, perfilUsuario, urlFoto} ;
            }

            const rows = [
                createData(1, 'Lagoa Imoveis', 'Imobiliaria', '/img1.jpg' ),
                createData(2, 'Zirtaeb', 'Imobiliaria', '/img1.jpg'),
                createData(3, 'Pamela Alves', 'Corretor', '/img1.jpg'),
                createData(4, 'Israel Barreto', 'Normal', '/img1.jpg'),
                createData(5, 'Marli Barreto', 'Normal', '/img1.jpg')
            ];

            return new Promise(resolve => {            
                resolve(rows);
            })     
        }        
    }    
}

export default ContatoService;
