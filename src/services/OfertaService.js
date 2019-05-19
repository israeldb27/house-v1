import React, { Component } from 'react'

class OfertaService extends Component {
    
    static listarOfertasPorUsuarioResumo(idUsuario){
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

export default OfertaService;