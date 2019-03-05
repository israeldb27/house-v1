import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './componentes/layout/Header';

import { BrowserRouter, Link, Route, Switch, Router } from 'react-router-dom';
import history from './componentes/History';
import UsuarioSessaoDetalhes from './componentes/usuario/UsuarioSessaoDetalhes';
import ImovelDetalhes from './componentes/imovel/ImovelDetalhes';
import ListaContatos from './componentes/contato/ListaContatos';
import ImovelBuscar from './componentes/imovel/ImovelBuscar';
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
import UsuarioFeed from './componentes/usuario/detalhes/UsuarioFeed';
import UsuarioInfoGerais from './componentes/usuario/detalhes/UsuarioInfoGerais';
import UsuarioImoveis from './componentes/usuario/detalhes/UsuarioImoveis';
import UsuarioFavoritos from './componentes/usuario/detalhes/UsuarioFavoritos';

ReactDOM.render(
    
            <Router history={history}>
                <div className="wrapper">
                    <Header />

                    <Switch>
                        <Route path="/" exact={true} component={App}/> 
                        <Route path="/usuarioSessaoDetalhes/:id"  component={UsuarioSessaoDetalhes}/> 
                        <Route path="/visualizarImovelDetalhes/:id"  component={ImovelDetalhes}/> 
                        <Route path="/listaContatosUsuario/:id"  component={ListaContatos}/> 
                        <Route path="/imovelBuscar" component={ImovelBuscar}/>                
                        <Route path="/listarSeguidores/:id" component={ListaSeguidores}/> 
                        <Route path="/listarSeguindo/:id" component={ListaSeguindo}/> 
                        <Route path="/mensagensUsuario/:id" component={Mensagens}/>
                        <Route path="/usuarioConta/:id" component={UsuarioConta}/> 
                        <Route path="/usuarioFotoPrincipal/:id" component={UsuarioFotoPrincipal}/> 
                        <Route path="/usuarioBuscar" component={UsuarioBuscar}/> 
                        <Route path="/usuarioPassword/:id" component={UsuarioPassword}/> 
                        <Route path="/usuarioPrivacidade/:id" component={UsuarioPrivacidade}/> 
                        <Route path="/usuarioDesativarConta/:id" component={UsuarioDesativarConta}/> 
                        <Route path="/listaNotificacoes/:id" component={ListaNotificacoes}/> 
                        <Route path="/loginUsuario"  component={LoginUsuario}/> 
                        <Route path="/listaMeusImoveis/:id"  component={ListaMeusImoveis}/> 
                        <Route path="/imovelAdicionar"  component={ImovelAdicionar}/> 
                        <Route path="/imovelAdicionarPasso2"  component={ImovelAdicionarPasso2}/> 
                        <Route path="/imovelAdicionarPasso3"  component={ImovelAdicionarPasso3}/> 
                        <Route path="/imovelAdicionarPasso4"  component={ImovelAdicionarPasso4}/>

                        <Route path="/usuarioInfoGerais/:id"  component={UsuarioInfoGerais}/>
                        <Route path="/usuarioFeed/:id"  component={UsuarioFeed}/>
                        <Route path="/usuarioImoveis/:id"  component={UsuarioImoveis}/>
                        <Route path="/usuarioFavoritos/:id"  component={UsuarioFavoritos}/>                        
                        
                    </Switch>                   
                </div>
            </Router>
            , document.getElementById('root'));

/*
ReactDOM.render(<App />, document.getElementById('root'));
*/

