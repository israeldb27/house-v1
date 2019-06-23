import React, { Component } from 'react'
import { URL_API, MOCK, HEADER_REQ_API } from '../componentes/common/environment';

const resource = 'usuarios/';
const resourceUltAtualizacoesUsuario = 'ultimasatualizacoesusuarios'
const resourceTrabalhosRealizados = 'trabalhorealizados';
const resourceAuth ='usuarios/authenticate'


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

class UsuarioService extends Component {

    constructor(props) {
        super(props)
    
        this.state = {             
        }
    }    

    static buscarUsuarioPorId(id) {
        const requestInfo = {
            method: 'GET',                
            headers: new Headers(HEADER_REQ_API)           
        }  
        return api(URL_API, resource + id, requestInfo );  
    }

    static login(email, password){

        if (!MOCK){
            const requestInfo = {
                method: 'POST',                
                headers: new Headers(HEADER_REQ_API),
                body: JSON.stringify({
                    email: email,
                    password: password    
                })
            }  
            return api(URL_API, resourceAuth, requestInfo );
        }
        else {
            const usuario = ['Israel', 'Normal'];
            console.log('email: ' + email);
            console.log('password: ' + password);

            return new Promise(resolve => {                        
                resolve(usuario);
            })  
        }        
    }

    static cadastrarUsuario(usuario){
        const requestInfo = {
            method: 'POST',                
            headers: new Headers(HEADER_REQ_API),
            body: JSON.stringify({
                nome: usuario.nome,
                email: usuario.email,
                password: usuario.password,
                perfil: usuario.perfil,
                cpf: usuario.cpf,
                cnpj: usuario.cnpj,
                creci: usuario.creci,
                localizacao: usuario.localizacao,
                descricao: usuario.descricao
            })
        }  
        return api(URL_API, resource, requestInfo );    
    }
    
    static buscarUsuario(localizacao, perfil) {

        if (!MOCK) {
            const requestInfo = {
                method: 'GET',                
                headers: new Headers(HEADER_REQ_API)
            }  
            return api(URL_API, resource, requestInfo );         
        }
        else {
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
        
    }

    static buscarUsuarioPorChave(chave) {

        if (!MOCK) {
            const requestInfo = {
                method: 'GET',                
                headers: new Headers(HEADER_REQ_API)
            }  
            return api(URL_API, resource, requestInfo );
        }
        else {
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
    }
  

    static listarUltimasUsuario(idUsuario){

        if (!MOCK){
            const requestInfo = {
                method: 'GET',                
                headers: new Headers(HEADER_REQ_API)
                // passar os parametros ainda aqui
            }  
            return api(URL_API, resourceUltAtualizacoesUsuario, requestInfo );
        }
        else {
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
    }

    static listaTrabalhosRealizadosPorUsuario(idUsuario){
        
        if (!MOCK){
            const requestInfo = {
                method: 'GET',                
                headers: new Headers(HEADER_REQ_API)
                // passar os parametros ainda aqui
            }  
            return api(URL_API, resourceTrabalhosRealizados, requestInfo );
        }
        else {
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


}

export default UsuarioService;
