import React, { Component } from 'react'
import { URL_API, MOCK, HEADER_REQ_API } from '../componentes/common/environment';

const resource = 'visualizacaos';

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

export class VisualizacaoService extends Component {
    
    static listarImoveisVisualizadosResumoPorUsuario(idUsuario){

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
                createData(1, 'Barra Palace', 'Condominio', '/img1.jpg'),
                createData(2, 'Plaza Center', 'Edificio Comercial', '/img1.jpg'),
                createData(3, 'Condominio da Paz', 'Condominio', '/img1.jpg'),
            ];

            return new Promise(resolve => {
                resolve(rows);
            })
        }
    }

    static listaImoveisVisualizacoesRecebidasPorUsuario(idUsuario){

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
                                area, quartos, banheiros, garagens, suites, totalVisualizacoes) {
            id += 1;
            return {id, nomeUsuario, perfilUsuario, urlFoto, 
                    localizacao, titulo, acao, valorImovel, 
                    valorIptu, valorCondominio, descricao, 
                    area, quartos, banheiros, garagens, suites, totalVisualizacoes} ;
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
}

export default  VisualizacaoService;