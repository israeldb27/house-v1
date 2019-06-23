import React, { Component } from 'react'
import { URL_API, MOCK, HEADER_REQ_API } from '../componentes/common/environment';

const resource = 'favoritos';

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

class FavoritoService extends Component {
    

    static listarFavoritosPorUsuario(idUsuario){

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
            function createData(id, localizacao, titulo, valorImovel, acao, valorIptu, valorCondominio, 
                                descricao, area, quantQuartos, quantBanheiros, quantVagas, quantSuites,
                                quantLikes, quantComments, quantViews, nomeUsuario, perfilUsuario) {
                id += 1;
                return {id, localizacao, titulo, valorImovel, acao, valorIptu, valorCondominio, 
                    descricao, area, quantQuartos, quantBanheiros, quantVagas, quantSuites,
                    quantLikes, quantComments, quantViews, nomeUsuario, perfilUsuario} ;
            }

            const rows = [
                createData(1, 'Rua Miguel de Frias, 112, Niteroi, RJ - Brasil', 'Luxo Palace Residence Start', 120000, 'Venda', 250, 100, 
                            'Excelente espaço, bem localizado e ambiente tranquilo', 90, 3, 2, 1, 1,
                            15, 23, 300, 'Bram Stark', 'Corretor' )  
            
            ];

            return new Promise(resolve => {            
                resolve(rows);
            })  
        }
        
    }
}

export default FavoritoService;