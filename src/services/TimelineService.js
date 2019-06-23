import React, { Component } from 'react'

import { URL_API, MOCK, HEADER_REQ_API } from '../componentes/common/environment';

const resource = 'timelines';

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

class TimelineService extends Component {

    static cadastrarPostTexto(idUsuario, texto){       
        const requestInfo = {
            method: 'POST',                
            headers: new Headers(HEADER_REQ_API),
            body: JSON.stringify({
                usuario: idUsuario,
                textPost: texto,
                tipoTimeline:'TXT'
            })
            // inserir o(s) parametro(s) aqui
        }
        return api(URL_API, resource, requestInfo );           
    }

}

export default TimelineService;