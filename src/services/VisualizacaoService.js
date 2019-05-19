import React, { Component } from 'react'

export class VisualizacaoService extends Component {
    
    static listarImoveisVisualizadosResumoPorUsuario(idUsuario){
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

export default  VisualizacaoService;