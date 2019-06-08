import React, { Component } from 'react'
import { URL_API, MOCK, HEADER_REQ_API } from '../componentes/common/environment';

const resource = 'imovels';

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

class ImovelService extends Component {

    static cadastrarImovel(idUsuario, imovel){
       console.log('Usuario informado: ' + idUsuario);
       console.log('Imovel - titulo: ' + imovel.titulo);
       console.log('Imovel - acao: ' + imovel.acao);
       console.log('Imovel - tipo: ' + imovel.tipo);
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
                createData(1, 'Rua Miguel de Frias, 45, Niteroi, RJ - Brasil', 'Luxo Palace Residence', 120000, 'Venda', 250, 100, 
                            'Excelente espaço, bem localizado e ambiente tranquilo', 90, 3, 2, 1, 1,
                            15, 23, 300, 'Arya Stark', 'Corretor' ) 
            ];

            return new Promise(resolve => {
                resolve(rows)
            })
        }

        
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

    static buscarMeusImoveis(idUsuario, acaoImovel, tipoImovel, localizacao, statusImovel){

        console.log('IdUsuario selecionado: ' + idUsuario);
        console.log('acao imovel selecionado: ' + acaoImovel);
        console.log('tipoImovel selecionado: ' + tipoImovel);
        console.log('localizacao selecionado: ' + localizacao);
        console.log('status selecionado: ' + statusImovel);   

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
