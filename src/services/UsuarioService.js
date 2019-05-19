import React, { Component } from 'react'

class UsuarioService extends Component {

    static buscarUsuario(localizacao, perfil) {
        let id = 0;
        function createData(id, nomeUsuario, perfilUsuario, urlFoto) {
        id += 1;
        return {id, nomeUsuario, perfilUsuario, urlFoto} ;
        }

        const rows = [
            createData(1, 'Niteroi Imoveis', 'Imobiliaria', '/img1.jpg' ),
            createData(2, 'Zirtaeb', 'Imobiliaria', '/img1.jpg'),
            createData(3, 'Pamela Alves', 'Corretor', '/img1.jpg'),
            createData(4, 'Israel Barreto', 'Normal', '/img1.jpg'),
            createData(5, 'Marli Barreto', 'Normal', '/img1.jpg')
        ];

        console.log('localizacao selecionado: ' + localizacao);
        console.log('perfil selecionado: ' + perfil);

        return new Promise(resolve => {            
            resolve(rows);
        })       
    }

    static buscarUsuarioPorChave(chave) {
        let id = 0;
        function createData(id, nomeUsuario, perfilUsuario, urlFoto) {
        id += 1;
        return {id, nomeUsuario, perfilUsuario, urlFoto} ;
        }

        const rows = [   
            createData(4, 'Israel Barreto', 'Normal', '/img1.jpg'),
            createData(5, 'Marli Barreto', 'Normal', '/img1.jpg')
        ];

        console.log('chave informada: ' + chave);        

        return new Promise(resolve => {            
            resolve(rows);
        })       
    }

    static login(email, password){

        const usuario = ['Israel', 'Normal'];
        console.log('email: ' + email);
        console.log('password: ' + password);

        return new Promise(resolve => {                        
            resolve(usuario);
        })  
    }

    static listarUltimasUsuario(idUsuario){
        let id = 0;
        function createData(id, desc, data) {
            id += 1;
            return {id, desc, data} ;
        }

        const rows = [
            createData(1, 'Atualizou sua informações pessoais do usuário', '25/11/2018' ),
            createData(2, 'Cadastrou novo imóvel', '10/05/2017'),
            createData(3, 'Estabeleceu nova conexão com', '02/03/2018'),
            createData(4, 'Registrou-se na plataforma em', '01/09/2016')  
        ];

        return new Promise(resolve => {            
            resolve(rows);
        })  
    }

    static listaTrabalhosRealizadosPorUsuario(idUsuario){
        let id = 0;
        function createData(id, tituloImovel, acaoImovel) {
            id += 1;
            return {id, tituloImovel, acaoImovel} ;
        }

        const rows = [
            createData(1, 'Copacabana Palace', 'Venda' ),
            createData(2, 'Luxo Place', 'Aluguel'),
            createData(3, 'Hotel Sal e Sol', 'Aluguel'),
            createData(4, 'Pousada Forte Praia', 'Temporada')  
        ];

        return new Promise(resolve => {            
            resolve(rows);
        }) 

    }


}

export default UsuarioService;
