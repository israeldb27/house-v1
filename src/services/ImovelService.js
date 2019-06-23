import React, { Component } from 'react'
import { URL_API, MOCK, HEADER_REQ_API, HEADER_REQ_API_LOCATION, objToQueryString } from '../componentes/common/environment';

const resource = 'imovels/';

const resourceLocation = 'https://maps.googleapis.com/maps/api/geocode/json';

function api(url_api, r, info) {
    return new Promise(resolve => {
        let url;
        url = url_api + r;        
        fetch(url, info)
          .then(response => response.json())
          .then(res => {              
              resolve(res)            
          })
          .catch(error => console.log("Mensage error: " + error ))          
    })    
}

function apiLocation(r, info) {
    return new Promise(resolve => {
        let url;
        url =  r;        
        fetch(url, info)
          .then(response => response.json())
          .then(res => {              
              resolve(res)            
          })
          .catch(error => console.log("Mensage error: " + error ))          
    })    
}

class ImovelService extends Component {

    static buscarImovePorId(idImovel){        
        const requestInfo = {
            method: 'GET',                
            headers: new Headers(HEADER_REQ_API)                     
        }
        return api(URL_API, resource + idImovel, requestInfo );
    }

    static buscarMeusImoveis(idUsuario, acaoImovel, tipoImovel, localizacao, statusImovel){         

        //Obs.: Acrescentar aqui ainda os outros parametros de busca
        const queryString = objToQueryString({         
            usuario: idUsuario            
        });

        const resourceImovelPorUsuario = 'imovels/usuario/?'+queryString        
        const requestInfo = {
            method: 'GET',                
            headers: new Headers(HEADER_REQ_API),
            query: JSON.stringify({
                usuario: idUsuario
            })                
        }
        return api(URL_API, resourceImovelPorUsuario, requestInfo );                 
    }

    static recuperarCoordenadasPorEndereco(address){
        const requestInfo = {
            method: 'GET',                
            headers: new Headers(HEADER_REQ_API_LOCATION),
            body: JSON.stringify({
                address: address,
                key: 'AIzaSyC852goNaD7SPItXt0szjYerGvEDFagC34'
            })    
        }
        return apiLocation( resourceLocation, requestInfo );

    }

    static cadastrarImovel(idUsuario, imovel){
       const requestInfo = {
            method: 'POST',                
            headers: new Headers(HEADER_REQ_API),
            body: JSON.stringify({
                usuario: idUsuario,
                titulo: imovel.titulo,
                acao: imovel.acao,
                tipoImovel: imovel.tipo,
                valor: imovel.valor,
                status: imovel.status,
                descricao: imovel.descricao,
                quantVagas: imovel.vaga,
                quantSuites: imovel.suite,
                quantBanheiros: imovel.banheiro,
                quantQuartos: imovel.quarto,                                
                area: imovel.area,
                localizacao: imovel.localizacao,
                valorIptu: imovel.valorIptu,
                valorCondominio: imovel.valorCondominio,
                outrasTaxas: imovel.outrasTaxas
            })
        }
        return api(URL_API, resource, requestInfo );
       
    }

    static listarImoveisPorUsuario(idUsuario){

        const queryString = objToQueryString({         
            usuario: idUsuario            
        });

        const resourceImovelPorUsuario = 'imovels/usuario/?'+queryString
        const requestInfo = {
            method: 'GET',                
            headers: new Headers(HEADER_REQ_API),
            query: JSON.stringify({
                usuario: idUsuario
            })                
        }
        return api(URL_API, resourceImovelPorUsuario, requestInfo );
        
    }

    static buscarImoveis(acaoImovel, tipoImovel, localizacao, statusImovel){

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
                                area, quartos, banheiros, garagens, suites, likes, comments, views) {
            id += 1;
            return {id, nomeUsuario, perfilUsuario, urlFoto, 
                    localizacao, titulo, acao, valorImovel, 
                    valorIptu, valorCondominio, descricao, 
                    area, quartos, banheiros, garagens, suites, likes, comments, views} ;
            }

            const rows = [
            createData(1, 'Gisele Kremer', 'Corretor', '/img1.jpg',
                        'Boa Viagem, Niteroi - RJ', 'Luxo Place', 'Aluguel', '1320',
                        550, 1560, 'Excelente espaço e bem localizado',
                        210, 2, 2, 1, 1, 15, 12, 20),

            createData(2, 'Zirtaeb', 'Imobiliaria', '/img1.jpg',
                        'Centro, Niteroi - RJ', 'Flat Centro', 'Venda', '700',
                        211, 800, 'Localizado no centro da cidade',
                        80, 1, 0, 0, 0, 22, 12, 33)
            ];

            return new Promise(resolve => {
                resolve(rows)
            })
        }
        
    }

    static buscarImoveisPorChave(chave){

        console.log('chave informada: ' + chave);
        
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
                                area, quartos, banheiros, garagens, suites, likes, comments, views) {
            id += 1;
            return {id, nomeUsuario, perfilUsuario, urlFoto, 
                    localizacao, titulo, acao, valorImovel, 
                    valorIptu, valorCondominio, descricao, 
                    area, quartos, banheiros, garagens, suites, likes, comments, views} ;
            }

            const rows = [
            createData(1, 'Bram Stark', 'Corretor', '/img1.jpg',
                        'Boa Viagem, Niteroi - RJ', 'Luxo Place', 'Aluguel', '1320',
                        550, 1560, 'Excelente espaço e bem localizado',
                        210, 2, 2, 1, 1, 15, 12, 20),

            createData(2, 'Julio Borogocin', 'Imobiliaria', '/img1.jpg',
                        'Centro, Niteroi - RJ', 'Flat Centro', 'Venda', '700',
                        211, 800, 'Localizado no centro da cidade',
                        80, 1, 0, 0, 0, 22, 12, 33)
            ];

            return new Promise(resolve => {
                resolve(rows)
            })
        }
        
        
    }

    static listarOutrosImoveisPorUsuarioResumo(idUsuario){

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
            function createData(id, titulo, tipoImovel, urlFoto) {
                id += 1;
                return {id, titulo, tipoImovel, urlFoto};
            }

            const rows = [
                createData(1, 'Vintage Downtown', 'Prédio', '/img1.jpg'),
                createData(2, 'Casinha da Sogra', 'Casa de Vila', '/img1.jpg'),
                createData(3, 'Nova América', 'Edificio Comercial', '/img1.jpg'),
            ];

            return new Promise(resolve => {
                resolve(rows)
            })
        }
        
    }

}

export default ImovelService;
