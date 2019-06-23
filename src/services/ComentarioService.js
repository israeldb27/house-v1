import React, { Component } from 'react'

import { URL_API, MOCK, HEADER_REQ_API, objToQueryString } from '../componentes/common/environment';

const resource = 'comentarios/';

function api(url_api, r, info) {
    return new Promise(resolve => {
        let url;
        url = url_api + r;
        console.log('chamada API: ' + url);
        fetch(url, info)
          .then(response => response.json())
          .then(res => {
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
        }
        return api(URL_API, resource, requestInfo );

    }

    static listarComentariosPorImovel(idImovel){    
        
        const queryString = objToQueryString({         
            imovel: idImovel            
        });

        const resourceComentarioPorImovel =  resource + 'imovel/?'+queryString
        const requestInfo = {
            method: 'GET',                
            headers: new Headers(HEADER_REQ_API)              
        }
        return api(URL_API, resourceComentarioPorImovel, requestInfo );
    }

}

export default ComentarioService;