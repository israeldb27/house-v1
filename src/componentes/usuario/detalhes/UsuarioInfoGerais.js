import React, { Component } from 'react'

class UsuarioInfoGerais extends Component {
  render() {
    return (
        <div className="product-feed-tab current" id="info-dd">
            <div className="user-profile-ov">
                <h3><a href="#" title="" className="overview-open">Descrição</a> <a href="#" title="" className="overview-open"><i className="fa fa-pencil"></i></a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.</p>
            </div> {/*user-profile-ov end */}
            <div className="user-profile-ov">
                <h3><a href="#" title="" className="lct-box-open">Localização</a> </h3>
                <h4>Brasil</h4>
                <p>Niteroi, RJ </p>
            </div> {/*user-profile-ov end */}
            <div className="user-profile-ov st2">
                <h3><a href="#" title="" className="exp-bx-open">Informações Gerais </a></h3>
                <h4>Cadastrado desde <a href="#" title=""></a></h4>
                <p> 11/11/2018 </p>
               
            </div> {/*user-profile-ov end */}

            <div className="user-profile-ov st2">
                <h3><a href="#" title="" className="exp-bx-open">Últimas do Usuário </a></h3>
                <h4>Atualizou sua informações pessoais em: </h4>
                <p>25/11/2018</p>

                <h4>Cadastrou novo imóvel: </h4>
                <p ><a href="#" title="">Pousada Sal e Sol </a></p>

                <h4>Estabeleceu nova conexão com: </h4>
                <p ><a href="#" title="">Peterson Krause </a></p>
                
                <h4>Registrou-se na plataforma em:  <a href="#" title=""><i className="fa fa-pencil"></i></a></h4>
                <p>11/11/2018 </p>
                
            </div> {/*user-profile-ov end */}


            <div className="user-profile-ov">
                <h3><a href="#" title="" className="ed-box-open">Recomendações</a> </h3>

                <div className="suggestions-list">
                    <div className="suggestion-usd">
                        <img src="http://via.placeholder.com/35x35" alt="" />
                        <div className="sgt-text">
                            <h4>Jessica William</h4>
                            <span>Graphic Designer</span>
                        </div>
                        <span>
                            <i className="la la-plus"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
                        </span>
                    </div>


                    <div className="suggestion-usd">
                        <img src="http://via.placeholder.com/35x35" alt="" />
                        <div className="sgt-text">
                            <h4>Jenifer Jones</h4>
                            <span>Corretor</span>
                        </div>
                        <span>
                            <i className="la la-plus"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
                        </span>
                    </div>

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
