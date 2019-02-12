import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import israel from '../../israel.jpg'

class ViewProfileMeusIMoveis extends Component {
    render() {
        return (
            <div className="user-data full-width">
                <div className="user-profile">
                    <div className="username-dt">
                        <div className="usr-pic">
                            <Link to="/usuarioSessaoDetalhes/10">
                                <img src={israel} alt="" style={{width: '100px', height:'100px'}}/>
                            </Link>
                        </div>
                    </div>{/*--username-dt end*/}
                    <div className="user-specs">
                        <h3>Israel Barreto</h3>
                        <span>Corretor</span>
                    </div>
                </div>{/*--user-profile end*/}
                <ul className="user-fw-status">
                    <li>
                        <h4>
                            <Link to="">
                                Seguindo
                                </Link>
                        </h4>
                        <span>34</span>
                    </li>
                    <li>
                        <h4>
                            <Link to="">
                                Seguidores
                                </Link>
                        </h4>
                        <span>300</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ViewProfileMeusIMoveis;