import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imovel from '../fotos/imovel.jpg';
import imovel2 from '../fotos/imovel2.jpg';
import { setUsuarioStorage } from '../common/Utils';
import TimelineService from '../../services/TimelineService';

let id = 0;
function createData(id, nomeUsuario, perfilUsuario, urlFoto, 
                    localizacao, titulo, acao, valorImovel, 
                    valorIptu, valorCondominio, descricao, 
                    area, quartos, banheiros, garagens, suites, likes, comments, views) {
  id += 1;
  return {id, nomeUsuario, perfilUsuario, urlFoto, 
          localizacao, titulo, acao, valorImovel, 
          valorIptu, valorCondominio, descricao, 
          area, quartos, banheiros, garagens, suites, likes, comments, views} ;
}

const rows = [
  createData(1, 'Luciana Souza', 'Corretor', '/img1.jpg',
             'Boa Viagem, Niteroi - RJ', 'Luxo Place', 'Aluguel', '1320',
             550, 1560, 'Excelente espaço e bem localizado',
             210, 2, 2, 1, 1, 15, 12, 20),

  createData(2, 'Zirtaeb', 'Imobiliaria', '/img1.jpg',
             'Centro, Niteroi - RJ', 'Flat Centro', 'Venda', '700',
             211, 800, 'Localizado no centro da cidade',
             80, 1, 0, 0, 0, 22, 12, 33)
];




class Timeline extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
          listaTimeline : [] 
  
        }
      }

    componentDidMount(){     
        for (let i = 0; i < rows.length; i++){
            let list = this.state.listaTimeline;
            list.push(rows[i]);
            this.setState({listaTimeline: list});            
        }
    }

    inserirPost(event){
        event.preventDefault();
      /*  console.log('post usuario: ' + this.post.value) 
        let usuario = {
            'nome': 'Israel Barreto',
            'perfil': 'Corretor',
            'totalImovel': 30,
            'dataCadastro': '10/11/2012'
        };       
        setUsuarioStorage(usuario);*/

        let idUsuario = '5ce95a266b4e216264be787d'
        TimelineService.cadastrarPostTexto(idUsuario, this.post.value).then(response =>{
            console.log('Resposta: ' + response);
        })
    }

    render() {
        return (            
                <div className="main-ws-sec">
                    <div className="post-topbar">
                        <form >
                            <div class="message-send-area">                                
                                    <div className="post-st">
                                        <ul>
                                            <li><textarea rows="5" cols="60" ref={(textarea) => this.post = textarea} placeholder="Digite algo aqui">  </textarea></li>                                                   
                                        </ul>
                                    </div>                            
                            </div>

                            <div className="post-st">
                                <ul>
                                    <br /> 
                                    <li ><a className="post-jb active" href="#" title="" onClick={this.inserirPost.bind(this)}>Postar</a></li>
                                </ul>    
                            </div>
                        </form>
                    </div>
                    <div className="posts-section">

                    {
                        this.state.listaTimeline.map(imovel => {
                            console.log('imovel selecionado: ' + imovel);
                            return (
                                <div className="post-bar">
                            
                                    <div className="suggestion-usd">
                                        <img src="http://via.placeholder.com/35x35" alt="" />
                                        <div className="sgt-text">
                                            <h4>{imovel.nomeUsuario}</h4>
                                            <span>{imovel.perfilUsuario}</span>
                                        </div>
                                    </div>

                                    <div className="post_topbar">                               
                                        <h3 style={{fontSize: '20px'}}><strong>{imovel.titulo} </strong></h3> <br />
                                        <Link to={{ pathname: `/visualizarImovelDetalhes/${imovel.id}`}}>
                                            <img src={imovel2} alt="" style={{position: 'relative', float:'center', width: '100%'}} />
                                        </Link>  
                                        <br />
                                    </div>
                                    
                                    <div className="epi-sec">
                                
                                        <ul className="descp">
                                            <li><img src="images/icon8.png" alt="" /><span>{imovel.localizacao }</span></li>                                    
                                        </ul>
                                        <ul className="bk-links">
                                            <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                            <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="job_descp">                              
                                        <ul className="job-dt">
                                            <li><a href="#" title="">{imovel.acao}</a></li>
                                            <li><span>$ {imovel.valorImovel}</span></li>                                  
                                        </ul>  
                                        <ul className="job-dt" style={{fontSize:'12px'}}>
                                            <li><p>IPTU </p> $ {imovel.valorIptu} </li>
                                            <li> </li>
                                            <li><p>Condomínio </p> $ {imovel.valorCondominio} </li>           
                                        </ul>                          
                                        <p>{imovel.descricao}}... <a href="#" title="">view more</a></p>
                                        <ul className="skill-tags">
                                            <li><a href="#" title="">{imovel.area} m²</a></li>
                                            <li><a href="#" title="">{imovel.quartos} Quartos(s)</a></li>
                                            <li><a href="#" title="">{imovel.banheiros} Banheiro(s)</a></li>
                                            <li><a href="#" title="">{imovel.garagens} Vaga(s)</a></li>
                                            <li><a href="#" title="">{imovel.suites} Suíte(s)</a></li>
                                        </ul>
                                    </div>
                                    <div className="job-status-bar">
                                        <ul className="like-com">
                                            <li>
                                                <a href="#"><i className="la la-heart"></i> Like</a>
                                                <img src="images/liked-img.png" alt="" />
                                                <span>{imovel.likes}</span>
                                            </li>
                                            <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment {imovel.comments}</a></li>
                                        </ul>
                                        <a><i className="la la-eye"></i>Views {imovel.views}</a>
                                    </div>
                                </div>                             
                            )
                        })
                    } 
                       
                        <div className="process-comm">
                            <div className="spinner">
                                <div className="bounce1"></div>
                                <div className="bounce2"></div>
                                <div className="bounce3"></div>
                            </div>
                        </div>{/*--process-comm end*/}
                    </div>{/*--posts-section end*/}
                </div>            
        );
    }
}

export default Timeline;