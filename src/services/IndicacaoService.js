import React, { Component } from 'react'

class IndicacaoService extends Component {

    static listarIndicacoesPorUsuarioResumo(idUsuario){
        let id = 0;
        function createData(id, titulo, tipoImovel, urlFoto) {
            id += 1;
            return {id, titulo, tipoImovel, urlFoto};
        }

        const rows = [
            createData(1, 'Barra Center', 'Edificio Comercial', '/img1.jpg'),
            createData(2, 'Espaço Cultural', 'Galpão', '/img1.jpg'),
            createData(3, 'Luxo Residence', 'Hotel', '/img1.jpg'),
        ];

        return new Promise(resolve => {
            resolve(rows);
        })
    }

    static listarImoveisIndicacoesRecebidas(idUsuario){
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

export default  IndicacaoService;