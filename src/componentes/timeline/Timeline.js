import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imovel from '../imovel.jpg';
import imovel2 from '../imovel2.jpg';

class Timeline extends Component {
    render() {
        return (            
                <div className="main-ws-sec">
                    <div className="post-topbar">
                        <div className="user-picy">
                            <img src="http://via.placeholder.com/100x100" alt="" />
                        </div>
                        <div className="post-st">
                            <ul>
                                <li><a className="post_project" href="#" title="">Post a Project</a></li>
                                <li><a className="post-jb active" href="#" title="">Post a Job</a></li>
                            </ul>
                        </div>{/*--post-st end*/}
                    </div>{/*--post-topbar end*/}
                    <div className="posts-section">
                        <div className="post-bar">
                            
                            <div className="suggestion-usd">
                                <img src="http://via.placeholder.com/35x35" alt="" />
                                <div className="sgt-text">
                                    <h4>John Doe</h4>
                                    <span>PHP Developer</span>
                                </div>
                            </div>

                            <div className="post_topbar">                               
                                
                                <img src={imovel} alt="" style={{position: 'relative', float:'center', width: '100%'}} />
                                <br />
                               
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
                                    <li><img src="images/icon8.png" alt="" /><span>Boa Viagem, Niteroi - RJ</span></li>                                    
                                </ul>
                                <ul className="bk-links">
                                    <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                    <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                </ul>
                            </div>
                            <div className="job_descp">
                                <h3>Luxo Residence Palace</h3>
                                <ul className="job-dt">
                                    <li><a href="#" title="">Venda</a></li>
                                    <li><span>$ 30.000,00</span></li>                                  
                                </ul>  
                                <ul className="job-dt" style={{fontSize:'12px'}}>
                                    <li><p>IPTU </p> $ 1200000,00 </li>
                                    <li> </li>
                                    <li><p>Condomínio </p> $ 700,00 </li>           
                                </ul>                          
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                <ul className="skill-tags">
                                    <li><a href="#" title="">100 m²</a></li>
                                    <li><a href="#" title="">2 Quarto(s)</a></li>
                                    <li><a href="#" title="">1 Banheiro(s)</a></li>
                                    <li><a href="#" title="">1 Vaga(s)</a></li>
                                    <li><a href="#" title="">2 Suíte(s)</a></li>
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
                        </div>{/*--post-bar end*/}

                        <div className="post-bar">

                            <div className="suggestion-usd">
                                <img src="http://via.placeholder.com/35x35" alt="" />
                                <div className="sgt-text">
                                    <h4>John Doe</h4>
                                    <span>PHP Developer</span>
                                </div>
                            </div>

                            <div className="post_topbar">
                               
                                <Link to="/visualizarImovelDetalhes/10">
                                    <img src={imovel2} alt="" style={{position: 'relative', float:'center', width: '100%'}} />
                                </Link>    
                                
                                <br />
                              
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
                                    <li><img src="images/icon8.png" alt="" /><span>Icarai, Niteroi - RJ</span></li>                                    
                                </ul>
                                <ul className="bk-links">
                                    <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                    <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                </ul>
                            </div>
                            <div className="job_descp">
                                <h3>Pousada Sal e Sol</h3>
                                <ul className="job-dt">
                                    <li><a href="#" title="">Aluguel</a></li>
                                    <li><span>$ 1500,00</span></li>                                  
                                </ul>  
                                <ul className="job-dt" style={{fontSize:'12px'}}>
                                    <li><p>IPTU </p> $ 500 </li>
                                    <li> </li>
                                    <li><p>Condomínio </p> $ 300,00 </li>           
                                </ul>                         
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                <ul className="skill-tags">
                                    <li><a href="#" title="">100 m²</a></li>
                                    <li><a href="#" title="">2 Quarto(s)</a></li>
                                    <li><a href="#" title="">1 Banheiro(s)</a></li>
                                    <li><a href="#" title="">1 Vaga(s)</a></li>
                                    <li><a href="#" title="">2 Suíte(s)</a></li>
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
                        </div>{/*--post-bar end*/}

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
                        </div>{/*--post-bar end*/}
                        <div className="posty">
                            <div className="post-bar no-margin">
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
                            </div>{/*--post-bar end*/}
                            <div className="comment-section">
                                <div className="plus-ic">
                                    <i className="la la-plus"></i>
                                </div>
                                <div className="comment-sec">
                                    <ul>
                                        <li>
                                            <div className="comment-list">
                                                <div className="bg-img">
                                                    <img src="http://via.placeholder.com/40x40" alt="" />
                                                </div>
                                                <div className="comment">
                                                    <h3>John Doe</h3>
                                                    <span><img src="images/clock.png" alt="" /> 3 min ago</span>
                                                    <p>Lorem ipsum dolor sit amet, </p>
                                                    <a href="#" title="" className="active"><i className="fa fa-reply-all"></i>Reply</a>
                                                </div>
                                            </div>{/*--comment-list end*/}
                                            <ul>
                                                <li>
                                                    <div className="comment-list">
                                                        <div className="bg-img">
                                                            <img src="http://via.placeholder.com/40x40" alt="" />
                                                        </div>
                                                        <div className="comment">
                                                            <h3>John Doe</h3>
                                                            <span><img src="images/clock.png" alt="" /> 3 min ago</span>
                                                            <p>Hi John </p>
                                                            <a href="#" title=""><i className="fa fa-reply-all"></i>Reply</a>
                                                        </div>
                                                    </div>{/*--comment-list end*/}
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="comment-list">
                                                <div className="bg-img">
                                                    <img src="http://via.placeholder.com/40x40" alt="" />
                                                </div>
                                                <div className="comment">
                                                    <h3>John Doe</h3>
                                                    <span><img src="images/clock.png" alt="" /> 3 min ago</span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at.</p>
                                                    <a href="#" title=""><i className="fa fa-reply-all"></i>Reply</a>
                                                </div>
                                            </div>{/*--comment-list end*/}
                                        </li>
                                    </ul>
                                </div>{/*--comment-sec end*/}
                                <div className="post-comment">
                                    <div className="cm_img">
                                        <img src="http://via.placeholder.com/40x40" alt="" />
                                    </div>
                                    <div className="comment_box">
                                        <form>
                                            <input type="text" placeholder="Post a comment" />
                                            <button type="submit">Send</button>
                                        </form>
                                    </div>
                                </div>{/*--post-comment end*/}
                                
                            </div>{/*--comment-section end*/}
                        </div>{/*--posty end*/}
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