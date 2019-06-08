import React, { Component } from 'react';
import israel from '../fotos/israel.jpg'
import ContatoService from '../../services/ContatoService';
import SeguidoresService from '../../services/SeguidoresService';

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

    enviarConvite(event){
        event.preventDefault();
        console.log('chamou enviarConvite');
        let idUsuario = '5ce9cc2e45d2bc6e04bf342e';
        let idUsuarioSolicitante = '5ce95bc56b4e216264be787f';
        ContatoService.enviarConvite(idUsuario, idUsuarioSolicitante).then(response => {
            console.log('Response - enviarConvite: ' + response);
        })
    }

    iniciarSeguirUsuario(event){
        event.preventDefault();
        console.log('chamou iniciarSeguirUsuario');
        let idUsuario = '5ce9cc2e45d2bc6e04bf342e';
        let idUsuarioSolicitante = '5ce95bc56b4e216264be787f';
        SeguidoresService.iniciarSeguirUsuario(idUsuario, idUsuarioSolicitante).then(response => {
            console.log('Response - iniciarSeguirUsuario: ' + response);
        })
    }

    render() {
        return (
            <div className="user_profile">
                <div className="user-pro-img">
                    <img src={israel} style={{ width: '170px', height: '170px' }} alt="" />
                    <a href="#" title=""><i className="fa fa-camera"></i></a>
                </div> 
                <div className="user_pro_status">
                    <ul className="flw-hr">
                        <li><a href="#" title="" className="flww" onClick={this.enviarConvite.bind(this)} > <i className="la la-plus"></i> Convidar</a></li>
                        <li><a href="#" title="" className="hre" onClick={this.iniciarSeguirUsuario.bind(this)}  > Seguir</a></li>
                    </ul>
                    <ul className="flw-status">
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