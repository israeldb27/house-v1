import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './componentes/layout/Header';

import { BrowserRouter, Link, Route, Switch, Router, Redirect } from 'react-router-dom';
import history from './componentes/History';
import UsuarioSessaoDetalhes from './componentes/usuario/UsuarioSessaoDetalhes';
import ImovelDetalhes from './componentes/imovel/ImovelDetalhes';
import ListaContatos from './componentes/contato/ListaContatos';
import ImovelBuscar from './componentes/imovel/buscar/ImovelBuscar';
import ListaSeguidores from './componentes/contato/ListaSeguidores';
import ListaSeguindo from './componentes/contato/ListaSeguindo';
import Mensagens from './componentes/mensagem/Mensagens';
import UsuarioConta from './componentes/usuario/conta/UsuarioConta';
import UsuarioBuscar from './componentes/usuario/buscar/UsuarioBuscar';
import UsuarioPassword from './componentes/usuario/conta/UsuarioPassword';
import UsuarioPrivacidade from './componentes/usuario/conta/UsuarioPrivacidade';
import UsuarioDesativarConta from './componentes/usuario/conta/UsuarioDesativarConta';
import ListaNotificacoes from './componentes/Notificacoes/ListaNotificacoes';
import LoginUsuario from './componentes/usuario/login/LoginUsuario';
import ListaMeusImoveis from './componentes/imovel/meusImoveis/ListaMeusImoveis';
import ImovelAdicionar from './componentes/imovel/adicionar/ImovelAdicionar';
import ImovelAdicionarPasso2 from './componentes/imovel/adicionar/ImovelAdicionarPasso2';
import ImovelAdicionarPasso3 from './componentes/imovel/adicionar/ImovelAdicionarPasso3';
import ImovelAdicionarPasso4 from './componentes/imovel/adicionar/ImovelAdicionarPasso4';
import UsuarioFotoPrincipal from './componentes/usuario/conta/UsuarioFotoPrincipal';
import UsuarioFeed from './componentes/usuario/sessao/UsuarioFeed';
import UsuarioInfoGerais from './componentes/usuario/sessao/UsuarioInfoGerais';
import UsuarioImoveis from './componentes/usuario/sessao/UsuarioImoveis';
import UsuarioFavoritos from './componentes/usuario/sessao/UsuarioFavoritos';
import UsuarioDetalhes from './componentes/usuario/detalhes/UsuarioDetalhes';
import UsuarioDetalhesImoveis from './componentes/usuario/detalhes/UsuarioDetalhesImoveis';
import UsuarioDetalhesFeed from './componentes/usuario/detalhes/UsuarioDetalhesFeed';
import OfertasRecebidas from './componentes/usuario/sessao/ofertas/OfertasRecebidas';
import OfertasEnviadas from './componentes/usuario/sessao/ofertas/OfertasEnviadas';
import VisualizacoesRecebidas from './componentes/usuario/sessao/visualizacoes/VisualizacoesRecebidas';
import ParceriasRecebidas from './componentes/usuario/sessao/parcerias/ParceriasRecebidas';
import ParceriasEnviadas from './componentes/usuario/sessao/parcerias/ParceriasEnviadas';
import ParceriasFechadas from './componentes/usuario/sessao/parcerias/ParceriasFechadas';
import IntermediacoesRecebidas from './componentes/usuario/sessao/intermediacoes/IntermediacoesRecebidas';
import IntermediacoesEnviadas from './componentes/usuario/sessao/intermediacoes/IntermediacoesEnviadas';
import IntermediacoesFechadas from './componentes/usuario/sessao/intermediacoes/IntermediacoesFechadas';
import IndicacoesRecebidas from './componentes/usuario/sessao/indicacoes/IndicacoesRecebidas';

import ImovelEditar from './componentes/imovel/editar/ImovelEditar';
import ImovelEditarPasso2 from './componentes/imovel/editar/ImovelEditarPasso2';
import ImovelEditarPasso3 from './componentes/imovel/editar/ImovelEditarPasso3';
import ImovelEditarPasso4 from './componentes/imovel/editar/ImovelEditarPasso4';
import ListaConvites from './componentes/contato/ListaConvites';
import UsuarioCadastrar from './componentes/usuario/cadastrar/UsuarioCadastrar';
import UsuarioCadastrarPasso2 from './componentes/usuario/cadastrar/UsuarioCadastrarPasso2';
import UsuarioCadastrarPasso3 from './componentes/usuario/cadastrar/UsuarioCadastrarPasso3';

{/*   <Route path='/usuarioCadastrar' component={UsuarioCadastrar} />  */}

ReactDOM.render(
   
            <Router history={history}>
                <div className="wrapper"> 
                        
                    <Switch>                                                               
                        <Route path="/" exact={true} component={App}/> 
                        <Route path="/loginUsuario"  component={LoginUsuario}/> 
                        <Route path="/usuarioSessaoDetalhes/:id"  component={UsuarioSessaoDetalhes}/> 
                        <Route path="/visualizarImovelDetalhes/:id"  component={ImovelDetalhes}/> 
                        <Route path="/listaContatosUsuario/:id"  component={ListaContatos}/> 
                        <Route path="/imovelBuscar" component={ImovelBuscar}/>                
                        <Route path="/listarSeguidores/:id" component={ListaSeguidores}/> 
                        <Route path="/listarSeguindo/:id" component={ListaSeguindo}/> 
                        <Route path="/listarConvites/:id" component={ListaConvites}/> 
                        <Route path="/mensagensUsuario/:id" component={Mensagens}/>
                        <Route path="/usuarioConta/:id" component={UsuarioConta}/> 
                        <Route path="/usuarioFotoPrincipal/:id" component={UsuarioFotoPrincipal}/> 
                        <Route path="/usuarioBuscar" component={UsuarioBuscar}/> 
                        <Route path="/usuarioPassword/:id" component={UsuarioPassword}/> 
                        <Route path="/usuarioPrivacidade/:id" component={UsuarioPrivacidade}/> 
                        <Route path="/usuarioDesativarConta/:id" component={UsuarioDesativarConta}/> 
                        <Route path="/listaNotificacoes/:id" component={ListaNotificacoes}/> 
                        
                        <Route path="/listaMeusImoveis/:id"  component={ListaMeusImoveis}/> 
                        <Route path="/imovelAdicionar"  component={ImovelAdicionar}/> 
                        <Route path="/imovelAdicionarPasso2"  component={ImovelAdicionarPasso2}/> 
                        <Route path="/imovelAdicionarPasso3"  component={ImovelAdicionarPasso3}/> 
                        <Route path="/imovelAdicionarPasso4"  component={ImovelAdicionarPasso4}/>

                        {/*INICIO -Links para o Usuario Sessao Detalhes  */}
                        <Route path="/usuarioInfoGerais/:id"  component={UsuarioInfoGerais}/>
                        <Route path="/usuarioFeed/:id"  component={UsuarioFeed}/>
                        <Route path="/usuarioImoveis/:id"  component={UsuarioImoveis}/>
                        <Route path="/usuarioFavoritos/:id"  component={UsuarioFavoritos}/>   
                        {/*FIM -Links para o Usuario Sessao Detalhes  */}

                         {/*INICIO -Links para o Usuario  Detalhes  */}
                         <Route path="/usuarioDetalhes/:id"  component={UsuarioDetalhes}/>  
                         <Route path="/usuarioDetalhesFeed/:id"  component={UsuarioDetalhesFeed}/> 
                         <Route path="/usuarioDetalhesImoveis/:id"  component={UsuarioDetalhesImoveis}/> 
                         {/*FIM -Links para o Usuario  Detalhes  */}

                         {/*INICIO -Links para o Menu Usuario  */}
                         <Route path="/ofertasRecebidas/:id"  component={OfertasRecebidas}/>
                         <Route path="/ofertasEnviadas/:id"  component={OfertasEnviadas}/>

                         <Route path="/visualizacoesRecebidas/:id"  component={VisualizacoesRecebidas}/>                         
                         
                         <Route path="/parceriasRecebidas/:id"  component={ParceriasRecebidas}/>
                         <Route path="/parceriasEnviadas/:id"  component={ParceriasEnviadas}/>
                         <Route path="/parceriasFechadas/:id"  component={ParceriasFechadas}/>                         
                         
                         <Route path="/intermediacoesRecebidas/:id"  component={IntermediacoesRecebidas}/>
                         <Route path="/intermediacoesEnviadas/:id"  component={IntermediacoesEnviadas}/>
                         <Route path="/intermediacoesFechadas/:id"  component={IntermediacoesFechadas}/>   

                         <Route path="/indicacoesRecebidas/:id"  component={IndicacoesRecebidas}/>                            
                         {/*FIM - Links para o Menu Usuario    */}

                        {/*INICIO - Links para o editar imóvel    */}
                        <Route path="/imovelEditar/:id"  component={ImovelEditar}/> 
                        <Route path="/imovelEditarPasso2/:id"  component={ImovelEditarPasso2}/> 
                        <Route path="/imovelEditarPasso3/:id"  component={ImovelEditarPasso3}/> 
                        <Route path="/imovelEditarPasso4/:id"  component={ImovelEditarPasso4}/>
                        {/*FIM - Links para o editar imóvel    */}

                        {/*INICIO - Links para o cadastrar usuario    */}
                        <Route exact path="/usuarioCadastrar"  component={UsuarioCadastrar}/>     
                        <Route exact path="/usuarioCadastrarPasso2"  component={UsuarioCadastrarPasso2}/>     
                        <Route exact path="/usuarioCadastrarPasso3"  component={UsuarioCadastrarPasso3}/>     

                        {/*FIM - Links para o cadastrar usuario   */}
                    </Switch>                   
                </div>
            </Router>   
            , document.getElementById('root'));

/*
ReactDOM.render(<App />, document.getElementById('root'));
*/

