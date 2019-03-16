import React, { Component } from 'react';
import israel from '../fotos/israel.jpg'

class UsuarioResumoDetalhes extends Component {
    render() {
        return (
            <div class="user_profile">
                <div class="user-pro-img">
                    <img src={israel} style={{ width: '170px', height: '170px' }} alt="" />
                    <a href="#" title=""><i class="fa fa-camera"></i></a>
                </div> {/*user-pro-img end */}
                <div class="user_pro_status">
                    <ul class="flw-hr">
                        <li><a href="#" title="" class="flww"><i class="la la-plus"></i> Convidar</a></li>
                        <li><a href="#" title="" class="hre">Seguir</a></li>
                    </ul>
                    <ul class="flw-status">
                        <li>
                            <span>Following</span>
                            <b>34</b>
                        </li>
                        <li>
                            <span>Followers</span>
                            <b>155</b>
                        </li>
                    </ul>
                </div> {/*user_pro_status end */}

            </div> 
        );
    }
}

export default UsuarioResumoDetalhes;