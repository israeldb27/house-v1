import React, { Component } from 'react'




class UsuarioInfoGerais extends Component {
   
    constructor(props) {
        super(props)
      
        this.state = {
           descricaoUsuario: '',
           listaUltimasUsuario: [],
           listaTrabalhosRealizados: [],
           listaRecomendacoes: []        
        }
    }

    componentDidMount(){
        this.setState({descricaoUsuario: '10 anos de experiência no mercado imobiliário, muita confiabilidade e muitos clientes satisfeitos com o meu trabalho'});
        this.carregaListaUltimasUsuario();
        this.carregaListaTrabalhosRealizados();
        this.carregarListaRecomendacoes();      
    }

    carregaListaUltimasUsuario(){
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

        for (let i = 0; i < rows.length; i++){
            let list = this.state.listaUltimasUsuario;
            list.push(rows[i]);
            this.setState({listaUltimasUsuario: list});            
        }
    }

    carregaListaTrabalhosRealizados(){
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

        for (let i = 0; i < rows.length; i++){
            let list = this.state.listaTrabalhosRealizados;
            list.push(rows[i]);
            this.setState({listaTrabalhosRealizados: list});            
        }
    }

    carregarListaRecomendacoes() {
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

        for (let i = 0; i < rows.length; i++){
            let list = this.state.listaRecomendacoes;
            list.push(rows[i]);
            this.setState({listaRecomendacoes: list});            
        }
    }

  render() {
    return (
        <div className="product-feed-tab current" id="info-dd">
            <div className="user-profile-ov">
                <h3><a href="#" title="" className="overview-open">Descrição  </a> <a href="#" title="" className="overview-open"> </a></h3>
                <p> {this.state.descricaoUsuario} </p>
            </div>       

            <div className="user-profile-ov">
                <h3><a href="#" title="" className="ed-box-open">Últimas do Usuário</a> </h3>

                <div className="suggestions-list">

                    {
                        this.state.listaUltimasUsuario.map(ultima => {
                            return (
                                <div className="suggestion-usd">
                                    <img src="http://via.placeholder.com/35x35" alt="" />
                                    <div className="sgt-text">
                                        <h4>{ultima.desc}</h4>
                                        <span>{ultima.data}</span>
                                    </div>                  
                                </div>
                            );
                        })
                    }

                </div>
            </div> 

            {/* Esta aba sera usada para informar quantos e quais imoveis o usuario corretor ou imobiliaria vendeu ou conseguiu alugar por exemplo */}
           <div className="user-profile-ov">
                <h3><a href="#" title="" className="ed-box-open">Trabalhos realizados</a> </h3>

                <div className="suggestions-list">
                    {
                        this.state.listaTrabalhosRealizados.map(trabalho => {
                            return (
                                <div className="suggestion-usd">
                                    <img src="http://via.placeholder.com/35x35" alt="" />
                                    <div className="sgt-text">
                                        <h4>{trabalho.tituloImovel}</h4>
                                        <span>{trabalho.acaoImovel}</span>
                                    </div>                  
                                </div>  
                            );
                        })
                    }                    
                </div>
            </div> 

            <div className="user-profile-ov">
                <h3><a href="#" title="" className="ed-box-open">Recomendações</a> </h3>

                <div className="suggestions-list">
                    {
                        this.state.listaRecomendacoes.map( recomendacao => {
                            return (
                                <div className="suggestion-usd">
                                    <img src="http://via.placeholder.com/35x35" alt="" />
                                    <div className="sgt-text">
                                        <h4>{recomendacao.usuario}</h4>
                                        <span>{recomendacao.perfil}</span>
                                    </div>
                                    <span>
                                        <i className="la la-plus"></i>
                                        <p>{recomendacao.descricao} </p>
                                    </span>
                                </div>  
                            );
                        })
                    }
                </div>
            </div> {/*user-profile-ov end */}

            <div className="user-profile-ov">
                <h3><a href="#" title="" className="skills-open">Skills</a> <a href="#" title="" className="skills-open"><i className="fa fa-pencil"></i></a> <a href="#"><i className="fa fa-plus-square"></i></a></h3>
                <ul>
                    <li><a href="#" title="">HTML</a></li>
                    <li><a href="#" title="">PHP</a></li>
                    <li><a href="#" title="">CSS</a></li>
                    <li><a href="#" title="">Javascript</a></li>
                    <li><a href="#" title="">Wordpress</a></li>
                    <li><a href="#" title="">Photoshop</a></li>
                    <li><a href="#" title="">Illustrator</a></li>
                    <li><a href="#" title="">Corel Draw</a></li>
                </ul>
            </div> {/*user-profile-ov end */}
        </div> 

    )
  }
}

export default UsuarioInfoGerais
