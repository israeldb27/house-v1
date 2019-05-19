import React, { Component } from 'react';
import israel from '../fotos/israel.jpg'

class UsuarioResumoDetalhes extends Component {

    constructor() {
        super()  
     
        this.state = {
           quantContatos: 0,
           quantSeguidores: 0 
        }
    } 

    componentDidMount(){
        this.setState({quantContatos: 120, quantSeguidores: 45})
    }

    render() {
        return (
            <div class="user_profile">
                <div class="user-pro-img">
                    <img src={israel} style={{ width: '170px', height: '170px' }} alt="" />
                    <a href="#" title=""><i class="fa fa-camera"></i></a>
                </div> 
                <div class="user_pro_status">
                    <ul class="flw-hr">
                        <li><a href="#" title="" class="flww"><i class="la la-plus"></i> Convidar</a></li>
                        <li><a href="#" title="" class="hre">Seguir</a></li>
                    </ul>
                    <ul class="flw-status">
                        <li>
                            <span>Contatos</span>
                            <b>{this.state.quantContatos}</b>
                        </li>
                        <li>
                            <span>Seguidores</span>
                            <b>{this.state.quantSeguidores}</b>
                        </li>
                    </ul>
                </div> {/*user_pro_status end */}

            </div> 
        );
    }
}

export default UsuarioResumoDetalhes;