import React, { Component } from 'react'
import { URL_API, MOCK, HEADER_REQ_API } from '../componentes/common/environment';

const resource = 'recomendacaos';

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


class RecomendacaoService extends Component {
  
    static listarRecomendacoesPorUsuario(idUsuario){

        if (!MOCK){
            const requestInfo = {
                method: 'GET',                
                headers: new Headers(HEADER_REQ_API)
                // passar os parametros ainda aqui
            }  
            return api(URL_API, resource, requestInfo );
        }
        else {
            let id = 0;
            function createData(id, usuario, perfil, descricao) {
                id += 1;
                return {id, usuario, perfil, descricao} ;
            }
    
            const rows = [
                createData(1, 'Jessica Palmer', 'Normal', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra.' ),
                createData(2, 'Jon Snow', 'Corretor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra.'),
                createData(3, 'Imobiliaria Luz', 'imobiliaria', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra.'),
                createData(4, 'Arya Stark', 'Normal', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra.')  
            ];
    
            return new Promise(resolve => {            
                resolve(rows);
            })     
        }
       
    }
}

export default  RecomendacaoService;