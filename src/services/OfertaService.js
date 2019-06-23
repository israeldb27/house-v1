import React, { Component } from 'react'

import { URL_API, MOCK, HEADER_REQ_API, objToQueryString } from '../componentes/common/environment';

const resource = 'ofertas/';

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

class OfertaService extends Component {

    static buscarOFertaEnviadaPorImovelUsuario(idImovel, idUsuario){
        const queryString = objToQueryString({         
            imovel: idImovel,
            usuario: idUsuario            
        });   
        
        const resourceImovelPorUsuario = resource + 'imovelusuario/?'+queryString ; 
        const requestInfo = {
            method: 'GET',                
            headers: new Headers(HEADER_REQ_API),
            query: JSON.stringify({
                imovel: idImovel,
                usuario: idUsuario
            }) 
        }
        return api(URL_API, resourceImovelPorUsuario, requestInfo );

    }

    static cadastrarOferta(idUsuario, idImovel, valorOferta, obs){
        const requestInfo = {
            method: 'POST',                
            headers: new Headers(HEADER_REQ_API),
            body: JSON.stringify({
                valorOferta: valorOferta,
                usuarioOferta:idUsuario,
                imovel:  idImovel,
                observacao: obs
            })
            // inserir o(s) parametro(s) aqui
        }
        return api(URL_API, resource, requestInfo );           
    }

    
    static listarOfertasPorUsuarioResumo(idUsuario){

        let m = false;
        if (!m) {
            const requestInfo = {
                method: 'GET',                
                headers: new Headers(HEADER_REQ_API),
                // inserir o(s) parametro(s) aqui
            }
            return api(URL_API, resource, requestInfo );
        }
        else {
            let id = 0;
            function createData(id, titulo, tipoImovel, urlFoto) {
                id += 1;
                return {id, titulo, tipoImovel, urlFoto};
            }

            const rows = [
                createData(1, 'Vintage Center', 'Prédio', '/img1.jpg'),
                createData(2, 'Casinha da Sogra', 'Casa de Vila', '/img1.jpg'),
                createData(3, 'Shopping Nova América', 'Edificio Comercial', '/img1.jpg'),
            ];

            return new Promise(resolve => {
                resolve(rows);
            })
        }        
    }

    static listarImoveisOfertasRecebidasPorUsuario(idUsuario){

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
            function createData(id, nomeUsuario, perfilUsuario, urlFoto, 
                                localizacao, titulo, acao, valorImovel, 
                                valorIptu, valorCondominio, descricao, 
                                area, quartos, banheiros, garagens, suites, ofertas) {
            id += 1;
            return {id, nomeUsuario, perfilUsuario, urlFoto, 
                    localizacao, titulo, acao, valorImovel, 
                    valorIptu, valorCondominio, descricao, 
                    area, quartos, banheiros, garagens, suites, ofertas} ;
            }

            const rows = [
            createData(1, 'Gisele Kremer', 'Corretor', '/img1.jpg',
                        'Boa Viagem, Niteroi - RJ', 'Luxo Place', 'Aluguel', '1320',
                        550, 1560, 'Excelente espaço e bem localizado',
                        210, 2, 2, 1, 1, 20),

            createData(2, 'Zirtaeb', 'Imobiliaria', '/img1.jpg',
                        'Centro, Niteroi - RJ', 'Flat Centro', 'Venda', '700',
                        211, 800, 'Localizado no centro da cidade',
                        80, 1, 0, 0, 0, 22)
            ];

            return new Promise(resolve => {
                resolve(rows)
            })
        }
        
    }


    static listarImoveisOfertasEnviadasPorUsuario(idUsuario){

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
            function createData(id, nomeUsuario, perfilUsuario, urlFoto, 
                                localizacao, titulo, acao, valorImovel, 
                                valorIptu, valorCondominio, descricao, 
                                area, quartos, banheiros, garagens, suites, ofertas) {
            id += 1;
            return {id, nomeUsuario, perfilUsuario, urlFoto, 
                    localizacao, titulo, acao, valorImovel, 
                    valorIptu, valorCondominio, descricao, 
                    area, quartos, banheiros, garagens, suites, ofertas} ;
            }

            const rows = [
            createData(1, 'Gisele Kremer', 'Corretor', '/img1.jpg',
                        'Boa Viagem, Niteroi - RJ', 'Luxo Place', 'Aluguel', '1320',
                        550, 1560, 'Excelente espaço e bem localizado',
                        210, 2, 2, 1, 1, 15),

            createData(2, 'Zirtaeb', 'Imobiliaria', '/img1.jpg',
                        'Centro, Niteroi - RJ', 'Flat Centro', 'Venda', '700',
                        211, 800, 'Localizado no centro da cidade',
                        80, 1, 0, 0, 0, 33)
            ];

            return new Promise(resolve => {
                resolve(rows)
            })
        }        
    }

}

export default OfertaService;