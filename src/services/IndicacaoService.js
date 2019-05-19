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
}

export default  IndicacaoService;