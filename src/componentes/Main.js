import React, { Component } from 'react';
import ViewProfile from './layout/ViewProfile';
import Sugestoes from './layout/Sugestoes';
import Timeline from './timeline/Timeline';
import Anuncios from './layout/Anuncios';
import ImoveisVisualizadosResumo from './layout/ImoveisVisualizadosResumo';
import ImoveisFavoritosResumo from './layout/ImoveisFavoritosResumo';
import AnuncioImoveis from './layout/AnuncioImoveis';
import AnuncioImobiliaria from './layout/AnuncioImobiliaria';
import ImovelIndicacoesResumo from './layout/ImovelIndicacoesResumo';
import ImoveisOfertasResumo from './layout/ImoveisOfertasResumo';

class Main extends Component {
    render() {
        return (
         
            <main>
                <div className="main-section">
                    <div className="container">
                        <div className="main-section-data">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                                    <div className="main-left-sidebar no-margin">                                      

                                        <ViewProfile />

                                        <Sugestoes />              

                                    </div>{/*--main-left-sidebar end*/}
                                </div>

                                <div className="col-lg-6 col-md-8 no-pd">
                                    <Timeline />
                                </div> 

                                <div className="col-lg-3 pd-right-none no-pd">
                                    <div className="right-sidebar"> 

                                       <AnuncioImobiliaria />

                                       <AnuncioImoveis /> 

                                       <ImoveisVisualizadosResumo />  

                                       <ImoveisOfertasResumo />                                      
                                        
                                       <ImovelIndicacoesResumo />

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

export default Main;