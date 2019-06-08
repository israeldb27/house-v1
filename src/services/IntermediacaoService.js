import React, { Component } from 'react'
import { URL_API, MOCK, HEADER_REQ_API } from '../componentes/common/environment';
const resource = 'intermediacaos';

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

class IntermediacaoService extends Component {

    static cadastrarSolicitacaoIntermediacao(idUsuario, idImovel, obs){
        const requestInfo = {
            method: 'POST',                
            headers: new Headers(HEADER_REQ_API),
            body: JSON.stringify({
                usuarioSolicitante: idUsuario,
                imovel: idImovel,
                obs: obs,
                status: "S",
                statusLeitura: "N"                
            })
            // inserir o(s) parametro(s) aqui
        }
        return api(URL_API, resource, requestInfo );
    }


    static listarImoveisIntermediacaoSolRecebidas(idUsuario){
        let id = 0;
        function createData(id, nomeUsuario, perfilUsuario, urlFoto, 
                            localizacao, titulo, acao, valorImovel, 
                            valorIptu, valorCondominio, descricao, 
                            area, quartos, banheiros, garagens, suites, totalSolRecebidas) {
        id += 1;
        return {id, nomeUsuario, perfilUsuario, urlFoto, 
                localizacao, titulo, acao, valorImovel, 
                valorIptu, valorCondominio, descricao, 
                area, quartos, banheiros, garagens, suites, totalSolRecebidas} ;
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


    static listarImoveisIntermediacaoSolEnviadas(idUsuario){
        let id = 0;
        function createData(id, nomeUsuario, perfilUsuario, urlFoto, 
                            localizacao, titulo, acao, valorImovel, 
                            valorIptu, valorCondominio, descricao, 
                            area, quartos, banheiros, garagens, suites) {
        id += 1;
        return {id, nomeUsuario, perfilUsuario, urlFoto, 
                localizacao, titulo, acao, valorImovel, 
                valorIptu, valorCondominio, descricao, 
                area, quartos, banheiros, garagens, suites} ;
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
    

    static listarImoveisIntermediacaoFechadas(idUsuario){
        let id = 0;
        function createData(id, nomeUsuario, perfilUsuario, urlFoto, 
                            localizacao, titulo, acao, valorImovel, 
                            valorIptu, valorCondominio, descricao, 
                            area, quartos, banheiros, garagens, suites) {
        id += 1;
        return {id, nomeUsuario, perfilUsuario, urlFoto, 
                localizacao, titulo, acao, valorImovel, 
                valorIptu, valorCondominio, descricao, 
                area, quartos, banheiros, garagens, suites} ;
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

export default IntermediacaoService
