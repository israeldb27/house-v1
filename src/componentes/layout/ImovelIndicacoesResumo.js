import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mansao from '../fotos/mansao.jpg';

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

class ImovelIndicacoesResumo extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
          listaIndicacoesImoveis : [] 
  
        }
      }

    componentDidMount(){
        for (let i = 0; i < rows.length; i++){    
            let list = this.state.listaIndicacoesImoveis;
            list.push(rows[i]);
            this.setState({listaIndicacoesImoveis: list});
        }
    }


    render() {
        return (
            <div className="widget widget-jobs">
                <div className="sd-title">
                    <h3>Indicações</h3>
                    <i className="la la-ellipsis-v"></i>
                </div>
                <div className="suggestions-list">
                    {
                        this.state.listaIndicacoesImoveis.map(imovel => {
                            return (
                                <div className="suggestion-usd">
                                     <Link to={{ pathname: `/visualizarImovelDetalhes/${imovel.id}`}}>
                                        <img src={mansao} alt="" style={{ width: '60px', height: '60px;' }} />
                                    </Link>  
                                    
                                    <div className="sgt-text">
                                        <Link to={{ pathname: `/visualizarImovelDetalhes/${imovel.id}`}}>
                                            <h4>{imovel.titulo}</h4>
                                        </Link> 
                                        
                                        <span>{imovel.tipoImovel}</span>
                                    </div>
                                    <span><i className="la la-plus"></i></span>
                                </div>
                            )
                        })
                    }

                    <div className="view-more">
                        <Link to="/indicacoesRecebidas/10">
                            Ver Mais
                            </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImovelIndicacoesResumo;