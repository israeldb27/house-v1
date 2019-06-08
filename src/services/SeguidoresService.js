import React, { Component } from 'react'
import { URL_API, MOCK, HEADER_REQ_API } from '../componentes/common/environment';

const resource = 'seguidors';

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

class SeguidoresService extends Component {

    static iniciarSeguirUsuario(idUsuario, idUsuarioSolicitante){
        const requestInfo = {
            method: 'POST',                
            headers: new Headers(HEADER_REQ_API),
            body: JSON.stringify ({
                usuarioSeguidor: idUsuarioSolicitante,
                usuarioSeguindo: idUsuario,
                status: 'C',
                statusLeitura: 'N'
            })
        }
        return api(URL_API, resource, requestInfo );
    }

    static listarSeguidoresPorUsuario(idUsuario){

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
                createData(1, 'Niteroi Imobiliaria INc', 'Imobiliaria', '/img1.jpg' ),
                createData(2, 'Self Imoveis', 'Imobiliaria', '/img1.jpg'),
                createData(3, 'Jose Aldo', 'Corretor', '/img1.jpg'),
                createData(4, 'Antonio Carlos', 'Normal', '/img1.jpg'),
                createData(5, 'Patricia Barreto', 'Normal', '/img1.jpg')
            ];
    
            return new Promise(resolve => {            
                resolve(rows);
            })     
        }
      
    }

    static listarSeguidoresPorUsuarioPorChave(chave, idUsuario){

        if (!MOCK) {
            const requestInfo = {
                method: 'GET',                
                headers: new Headers(HEADER_REQ_API)
            }
            return api(URL_API, resource, requestInfo );
        }

        let id = 0;
        function createData(id, nomeUsuario, perfilUsuario, urlFoto) {
            id += 1;
            return {id, nomeUsuario, perfilUsuario, urlFoto} ;
        }

        const rows = [            
            createData(4, 'Antonio Carlos', 'Normal', '/img1.jpg'),
            createData(5, 'Patricia Barreto', 'Normal', '/img1.jpg')
        ];

        return new Promise(resolve => {            
            resolve(rows);
        }) 
    }

    static listarSeguindoPorUsuario(idUsuario){

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
                createData(1, 'Niteroi Imobiliaria INc', 'Imobiliaria', '/img1.jpg' ),
                createData(2, 'Self Imoveis', 'Imobiliaria', '/img1.jpg'),
                createData(3, 'Jose Aldo', 'Corretor', '/img1.jpg'),
                createData(4, 'Antonio Carlos', 'Normal', '/img1.jpg'),
                createData(5, 'Patricia Barreto', 'Normal', '/img1.jpg')
            ];

            return new Promise(resolve => {            
                resolve(rows);
            }) 
        }
        
    }

    static listarSeguindoPorUsuarioPorChave(chave, idUsuario){

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
                createData(4, 'Antonio Carlos', 'Normal', '/img1.jpg'),
                createData(5, 'Patricia Barreto', 'Normal', '/img1.jpg')
            ];
    
            return new Promise(resolve => {            
                resolve(rows);
            }) 
        }    
       
    }
}

export default  SeguidoresService;
