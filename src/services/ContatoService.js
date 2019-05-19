import React, { Component } from 'react'

class ContatoService extends Component {

    static listaResumoContatosPorUsuario(idUsuario){
        let id = 0;
        function createData(id, nome, perfil, urlFoto) {
            id += 1;
            return {id, nome, perfil, urlFoto};
        }

        const rows = [
            createData(1, 'Marli Barreto', 'Corretor', '/img1.jpg'),
            createData(2, 'Patricia Barreto', 'Corretor', '/img1.jpg'),
            createData(3, 'Borgocirin', 'Imobiliária', '/img1.jpg'),
        ];

        return new Promise(resolve => {            
            resolve(rows);
        })    
    }

    static listaSugestoesContatos(idUsuario){
        let id = 0;
        function createData(id, nome, perfil, urlFoto) {
            id += 1;
            return {id, nome, perfil, urlFoto};
        }

        const rows = [
            createData(1, 'Antonio Barreto', 'Corretor', '/img1.jpg'),
            createData(2, 'Pedro Barreto', 'Corretor', '/img1.jpg'),
            createData(3, 'Borgocirin', 'Imobiliária', '/img1.jpg'),
        ];

        return new Promise(resolve => {            
            resolve(rows);
        })    
    }

    static listarContatosPorUsuario(idUsuario){
        let id = 0;
        function createData(id, nomeUsuario, perfilUsuario, urlFoto) {
            id += 1;
            return {id, nomeUsuario, perfilUsuario, urlFoto} ;
        }

        const rows = [
            createData(1, 'Lagoa Imoveis', 'Imobiliaria', '/img1.jpg' ),
            createData(2, 'Zirtaeb', 'Imobiliaria', '/img1.jpg'),
            createData(3, 'Pamela Alves', 'Corretor', '/img1.jpg'),
            createData(4, 'Israel Barreto', 'Normal', '/img1.jpg'),
            createData(5, 'Marli Barreto', 'Normal', '/img1.jpg')
        ];

        return new Promise(resolve => {            
            resolve(rows);
        }) 
    }

    static listarContatosPorUsuarioPorChave(idUsuario, chave){
        let id = 0;
        function createData(id, nomeUsuario, perfilUsuario, urlFoto) {
            id += 1;
            return {id, nomeUsuario, perfilUsuario, urlFoto} ;
        }

        const rows = [            
            createData(4, 'Israel Barreto', 'Normal', '/img1.jpg'),
            createData(5, 'Marli Barreto', 'Normal', '/img1.jpg')
        ];

        return new Promise(resolve => {            
            resolve(rows);
        }) 
    }

    static listarConvitesPorUsuario(idUsuario){
        let id = 0;
        function createData(id, nomeUsuario, perfilUsuario, urlFoto) {
            id += 1;
            return {id, nomeUsuario, perfilUsuario, urlFoto} ;
        }

        const rows = [
            createData(1, 'Lagoa Imoveis', 'Imobiliaria', '/img1.jpg' ),
            createData(2, 'Zirtaeb', 'Imobiliaria', '/img1.jpg'),
            createData(3, 'Pamela Alves', 'Corretor', '/img1.jpg'),
            createData(4, 'Israel Barreto', 'Normal', '/img1.jpg'),
            createData(5, 'Marli Barreto', 'Normal', '/img1.jpg')
        ];

        return new Promise(resolve => {            
            resolve(rows);
        }) 
    }

    
}

export default ContatoService;
