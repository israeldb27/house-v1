import React, { Component } from 'react';
import israel from '../fotos/israel.jpg'

class ImovelUsuarioResponsavel extends Component {
    render() {
        return (
            <div className="user_profile">
                <div className="user-pro-img">
                    <img src={israel} style={{ width: '170px', height: '170px' }} alt="" />
                    <a href="#" title=""><i className="fa fa-camera"></i></a>
                </div> {/*user-pro-img end */}
                <div className="user_pro_status">
                    <ul className="flw-hr">
                        <li><a href="#" title="" className="flww"><i className="la la-plus"></i> Seguir</a></li>
                        <li><a href="#" title="" className="hre">Convite</a></li>                        
                    </ul>
                    <ul className="flw-status">
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

export default ImovelUsuarioResponsavel;