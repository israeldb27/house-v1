import React, { Component } from 'react';
import ViewProfileMeusIMoveis from '../meusImoveis/ViewProfileMeusIMoveis';
import { Link } from 'react-router-dom';


class ImovelAdicionarPasso4  extends Component {

    constructor() {
        super() 
    
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

                                    </div>{/*--main-left-sidebar end*/}
                                </div>

                                <div className="col-lg-6 col-md-8 no-pd">
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-acc" role="tabpanel" aria-labelledby="nav-acc-tab">
                                            <div className="acc-setting">
                                                <h3>Novo Imóvel Passo 3</h3>
                                                <form>
                                                    <div className="cp-field">
                                                        <h5>Galeria de Fotos </h5>
                                                        <div className="cpp-fiel">
                                                            <input type="text" name="old-password" placeholder="Selecione um arquivo" />
                                                        </div>
                                                    </div>

                                                    <div className="cp-field">
                                                        

                                                    </div>
                                                                                                              

                                                    <div className="save-stngs pd2">
                                                        <ul>                                                           
                                                            <li><button type="submit">Avançar Cadastro</button></li>
                                                            <li><Link to="/imovelAdicionarPasso3" className="button" >Retornar Cadastro</Link></li>
                                                            <li><Link to="/imovelAdicionarPasso4" className="button" >Finalizar Cadastro</Link></li>
                                                        </ul>
                                                    </div>{/*save-stngs end*/}
                                                    
                                                </form>
                                            </div>{/*acc-setting end*/}
                                        </div>
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

export default ImovelAdicionarPasso4;