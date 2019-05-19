import React, { Component } from 'react'

class RecomendacaoService extends Component {
  
    static listarRecomendacoesPorUsuario(idUsuario){

        let id = 0;
        function createData(id, usuario, perfil, descricao) {
            id += 1;
            return {id, usuario, perfil, descricao} ;
        }

        const rows = [
            createData(1, 'Jessica Palmer', 'Normal', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra.' ),
            createData(2, 'Jon Snow', 'Corretor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra.'),
            createData(3, 'Imobiliaria Luz', 'imobiliaria', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra.'),
            createData(4, 'Arya Stark', 'Normal', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra.')  
        ];

        return new Promise(resolve => {            
            resolve(rows);
        })  
    }
}

export default  RecomendacaoService;