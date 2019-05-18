import React, { Component } from 'react';
import ViewProfileMeusIMoveis from '../meusImoveis/ViewProfileMeusIMoveis';
import { Link } from 'react-router-dom';
import Header from '../../layout/Header';

class ImovelEditarPasso2 extends Component {

    constructor() {
        super()  
     
    }

    render() {
        return (
            <div>
                <Header />
                <br />
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
                                                    <h3>Editar Imóvel Passo 2</h3>
                                                    <form>
                                                        <div className="cp-field">
                                                            <h5>Área m²</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" name="old-password" placeholder="Área do imóvel  (se houver)" />
                                                            </div>
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Quarto</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" name="old-password" placeholder="Quantidade de quartos  (se houver) " />
                                                            </div>
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Vaga</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" name="old-password" placeholder="Quantidade de vagas de garagem  (se houver)" />
                                                            </div>
                                                        </div>

                                                        <div className="cp-field">
                                                            <h5>Suíte</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" name="old-password" placeholder="Quantidade de suites  (se houver)" />
                                                            </div>
                                                        </div>

                                                        <div className="save-stngs pd2">
                                                            <ul>
                                                                <li><button type="submit">Avançar Cadastro</button></li>
                                                                <li><Link to="/imovelEditar/10" className="button" >Retornar Cadastro</Link></li>
                                                                <li><Link to="/imovelEditarPasso3/10" className="button" >Avançar Cadastro</Link></li>
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
            </div>
        );
    }
}

export default ImovelEditarPasso2;