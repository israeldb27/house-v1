import React, { Component } from 'react';
import AnuncioImoveis from '../../layout/AnuncioImoveis';
import AnuncioImobiliaria from '../../layout/AnuncioImobiliaria';
import ViewProfileMeusIMoveis from './ViewProfileMeusIMoveis';
import ItemMeuImovel from './ItemMeuImovel';
import FiltroMeusImoveis from './FiltroMeusImoveis';

class ListaMeusImoveis extends Component {
    constructor(props) {
        super(props);

    }  

    render() {
        return (
            <main>
                <div className="main-section">
                    <div className="container">
                        <div className="main-section-data">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                                    <div className="main-left-sidebar no-margin">                                      

                                        <ViewProfileMeusIMoveis />   

                                        <FiltroMeusImoveis />                                            

                                    </div>{/*--main-left-sidebar end*/}
                                </div>

                                <div className="col-lg-6 col-md-8 no-pd">
                                    <ItemMeuImovel />
                                </div> 

                                <div className="col-lg-3 pd-right-none no-pd">
                                    <div className="right-sidebar"> 
                                       

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}


export default ListaMeusImoveis;