import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListaContatos extends Component {
    constructor(props) {
        super(props);

    }    

    render() {
        return (
            <div>
                <section className="companies-info">
                    <div className="container">                       

                        <div className="tab-feed st2">
                            <ul>
                                <li data-tab="info-dd">
                                    <a href="#" title="">
                                        <img src="images/ic2.png" alt="" />
                                
                                    </a>
                                </li>
                                <li data-tab="info-dd" className="active">
                                    <Link to="/listaContatosUsuario/10" title="">
                                        <img src="images/ic2.png" alt="" />
                                        <span>Contatos</span>
                                    </Link>
                                </li>
                                <li data-tab="feed-dd" >
                                    <Link to="/listarSeguidores/10" >
                                        <img src="images/ic1.png" alt="" />
                                        <span>Seguidores</span>
                                    </Link>
                                </li>
                            
                                <li data-tab="my-bids">
                                    <Link to="/listarSeguindo/10">
                                        <img src="images/ic5.png" alt="" />
                                        <span>Seguindo</span>
                                    </Link>
                                </li>                                            

                            </ul>
                        </div> {/* tab-feed end */}

                        <div className="companies-list">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="company_profile_info">
                                        <div className="company-up-info">
                                            <img src="http://via.placeholder.com/90x90" alt="" />
                                            <h3>Facebook Inc.</h3>
                                            <h4>Establish Feb, 2004</h4>
                                            <ul>
                                                <li><a href="#" title="" className="follow">Follow</a></li>
                                                <li><a href="#" title="" className="message-us"><i className="fa fa-envelope"></i></a></li>
                                            </ul>
                                        </div>
                                        <a href="#" title="" className="view-more-pro">View Profile</a>
                                    </div>{/*-company_profile_info end*/}
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="company_profile_info">
                                        <div className="company-up-info">
                                            <img src="http://via.placeholder.com/90x90" alt="" />
                                            <h3>Google Inc.</h3>
                                            <h4>Establish Feb, 2004</h4>
                                            <ul>
                                                <li><a href="#" title="" className="follow">Follow</a></li>
                                                <li><a href="#" title="" className="message-us"><i className="fa fa-envelope"></i></a></li>
                                            </ul>
                                        </div>
                                        <a href="#" title="" className="view-more-pro">View Profile</a>
                                    </div>{/*-company_profile_info end*/}
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="company_profile_info">
                                        <div className="company-up-info">
                                            <img src="http://via.placeholder.com/90x90" alt="" />
                                            <h3>Pinterest</h3>
                                            <h4>Establish Feb, 2004</h4>
                                            <ul>
                                                <li><a href="#" title="" className="follow">Follow</a></li>
                                                <li><a href="#" title="" className="message-us"><i className="fa fa-envelope"></i></a></li>
                                            </ul>
                                        </div>
                                        <a href="#" title="" className="view-more-pro">View Profile</a>
                                    </div>{/*-company_profile_info end*/}
                                </div>

                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="company_profile_info">
                                        <div className="company-up-info">
                                            <img src="http://via.placeholder.com/90x90" alt="" />
                                            <h3>Pinterest</h3>
                                            <h4>Establish Feb, 2004</h4>
                                            <ul>
                                                <li><a href="#" title="" className="follow">Follow</a></li>
                                                <li><a href="#" title="" className="message-us"><i className="fa fa-envelope"></i></a></li>
                                            </ul>
                                        </div>
                                        <a href="#" title="" className="view-more-pro">View Profile</a>
                                    </div>{/*-company_profile_info end*/}
                                </div>

                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="company_profile_info">
                                        <div className="company-up-info">
                                            <img src="http://via.placeholder.com/90x90" alt="" />
                                            <h3>Pinterest</h3>
                                            <h4>Establish Feb, 2004</h4>
                                            <ul>
                                                <li><a href="#" title="" className="follow">Follow</a></li>
                                                <li><a href="#" title="" className="message-us"><i className="fa fa-envelope"></i></a></li>
                                            </ul>
                                        </div>
                                        <a href="#" title="" className="view-more-pro">View Profile</a>
                                    </div>{/*-company_profile_info end*/}
                                </div>
                               
                            </div>
                        </div>{/*-companies-list end*/}
                        <div className="process-comm">
                            <div className="spinner">
                                <div className="bounce1"></div>
                                <div className="bounce2"></div>
                                <div className="bounce3"></div>
                            </div>
                        </div>{/*-process-comm end*/}
                    </div>
                </section>{/*-companies-info end*/}

            </div>
        );
    }
}



export default ListaContatos;