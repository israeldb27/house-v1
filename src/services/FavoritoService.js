import React, { Component } from 'react'

class FavoritoService extends Component {

    static listarFavoritosPorUsuario(idUsuario){
        let id = 0;
        function createData(id, localizacao, titulo, valorImovel, acao, valorIptu, valorCondominio, 
                            descricao, area, quantQuartos, quantBanheiros, quantVagas, quantSuites,
                            quantLikes, quantComments, quantViews, nomeUsuario, perfilUsuario) {
            id += 1;
            return {id, localizacao, titulo, valorImovel, acao, valorIptu, valorCondominio, 
                descricao, area, quantQuartos, quantBanheiros, quantVagas, quantSuites,
                quantLikes, quantComments, quantViews, nomeUsuario, perfilUsuario} ;
        }

        const rows = [
            createData(1, 'Rua Miguel de Frias, 112, Niteroi, RJ - Brasil', 'Luxo Palace Residence Start', 120000, 'Venda', 250, 100, 
                        'Excelente espaço, bem localizado e ambiente tranquilo', 90, 3, 2, 1, 1,
                        15, 23, 300, 'Bram Stark', 'Corretor' )  
          
        ];

        return new Promise(resolve => {            
            resolve(rows);
        })  
    }
}

export default FavoritoService;