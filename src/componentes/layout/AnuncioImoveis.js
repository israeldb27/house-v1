import React, { Component } from 'react';
import casa from '../fotos/casa.jpg';

let id = 0;
function createData(id, titulo, tipoImovel, valorImovel, localizacao, acao, urlFoto) {
  id += 1;
  return {id, titulo, tipoImovel, valorImovel, localizacao, acao, urlFoto};
}

const row =  createData(1, 'Flat Boa Viagem', 'Flat', 1250000, 'Boa Viagem, Niteroi, RJ', 'Venda', '/img1.jpg');

class AnuncioImoveis extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
          imovel  : '' 
        }
    }

    componentDidMount(){
        this.setState({imovel: row});
    }


    render() {
        return (
            <div className="widget widget-about">
                <div className="sd-title">
                        <h3>Anuncios</h3>
                </div>
                <img src={casa} alt="" style={{width: '100%', height: '180px'}}/>
                <ul>
                    <li><a href="#" title="">
                            {
                                this.state.imovel.titulo
                            }
                        </a>
                    </li>                                            
                </ul>
                <br />
                <h3>${
                        this.state.imovel.valorImovel
                    }
                </h3>
                <span> {  this.state.imovel.tipoImovel } </span>
                <h3 style={{fontSize: '12px'}}>{  this.state.imovel.localizacao }  </h3>            
            </div>
            
        );
    }
}

export default AnuncioImoveis;