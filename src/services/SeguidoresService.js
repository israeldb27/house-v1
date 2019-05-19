import React, { Component } from 'react'

class SeguidoresService extends Component {

    static listarSeguidoresPorUsuario(idUsuario){
        let id = 0;
        function createData(id, nomeUsuario, perfilUsuario, urlFoto) {
            id += 1;
            return {id, nomeUsuario, perfilUsuario, urlFoto} ;
        }

        const rows = [
            createData(1, 'Niteroi Imobiliaria INc', 'Imobiliaria', '/img1.jpg' ),
            createData(2, 'Self Imoveis', 'Imobiliaria', '/img1.jpg'),
            createData(3, 'Jose Aldo', 'Corretor', '/img1.jpg'),
            createData(4, 'Antonio Carlos', 'Normal', '/img1.jpg'),
            createData(5, 'Patricia Barreto', 'Normal', '/img1.jpg')
        ];

        return new Promise(resolve => {            
            resolve(rows);
        }) 
    }

    static listarSeguidoresPorUsuarioPorChave(chave, idUsuario){

        let id = 0;
        function createData(id, nomeUsuario, perfilUsuario, urlFoto) {
            id += 1;
            return {id, nomeUsuario, perfilUsuario, urlFoto} ;
        }

        const rows = [            
            createData(4, 'Antonio Carlos', 'Normal', '/img1.jpg'),
            createData(5, 'Patricia Barreto', 'Normal', '/img1.jpg')
        ];

        return new Promise(resolve => {            
            resolve(rows);
        }) 
    }

    static listarSeguindoPorUsuario(idUsuario){
        let id = 0;
        function createData(id, nomeUsuario, perfilUsuario, urlFoto) {
            id += 1;
            return {id, nomeUsuario, perfilUsuario, urlFoto} ;
        }

        const rows = [
            createData(1, 'Niteroi Imobiliaria INc', 'Imobiliaria', '/img1.jpg' ),
            createData(2, 'Self Imoveis', 'Imobiliaria', '/img1.jpg'),
            createData(3, 'Jose Aldo', 'Corretor', '/img1.jpg'),
            createData(4, 'Antonio Carlos', 'Normal', '/img1.jpg'),
            createData(5, 'Patricia Barreto', 'Normal', '/img1.jpg')
        ];

        return new Promise(resolve => {            
            resolve(rows);
        }) 
    }

    static listarSeguindoPorUsuarioPorChave(chave, idUsuario){

        let id = 0;
        function createData(id, nomeUsuario, perfilUsuario, urlFoto) {
            id += 1;
            return {id, nomeUsuario, perfilUsuario, urlFoto} ;
        }

        const rows = [            
            createData(4, 'Antonio Carlos', 'Normal', '/img1.jpg'),
            createData(5, 'Patricia Barreto', 'Normal', '/img1.jpg')
        ];

        return new Promise(resolve => {            
            resolve(rows);
        }) 
    }
}

export default  SeguidoresService;
