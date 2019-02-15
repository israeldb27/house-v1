import React, { Component } from 'react';
import ImovelUsuarioResponsavel from './ImovelUsuarioResponsavel';
import OutrosImoveisUsuario from './OutrosImoveisUsuario';
import israel from '../israel.jpg'
import imovel2 from '../imovel2.jpg';

class ImovelDetalhes extends Component {
    render() {
        return (
            <main>
                <br /> <br />  <br /> <br /> <br /> <br /> <br />
                <div className="main-section">
                    <div className="container">
                        <div className="main-section-data">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="main-left-sidebar">

                                        <ImovelUsuarioResponsavel />

                                        <OutrosImoveisUsuario />

                                    </div> {/*main-left-sidebar end */}
                                </div>
                                <div className="col-lg-6">
                                    <div className="main-ws-sec">
                                        <div className="user-tab-sec">
                                            <h3>Luxo Residence Palace</h3> <br />
                                                <div class="star-descp">
                                                    <table> 
                                                          <tr> 
                                                            <td> $ 300.000,00</td>   
                                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
                                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
                                                            <td> <label className="a-tipoimovel">Venda</label> </td>
                                                           </tr>  
                                                           <tr>
                                                           <br />     
                                                                <h5 class="text-bold"><i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;&nbsp; Boa Viagem, Niteroi - RJ </h5>
                                                                
                                                           </tr>    
                                                    </table> 
                                                    
                                                </div>

                                                <ul className="skill-tags">
                                                            <li><a href="#" title="">100 m²</a></li>
                                                            <li><a href="#" title="">2 Quarto(s)</a></li>
                                                            <li><a href="#" title="">1 Banheiro(s)</a></li>
                                                            <li><a href="#" title="">1 Vaga(s)</a></li>
                                                            <li><a href="#" title="">2 Suíte(s)</a></li>
                                                </ul> 

                                                
                                            <div className="tab-feed st2">
                                            <br /> <br /> <br /> <br />
                                                <ul>
                                                    <li data-tab="info-dd" className="active">
                                                        <a href="#" title="">
                                                            <img src="images/ic2.png" alt="" />
                                                            <span>Informações</span>
                                                        </a>
                                                    </li>
                                                    <li data-tab="feed-dd" >
                                                        <a href="#" title="">
                                                            <img src="images/ic1.png" alt="" />
                                                            <span>Galeria de Fotos</span>
                                                        </a>
                                                    </li>                                                                                          

                                                </ul>
                                            </div> {/* tab-feed end */}


                                            <div className="user-profile-ov">

                                            <div class="epi-secright">
                                                <ul class="bk-links" >
                                                    <li><button style={{ border: 'none' }}><i class="fa fa-bookmark-o"></i></button></li>
                                                    <li><button style={{ border: 'none' }}><i class="fa fa-hand-pointer-o"></i></button></li>
                                                </ul>
                                            </div>
                      
                                            <p>
                                                <img src={imovel2} alt="" style={{ position: 'relative', float: 'center', width: '100%' }} />
                                                <br />
                                            </p>                                            
                                           
                                            </div>  

                                            <div className="product-feed-tab current" id="info-dd">
                                                <div className="user-profile-ov">
                                                    <h3><a href="#" title="" className="overview-open">Descrição</a> <a href="#" title="" className="overview-open"><i className="fa fa-pencil"></i></a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.</p>
                                                </div> {/*user-profile-ov end */}

                                                 <div className="user-profile-ov">
                                                    <h3><a href="#" title="" className="lct-box-open">Mapa</a> </h3>
                                                   
                                                    <p>Inserir google maps aqui </p>
                                                </div> {/*user-profile-ov end */}   
                                        

                                                <div className="user-profile-ov st2">
                                                    <h3><a href="#" title="" className="exp-bx-open">Taxas </a></h3>
                                                        <br />
                                                         <ul className="skill-tags">                                                      
                                                            <li><a href="#a" title="">IPTU: &nbsp;&nbsp; &nbsp;&nbsp; $ 12000,00</a></li>     
                                                            <li><a href="#a" title="">Valor Condomínio: &nbsp;&nbsp; &nbsp;&nbsp; $ 700,00 </a></li> 
                                                        </ul>  

                                                </div> {/*user-profile-ov end */}

                                                <div className="user-profile-ov st2">
                                                    <h3><a href="#" title="" className="exp-bx-open">Estatísticas </a></h3>
                                                    <br />

                                                    <ul className="skill-tags">                                                      
                                                        <li><a href="#a" title="">Total Visualizações: &nbsp;&nbsp; &nbsp;&nbsp; 10</a></li>     
                                                        <li><a href="#a" title="">Total de Ofertas: &nbsp;&nbsp; &nbsp;&nbsp; 15 </a></li>  
                                                        <li><a href="#a" title="">Total de Favoritos: &nbsp;&nbsp; &nbsp;&nbsp; 11 </a></li>   
                                                        <li><a href="#a" title="">Total de Interessados: &nbsp;&nbsp; &nbsp;&nbsp; 23 </a></li>                                                         
                                                    </ul> 
                                     
                                                </div> {/*user-profile-ov end */}

                                                <div className="user-profile-ov st2">
                                                    <h3><a href="#" title="" className="exp-bx-open">Oferta </a></h3>
                                                    <div className="notifications-list">

                                                        <div className="post-comment">
                                                            <div className="comment_box">
                                                                <br />
                                                                <form>
                                                                    <input type="text" placeholder="envie oferta em R$" maxLength="5" style={{backgroundColor: '#f8f9fa'}}/>
                                                                    <br /> <br />
                                                                    <input type="textarea" placeholder="envie uma observação" style={{backgroundColor: '#f8f9fa'}} />
                                                                    <br /> <br />
                                                                    <button type="submit">Enviar</button>
                                                                </form>
                                                            </div>
                                                        </div>{/*--post-comment end*/}

                                                    </div>
                                                </div>

                                                <div className="user-profile-ov st2">
                                                    <h3><a href="#" title="" className="exp-bx-open">Parceria </a></h3>
                                                    <div className="notifications-list">
                                                        <div className="post-comment">
                                                            <div className="comment_box">
                                                                <br />
                                                                <form>                                                                  
                                                                    <input type="textarea" placeholder="envie uma observação" style={{backgroundColor: '#f8f9fa'}} />
                                                                    <br /> <br />
                                                                    <button type="submit">Enviar</button>
                                                                </form>
                                                            </div>
                                                        </div>{/*--post-comment end*/}
                                                    </div>
                                                </div>

                                                <div className="user-profile-ov st2">
                                                    <h3><a href="#" title="" className="exp-bx-open">Intermediação </a></h3>
                                                    <div className="notifications-list">
                                                        <div className="post-comment">
                                                            <div className="comment_box">
                                                                <br />
                                                                <form>                                                                  
                                                                    <input type="textarea" placeholder="envie uma observação" style={{backgroundColor: '#f8f9fa'}}/>
                                                                    <br /> <br />
                                                                    <button type="submit">Enviar</button>
                                                                </form>
                                                            </div>
                                                        </div>{/*--post-comment end*/}
                                                    </div>
                                                </div>

                                                <div className="user-profile-ov st2">
                                                    <h3><a href="#" title="" className="exp-bx-open">Comentários </a></h3>                                                    
                                                        <div className="notifications-list">
                                                            <div className="notfication-details">
                                                                <div className="noty-user-img">
                                                                    <img src="http://via.placeholder.com/35x35" alt="" />
                                                                </div>
                                                                <div className="notification-info">
                                                                    <h3><a href="#" title="">Jassica William</a></h3>
                                                                    <p> 
                                                                        Comment on your project. 
                                                                    </p>
                                                                    <span>2 min ago</span>
                                                                </div>{/*notification-info */}
                                                            </div>{/*notfication-details end*/}
                                                            <div className="notfication-details">
                                                                <div className="noty-user-img">
                                                                    <img src="http://via.placeholder.com/35x35" alt="" />
                                                                </div>
                                                                <div className="notification-info">
                                                                    <h3><a href="#" title="">Poonam Verma</a> </h3>
                                                                    <p> 
                                                                        Comment on your project. 
                                                                    </p>
                                                                    <span>2 min ago</span>
                                                                </div>{/*notification-info */}
                                                            </div>{/*notfication-details end*/}
                                                            <div className="notfication-details">
                                                                <div className="noty-user-img">
                                                                    <img src="http://via.placeholder.com/35x35" alt="" />
                                                                </div>
                                                                <div className="notification-info">
                                                                    <h3><a href="#" title="">Tonney Dhman</a> </h3>
                                                                    <p> 
                                                                        Comment on your project. 
                                                                    </p>
                                                                    <span>2 min ago</span>
                                                                </div>{/*notification-info */}
                                                            </div>{/*notfication-details end*/}
                                                            <div className="notfication-details">
                                                                <div className="noty-user-img">
                                                                    <img src="http://via.placeholder.com/35x35" alt="" />
                                                                </div>
                                                                <div className="notification-info">
                                                                    <h3><a href="#" title="">Jassica William</a> </h3>
                                                                    <p> 
                                                                        Comment on your project. 
                                                                    </p>
                                                                    <span>2 min ago</span>
                                                                </div>{/*notification-info */}
                                                            </div>{/*notfication-details end*/}
                                                           
                                                        </div>{/*notifications-list end*/}      
                                                        <div className="post-comment">
                                                            <div className="cm_img">
                                                                <img src={israel} alt="" style={{width: '40px', height:'40px'}}/>
                                                            </div>
                                                            <div className="comment_box">
                                                                <br />
                                                                <form>
                                                                    <input type="text" placeholder="Post a comment" style={{backgroundColor: '#f8f9fa'}}/>
                                                                    <br /> <br />
                                                                    <button type="submit">Send</button>
                                                                </form>
                                                            </div>
                                                        </div>{/*--post-comment end*/}                                              
                                                   
                                                </div> {/*user-profile-ov end */}

                                                <div className="user-profile-ov st2">
                                                    <h3><a href="#" title="" className="exp-bx-open">Últimas Atualizações </a></h3>
                                                    <h4>Web designer <a href="#" title=""><i className="fa fa-pencil"></i></a></h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
                                                    <h4>UI / UX Designer <a href="#" title=""><i className="fa fa-pencil"></i></a></h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id.</p>
                                                    <h4>PHP developer <a href="#" title=""><i className="fa fa-pencil"></i></a></h4>
                                                    <p className="no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
                                                </div> {/*user-profile-ov end */}
                                            </div> {/*product-feed-tab end */}

                                            <div className="product-feed-tab" id="feed-dd">
                                                <div className="posts-section">
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="usy-dt">
                                                                <img src="http://via.placeholder.com/50x50" alt="" />
                                                                <div className="usy-name">
                                                                    <h3>John Doe</h3>
                                                                    <span><img src="images/clock.png" alt="" />3 min ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#" title="">Edit Post</a></li>
                                                                    <li><a href="#" title="">Unsaved</a></li>
                                                                    <li><a href="#" title="">Unbid</a></li>
                                                                    <li><a href="#" title="">Close</a></li>
                                                                    <li><a href="#" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="epi-sec">
                                                            <ul className="descp">
                                                                <li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                                                <li><img src="images/icon9.png" alt="" /><span>India</span></li>
                                                            </ul>
                                                            <ul className="bk-links">
                                                                <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                                <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job_descp">
                                                            <h3>Senior Wordpress Developer</h3>
                                                            <ul className="job-dt">
                                                                <li><a href="#" title="">Full Time</a></li>
                                                                <li><span>$30 / hr</span></li>
                                                            </ul>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                            <ul className="skill-tags">
                                                                <li><a href="#" title="">HTML</a></li>
                                                                <li><a href="#" title="">PHP</a></li>
                                                                <li><a href="#" title="">CSS</a></li>
                                                                <li><a href="#" title="">Javascript</a></li>
                                                                <li><a href="#" title="">Wordpress</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job-status-bar">
                                                            <ul className="like-com">
                                                                <li>
                                                                    <a href="#"><i className="la la-heart"></i> Like</a>
                                                                    <img src="images/liked-img.png" alt="" />
                                                                    <span>25</span>
                                                                </li>
                                                                <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                            </ul>
                                                            <a><i className="la la-eye"></i>Views 50</a>
                                                        </div>
                                                    </div> {/*post-bar end */}
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="usy-dt">
                                                                <img src="http://via.placeholder.com/50x50" alt="" />
                                                                <div className="usy-name">
                                                                    <h3>John Doe</h3>
                                                                    <span><img src="images/clock.png" alt="" />3 min ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#" title="">Edit Post</a></li>
                                                                    <li><a href="#" title="">Unsaved</a></li>
                                                                    <li><a href="#" title="">Unbid</a></li>
                                                                    <li><a href="#" title="">Close</a></li>
                                                                    <li><a href="#" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="epi-sec">
                                                            <ul className="descp">
                                                                <li><img src="images/icon8.png" alt="" /><span>Front End Developer</span></li>
                                                                <li><img src="images/icon9.png" alt="" /><span>India</span></li>
                                                            </ul>
                                                            <ul className="bk-links">
                                                                <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                                <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                                <li><a href="#" title="" className="bid_now">Bid Now</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job_descp">
                                                            <h3>Simple Classified Site</h3>
                                                            <ul className="job-dt">
                                                                <li><span>$300 - $350</span></li>
                                                            </ul>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                            <ul className="skill-tags">
                                                                <li><a href="#" title="">HTML</a></li>
                                                                <li><a href="#" title="">PHP</a></li>
                                                                <li><a href="#" title="">CSS</a></li>
                                                                <li><a href="#" title="">Javascript</a></li>
                                                                <li><a href="#" title="">Wordpress</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job-status-bar">
                                                            <ul className="like-com">
                                                                <li>
                                                                    <a href="#"><i className="la la-heart"></i> Like</a>
                                                                    <img src="images/liked-img.png" alt="" />
                                                                    <span>25</span>
                                                                </li>
                                                                <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                            </ul>
                                                            <a><i className="la la-eye"></i>Views 50</a>
                                                        </div>
                                                    </div> {/*post-bar end */}
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="usy-dt">
                                                                <img src="http://via.placeholder.com/50x50" alt="" />
                                                                <div className="usy-name">
                                                                    <h3>John Doe</h3>
                                                                    <span><img src="images/clock.png" alt="" />3 min ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#" title="">Edit Post</a></li>
                                                                    <li><a href="#" title="">Unsaved</a></li>
                                                                    <li><a href="#" title="">Unbid</a></li>
                                                                    <li><a href="#" title="">Close</a></li>
                                                                    <li><a href="#" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="epi-sec">
                                                            <ul className="descp">
                                                                <li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                                                <li><img src="images/icon9.png" alt="" /><span>India</span></li>
                                                            </ul>
                                                            <ul className="bk-links">
                                                                <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                                <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job_descp">
                                                            <h3>Senior UI / UX designer</h3>
                                                            <ul className="job-dt">
                                                                <li><a href="#" title="">Par Time</a></li>
                                                                <li><span>$10 / hr</span></li>
                                                            </ul>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                            <ul className="skill-tags">
                                                                <li><a href="#" title="">HTML</a></li>
                                                                <li><a href="#" title="">PHP</a></li>
                                                                <li><a href="#" title="">CSS</a></li>
                                                                <li><a href="#" title="">Javascript</a></li>
                                                                <li><a href="#" title="">Wordpress</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job-status-bar">
                                                            <ul className="like-com">
                                                                <li>
                                                                    <a href="#"><i className="la la-heart"></i> Like</a>
                                                                    <img src="images/liked-img.png" alt="" />
                                                                    <span>25</span>
                                                                </li>
                                                                <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                            </ul>
                                                            <a><i className="la la-eye"></i>Views 50</a>
                                                        </div>
                                                    </div> {/*post-bar end */}
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="usy-dt">
                                                                <img src="http://via.placeholder.com/50x50" alt="" />
                                                                <div className="usy-name">
                                                                    <h3>John Doe</h3>
                                                                    <span><img src="images/clock.png" alt="" />3 min ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#" title="">Edit Post</a></li>
                                                                    <li><a href="#" title="">Unsaved</a></li>
                                                                    <li><a href="#" title="">Unbid</a></li>
                                                                    <li><a href="#" title="">Close</a></li>
                                                                    <li><a href="#" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="epi-sec">
                                                            <ul className="descp">
                                                                <li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                                                <li><img src="images/icon9.png" alt="" /><span>India</span></li>
                                                            </ul>
                                                            <ul className="bk-links">
                                                                <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                                <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                                <li><a href="#" title="" className="bid_now">Bid Now</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job_descp">
                                                            <h3>Ios Shopping mobile app</h3>
                                                            <ul className="job-dt">
                                                                <li><span>$300 - $350</span></li>
                                                            </ul>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                            <ul className="skill-tags">
                                                                <li><a href="#" title="">HTML</a></li>
                                                                <li><a href="#" title="">PHP</a></li>
                                                                <li><a href="#" title="">CSS</a></li>
                                                                <li><a href="#" title="">Javascript</a></li>
                                                                <li><a href="#" title="">Wordpress</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job-status-bar">
                                                            <ul className="like-com">
                                                                <li>
                                                                    <a href="#"><i className="la la-heart"></i> Like</a>
                                                                    <img src="images/liked-img.png" alt="" />
                                                                    <span>25</span>
                                                                </li>
                                                                <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                            </ul>
                                                            <a><i className="la la-eye"></i>Views 50</a>
                                                        </div>
                                                    </div> {/*post-bar end */}
                                                    <div className="process-comm">
                                                        <div className="spinner">
                                                            <div className="bounce1"></div>
                                                            <div className="bounce2"></div>
                                                            <div className="bounce3"></div>
                                                        </div>
                                                    </div> {/*process-comm end */}
                                                </div> {/*posts-section end */}
                                            </div> {/*product-feed-tab end */}

                                            <div className="product-feed-tab" id="saved-jobs">
                                                <div className="posts-section">
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="usy-dt">
                                                                <img src="http://via.placeholder.com/50x50" alt="" />
                                                                <div className="usy-name">
                                                                    <h3>John Doe</h3>
                                                                    <span><img src="images/clock.png" alt="" />3 min ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#" title="">Edit Post</a></li>
                                                                    <li><a href="#" title="">Unsaved</a></li>
                                                                    <li><a href="#" title="">Unbid</a></li>
                                                                    <li><a href="#" title="">Close</a></li>
                                                                    <li><a href="#" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="epi-sec">
                                                            <ul className="descp">
                                                                <li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                                                <li><img src="images/icon9.png" alt="" /><span>India</span></li>
                                                            </ul>
                                                            <ul className="bk-links">
                                                                <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                                <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job_descp">
                                                            <h3>Senior Wordpress Developer</h3>
                                                            <ul className="job-dt">
                                                                <li><a href="#" title="">Full Time</a></li>
                                                                <li><span>$30 / hr</span></li>
                                                            </ul>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                            <ul className="skill-tags">
                                                                <li><a href="#" title="">HTML</a></li>
                                                                <li><a href="#" title="">PHP</a></li>
                                                                <li><a href="#" title="">CSS</a></li>
                                                                <li><a href="#" title="">Javascript</a></li>
                                                                <li><a href="#" title="">Wordpress</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job-status-bar">
                                                            <ul className="like-com">
                                                                <li>
                                                                    <a href="#"><i className="la la-heart"></i> Like</a>
                                                                    <img src="images/liked-img.png" alt="" />
                                                                    <span>25</span>
                                                                </li>
                                                                <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                            </ul>
                                                            <a><i className="la la-eye"></i>Views 50</a>
                                                        </div>
                                                    </div> {/*post-bar end */}
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="usy-dt">
                                                                <img src="http://via.placeholder.com/50x50" alt="" />
                                                                <div className="usy-name">
                                                                    <h3>John Doe</h3>
                                                                    <span><img src="images/clock.png" alt="" />3 min ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#" title="">Edit Post</a></li>
                                                                    <li><a href="#" title="">Unsaved</a></li>
                                                                    <li><a href="#" title="">Unbid</a></li>
                                                                    <li><a href="#" title="">Close</a></li>
                                                                    <li><a href="#" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="epi-sec">
                                                            <ul className="descp">
                                                                <li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                                                <li><img src="images/icon9.png" alt="" /><span>India</span></li>
                                                            </ul>
                                                            <ul className="bk-links">
                                                                <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                                <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job_descp">
                                                            <h3>Senior Wordpress Developer</h3>
                                                            <ul className="job-dt">
                                                                <li><a href="#" title="">Full Time</a></li>
                                                                <li><span>$30 / hr</span></li>
                                                            </ul>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                            <ul className="skill-tags">
                                                                <li><a href="#" title="">HTML</a></li>
                                                                <li><a href="#" title="">PHP</a></li>
                                                                <li><a href="#" title="">CSS</a></li>
                                                                <li><a href="#" title="">Javascript</a></li>
                                                                <li><a href="#" title="">Wordpress</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job-status-bar">
                                                            <ul className="like-com">
                                                                <li>
                                                                    <a href="#"><i className="la la-heart"></i> Like</a>
                                                                    <img src="images/liked-img.png" alt="" />
                                                                    <span>25</span>
                                                                </li>
                                                                <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                            </ul>
                                                            <a><i className="la la-eye"></i>Views 50</a>
                                                        </div>
                                                    </div> {/*post-bar end */}
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="usy-dt">
                                                                <img src="http://via.placeholder.com/50x50" alt="" />
                                                                <div className="usy-name">
                                                                    <h3>John Doe</h3>
                                                                    <span><img src="images/clock.png" alt="" />3 min ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#" title="">Edit Post</a></li>
                                                                    <li><a href="#" title="">Unsaved</a></li>
                                                                    <li><a href="#" title="">Unbid</a></li>
                                                                    <li><a href="#" title="">Close</a></li>
                                                                    <li><a href="#" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="epi-sec">
                                                            <ul className="descp">
                                                                <li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                                                <li><img src="images/icon9.png" alt="" /><span>India</span></li>
                                                            </ul>
                                                            <ul className="bk-links">
                                                                <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                                <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job_descp">
                                                            <h3>Senior Wordpress Developer</h3>
                                                            <ul className="job-dt">
                                                                <li><a href="#" title="">Full Time</a></li>
                                                                <li><span>$30 / hr</span></li>
                                                            </ul>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                            <ul className="skill-tags">
                                                                <li><a href="#" title="">HTML</a></li>
                                                                <li><a href="#" title="">PHP</a></li>
                                                                <li><a href="#" title="">CSS</a></li>
                                                                <li><a href="#" title="">Javascript</a></li>
                                                                <li><a href="#" title="">Wordpress</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job-status-bar">
                                                            <ul className="like-com">
                                                                <li>
                                                                    <a href="#"><i className="la la-heart"></i> Like</a>
                                                                    <img src="images/liked-img.png" alt="" />
                                                                    <span>25</span>
                                                                </li>
                                                                <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                            </ul>
                                                            <a><i className="la la-eye"></i>Views 50</a>
                                                        </div>
                                                    </div> {/*post-bar end */}
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="usy-dt">
                                                                <img src="http://via.placeholder.com/50x50" alt="" />
                                                                <div className="usy-name">
                                                                    <h3>John Doe</h3>
                                                                    <span><img src="images/clock.png" alt="" />3 min ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#" title="">Edit Post</a></li>
                                                                    <li><a href="#" title="">Unsaved</a></li>
                                                                    <li><a href="#" title="">Unbid</a></li>
                                                                    <li><a href="#" title="">Close</a></li>
                                                                    <li><a href="#" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="epi-sec">
                                                            <ul className="descp">
                                                                <li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                                                <li><img src="images/icon9.png" alt="" /><span>India</span></li>
                                                            </ul>
                                                            <ul className="bk-links">
                                                                <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                                <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job_descp">
                                                            <h3>Senior Wordpress Developer</h3>
                                                            <ul className="job-dt">
                                                                <li><a href="#" title="">Full Time</a></li>
                                                                <li><span>$30 / hr</span></li>
                                                            </ul>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                            <ul className="skill-tags">
                                                                <li><a href="#" title="">HTML</a></li>
                                                                <li><a href="#" title="">PHP</a></li>
                                                                <li><a href="#" title="">CSS</a></li>
                                                                <li><a href="#" title="">Javascript</a></li>
                                                                <li><a href="#" title="">Wordpress</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job-status-bar">
                                                            <ul className="like-com">
                                                                <li>
                                                                    <a href="#"><i className="la la-heart"></i> Like</a>
                                                                    <img src="images/liked-img.png" alt="" />
                                                                    <span>25</span>
                                                                </li>
                                                                <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                            </ul>
                                                            <a><i className="la la-eye"></i>Views 50</a>
                                                        </div>
                                                    </div> {/*post-bar end */}
                                                    <div className="process-comm">
                                                        <a href="#" title=""><img src="images/process-icon.png" alt="" /></a>
                                                    </div> {/*process-comm end */}
                                                </div> {/*posts-section end */}
                                            </div> {/*product-feed-tab end */}
                                            <div className="product-feed-tab" id="my-bids">
                                                <div className="posts-section">
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="usy-dt">
                                                                <img src="http://via.placeholder.com/50x50" alt="" />
                                                                <div className="usy-name">
                                                                    <h3>John Doe</h3>
                                                                    <span><img src="images/clock.png" alt="" />3 min ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#" title="">Edit Post</a></li>
                                                                    <li><a href="#" title="">Unsaved</a></li>
                                                                    <li><a href="#" title="">Unbid</a></li>
                                                                    <li><a href="#" title="">Close</a></li>
                                                                    <li><a href="#" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="epi-sec">
                                                            <ul className="descp">
                                                                <li><img src="images/icon8.png" alt="" /><span>Frontend Developer</span></li>
                                                                <li><img src="images/icon9.png" alt="" /><span>India</span></li>
                                                            </ul>
                                                            <ul className="bk-links">
                                                                <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                                <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                                <li><a href="#" title="" className="bid_now">Bid Now</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job_descp">
                                                            <h3>Simple Classified Site</h3>
                                                            <ul className="job-dt">
                                                                <li><span>$300 - $350</span></li>
                                                            </ul>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                            <ul className="skill-tags">
                                                                <li><a href="#" title="">HTML</a></li>
                                                                <li><a href="#" title="">PHP</a></li>
                                                                <li><a href="#" title="">CSS</a></li>
                                                                <li><a href="#" title="">Javascript</a></li>
                                                                <li><a href="#" title="">Wordpress</a></li>
                                                                <li><a href="#" title="">Photoshop</a></li>
                                                                <li><a href="#" title="">Illustrator</a></li>
                                                                <li><a href="#" title="">Corel Draw</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job-status-bar">
                                                            <ul className="like-com">
                                                                <li>
                                                                    <a href="#"><i className="la la-heart"></i> Like</a>
                                                                    <img src="images/liked-img.png" alt="" />
                                                                    <span>25</span>
                                                                </li>
                                                                <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                            </ul>
                                                            <a><i className="la la-eye"></i>Views 50</a>
                                                        </div>
                                                    </div> {/*post-bar end */}
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="usy-dt">
                                                                <img src="http://via.placeholder.com/50x50" alt="" />
                                                                <div className="usy-name">
                                                                    <h3>John Doe</h3>
                                                                    <span><img src="images/clock.png" alt="" />3 min ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#" title="">Edit Post</a></li>
                                                                    <li><a href="#" title="">Unsaved</a></li>
                                                                    <li><a href="#" title="">Unbid</a></li>
                                                                    <li><a href="#" title="">Close</a></li>
                                                                    <li><a href="#" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="epi-sec">
                                                            <ul className="descp">
                                                                <li><img src="images/icon8.png" alt="" /><span>Frontend Developer</span></li>
                                                                <li><img src="images/icon9.png" alt="" /><span>India</span></li>
                                                            </ul>
                                                            <ul className="bk-links">
                                                                <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                                <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                                <li><a href="#" title="" className="bid_now">Bid Now</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job_descp">
                                                            <h3>Ios Shopping mobile app</h3>
                                                            <ul className="job-dt">
                                                                <li><span>$300 - $350</span></li>
                                                            </ul>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                            <ul className="skill-tags">
                                                                <li><a href="#" title="">HTML</a></li>
                                                                <li><a href="#" title="">PHP</a></li>
                                                                <li><a href="#" title="">CSS</a></li>
                                                                <li><a href="#" title="">Javascript</a></li>
                                                                <li><a href="#" title="">Wordpress</a></li>
                                                                <li><a href="#" title="">Photoshop</a></li>
                                                                <li><a href="#" title="">Illustrator</a></li>
                                                                <li><a href="#" title="">Corel Draw</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job-status-bar">
                                                            <ul className="like-com">
                                                                <li>
                                                                    <a href="#"><i className="la la-heart"></i> Like</a>
                                                                    <img src="images/liked-img.png" alt="" />
                                                                    <span>25</span>
                                                                </li>
                                                                <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                            </ul>
                                                            <a><i className="la la-eye"></i>Views 50</a>
                                                        </div>
                                                    </div> {/*post-bar end */}
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="usy-dt">
                                                                <img src="http://via.placeholder.com/50x50" alt="" />
                                                                <div className="usy-name">
                                                                    <h3>John Doe</h3>
                                                                    <span><img src="images/clock.png" alt="" />3 min ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#" title="">Edit Post</a></li>
                                                                    <li><a href="#" title="">Unsaved</a></li>
                                                                    <li><a href="#" title="">Unbid</a></li>
                                                                    <li><a href="#" title="">Close</a></li>
                                                                    <li><a href="#" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="epi-sec">
                                                            <ul className="descp">
                                                                <li><img src="images/icon8.png" alt="" /><span>Frontend Developer</span></li>
                                                                <li><img src="images/icon9.png" alt="" /><span>India</span></li>
                                                            </ul>
                                                            <ul className="bk-links">
                                                                <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                                <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                                <li><a href="#" title="" className="bid_now">Bid Now</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job_descp">
                                                            <h3>Simple Classified Site</h3>
                                                            <ul className="job-dt">
                                                                <li><span>$300 - $350</span></li>
                                                            </ul>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                            <ul className="skill-tags">
                                                                <li><a href="#" title="">HTML</a></li>
                                                                <li><a href="#" title="">PHP</a></li>
                                                                <li><a href="#" title="">CSS</a></li>
                                                                <li><a href="#" title="">Javascript</a></li>
                                                                <li><a href="#" title="">Wordpress</a></li>
                                                                <li><a href="#" title="">Photoshop</a></li>
                                                                <li><a href="#" title="">Illustrator</a></li>
                                                                <li><a href="#" title="">Corel Draw</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job-status-bar">
                                                            <ul className="like-com">
                                                                <li>
                                                                    <a href="#"><i className="la la-heart"></i> Like</a>
                                                                    <img src="images/liked-img.png" alt="" />
                                                                    <span>25</span>
                                                                </li>
                                                                <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                            </ul>
                                                            <a><i className="la la-eye"></i>Views 50</a>
                                                        </div>
                                                    </div> {/*post-bar end */}
                                                    <div className="post-bar">
                                                        <div className="post_topbar">
                                                            <div className="usy-dt">
                                                                <img src="http://via.placeholder.com/50x50" alt="" />
                                                                <div className="usy-name">
                                                                    <h3>John Doe</h3>
                                                                    <span><img src="images/clock.png" alt="" />3 min ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="ed-opts">
                                                                <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                                                                <ul className="ed-options">
                                                                    <li><a href="#" title="">Edit Post</a></li>
                                                                    <li><a href="#" title="">Unsaved</a></li>
                                                                    <li><a href="#" title="">Unbid</a></li>
                                                                    <li><a href="#" title="">Close</a></li>
                                                                    <li><a href="#" title="">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="epi-sec">
                                                            <ul className="descp">
                                                                <li><img src="images/icon8.png" alt="" /><span>Frontend Developer</span></li>
                                                                <li><img src="images/icon9.png" alt="" /><span>India</span></li>
                                                            </ul>
                                                            <ul className="bk-links">
                                                                <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                                <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                                <li><a href="#" title="" className="bid_now">Bid Now</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job_descp">
                                                            <h3>Ios Shopping mobile app</h3>
                                                            <ul className="job-dt">
                                                                <li><span>$300 - $350</span></li>
                                                            </ul>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                            <ul className="skill-tags">
                                                                <li><a href="#" title="">HTML</a></li>
                                                                <li><a href="#" title="">PHP</a></li>
                                                                <li><a href="#" title="">CSS</a></li>
                                                                <li><a href="#" title="">Javascript</a></li>
                                                                <li><a href="#" title="">Wordpress</a></li>
                                                                <li><a href="#" title="">Photoshop</a></li>
                                                                <li><a href="#" title="">Illustrator</a></li>
                                                                <li><a href="#" title="">Corel Draw</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="job-status-bar">
                                                            <ul className="like-com">
                                                                <li>
                                                                    <a href="#"><i className="la la-heart"></i> Like</a>
                                                                    <img src="images/liked-img.png" alt="" />
                                                                    <span>25</span>
                                                                </li>
                                                                <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                            </ul>
                                                            <a><i className="la la-eye"></i>Views 50</a>
                                                        </div>
                                                    </div> {/*post-bar end */}
                                                    <div className="process-comm">
                                                        <a href="#" title=""><img src="images/process-icon.png" alt="" /></a>
                                                    </div> {/*process-comm end */}
                                                </div> {/*posts-section end */}
                                            </div> {/*product-feed-tab end */}
                                            <div className="product-feed-tab" id="portfolio-dd">
                                                <div className="portfolio-gallery-sec">
                                                    <h3>Portfolio</h3>
                                                    <div className="gallery_pf">
                                                        <div className="row">
                                                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                                <div className="gallery_pt">
                                                                    <img src="http://via.placeholder.com/271x174" alt="" />
                                                                    <a href="#" title=""><img src="images/all-out.png" alt="" /></a>
                                                                </div> {/*gallery_pt end */}
                                                            </div>
                                                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                                <div className="gallery_pt">
                                                                    <img src="http://via.placeholder.com/170x170" alt="" />
                                                                    <a href="#" title=""><img src="images/all-out.png" alt="" /></a>
                                                                </div> {/*gallery_pt end */}
                                                            </div>
                                                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                                <div className="gallery_pt">
                                                                    <img src="http://via.placeholder.com/170x170" alt="" />
                                                                    <a href="#" title=""><img src="images/all-out.png" alt="" /></a>
                                                                </div> {/*gallery_pt end */}
                                                            </div>
                                                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                                <div className="gallery_pt">
                                                                    <img src="http://via.placeholder.com/170x170" alt="" />
                                                                    <a href="#" title=""><img src="images/all-out.png" alt="" /></a>
                                                                </div> {/*gallery_pt end */}
                                                            </div>
                                                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                                <div className="gallery_pt">
                                                                    <img src="http://via.placeholder.com/170x170" alt="" />
                                                                    <a href="#" title=""><img src="images/all-out.png" alt="" /></a>
                                                                </div> {/*gallery_pt end */}
                                                            </div>
                                                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                                <div className="gallery_pt">
                                                                    <img src="http://via.placeholder.com/170x170" alt="" />
                                                                    <a href="#" title=""><img src="images/all-out.png" alt="" /></a>
                                                                </div> {/*gallery_pt end */}
                                                            </div>
                                                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                                <div className="gallery_pt">
                                                                    <img src="http://via.placeholder.com/170x170" alt="" />
                                                                    <a href="#" title=""><img src="images/all-out.png" alt="" /></a>
                                                                </div> {/*gallery_pt end */}
                                                            </div>
                                                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                                <div className="gallery_pt">
                                                                    <img src="http://via.placeholder.com/170x170" alt="" />
                                                                    <a href="#" title=""><img src="images/all-out.png" alt="" /></a>
                                                                </div> {/*gallery_pt end */}
                                                            </div>
                                                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                                <div className="gallery_pt">
                                                                    <img src="http://via.placeholder.com/170x170" alt="" />
                                                                    <a href="#" title=""><img src="images/all-out.png" alt="" /></a>
                                                                </div> {/*gallery_pt end */}
                                                            </div>
                                                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                                <div className="gallery_pt">
                                                                    <img src="http://via.placeholder.com/170x170" alt="" />
                                                                    <a href="#" title=""><img src="images/all-out.png" alt="" /></a>
                                                                </div> {/*gallery_pt end */}
                                                            </div>
                                                        </div>
                                                    </div> {/*gallery_pf end */}
                                                </div> {/*portfolio-gallery-sec end */}
                                            </div> {/*product-feed-tab end */}
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

export default ImovelDetalhes;