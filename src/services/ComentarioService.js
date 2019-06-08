import React, { Component } from 'react'

import { URL_API, MOCK, HEADER_REQ_API } from '../componentes/common/environment';

const resource = 'comentarios';

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

class ComentarioService extends Component {

    static cadastrarComentario(idImovel, idUsuario, comentario) {

        const requestInfo = {
            method: 'POST',                
            headers: new Headers(HEADER_REQ_API),
            body: JSON.stringify({
                usuarioComentario: idUsuario,
                imovel: idImovel,
                comentario: comentario
            })
            // inserir o(s) parametro(s) aqui
        }
        return api(URL_API, resource, requestInfo );

    }

    static listarComentariosPorImovel(idImovel){

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
            function createData(id, nomeUsuario, comentario, urlFoto, dataComentario) {
              id += 1;
              return {id, nomeUsuario, comentario, urlFoto, dataComentario} ;
            }
            
            const rows = [
              createData(1, 'Lagoa Imoveis', 'excelente imovel', '/img1.jpg', '01/01/2019' ),
              createData(2, 'Zirtaeb', 'bem localizado', '/img1.jpg', '01/01/2019'),
              createData(3, 'Pamela Alves', 'excelente preço', '/img1.jpg', '01/01/2019'),
              createData(4, 'Israel Barreto', 'eu gostei', '/img1.jpg', '01/01/2019'),
              createData(5, 'Marli Barreto', 'muito bom', '/img1.jpg', '01/01/2019')
            ];
            
        }        
    }

}

export default ComentarioService;