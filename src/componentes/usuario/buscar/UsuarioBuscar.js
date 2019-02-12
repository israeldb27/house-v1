import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnuncioImoveis from '../../layout/AnuncioImoveis';
import AnuncioImobiliaria from '../../layout/AnuncioImobiliaria';

class UsuarioBuscar extends Component {
    constructor(props) {
        super(props);

    }
   

    render() {
        return (
            <div>
            <div className="search-sec">
                <div className="container">
                    <div className="search-box">
                        <form>
                            <input type="text" name="search" placeholder="Chave Busca Usuario"/>
                            <button type="submit">Buscar</button>
                        </form>
                    </div>{/*search-box end*/}
                </div>
            </div>{/*search-sec end*/}    

            <main>
                <div className="main-section">
                    <div className="container">
                        <div className="main-section-data">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="filter-secs">
                                        <div className="filter-heading">
                                            <h3>Filtros</h3>
                                            <a href="#" title="">Clear all filters</a>
                                        </div>{/*filter-heading end*/}
                                        <div className="paddy">
                                            <div className="filter-dd">
                                                <div className="filter-ttl">
                                                    <h3>Skills</h3>
                                                    <a href="#" title="">Clear</a>
                                                </div>
                                                <form>
                                                    <input type="text" name="search-skills" placeholder="Search skills" />
                                                </form>
                                            </div>
                                            <div className="filter-dd">
                                                <div className="filter-ttl">
                                                    <h3>Availabilty</h3>
                                                    <a href="#" title="">Clear</a>
                                                </div>
                                                <ul className="avail-checks">
                                                    <li>
                                                        <input type="radio" name="cc" id="c1" />
                                                        <label for="c1">
                                                            <span></span>
                                                        </label>
                                                        <small>Hourly</small>
                                                    </li>
                                                    <li>
                                                        <input type="radio" name="cc" id="c2" />
                                                        <label for="c2">
                                                            <span></span>
                                                        </label>
                                                        <small>Part Time</small>
                                                    </li>
                                                    <li>
                                                        <input type="radio" name="cc" id="c3" />
                                                        <label for="c3">
                                                            <span></span>
                                                        </label>
                                                        <small>Full Time</small>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="filter-dd">
                                                <div className="filter-ttl">
                                                    <h3>Job Type</h3>
                                                    <a href="#" title="">Clear</a>
                                                </div>
                                                <form className="job-tp">
                                                    <select>
                                                        <option>Select a job type</option>
                                                        <option>Select a job type</option>
                                                        <option>Select a job type</option>
                                                        <option>Select a job type</option>
                                                    </select>
                                                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                </form>
                                            </div>
                                            <div className="filter-dd">
                                                <div className="filter-ttl">
                                                    <h3>Pay Rate / Hr ($)</h3>
                                                    <a href="#" title="">Clear</a>
                                                </div>
                                                <div className="rg-slider">
                                                    <input className="rn-slider slider-input" type="hidden" value="5,50" />
                                                </div>
                                                <div className="rg-limit">
                                                    <h4>1</h4>
                                                    <h4>100+</h4>
                                                </div>{/*rg-limit end*/}
                                            </div>
                                            <div className="filter-dd">
                                                <div className="filter-ttl">
                                                    <h3>Experience Level</h3>
                                                    <a href="#" title="">Clear</a>
                                                </div>
                                                <form className="job-tp">
                                                    <select>
                                                        <option>Select a experience level</option>
                                                        <option>3 years</option>
                                                        <option>4 years</option>
                                                        <option>5 years</option>
                                                    </select>
                                                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                </form>
                                            </div>
                                            <div className="filter-dd">
                                                <div className="filter-ttl">
                                                    <h3>Countries</h3>
                                                    <a href="#" title="">Clear</a>
                                                </div>
                                                <form className="job-tp">
                                                    <select>
                                                        <option>Select a country</option>
                                                        <option>United Kingdom</option>
                                                        <option>United States</option>
                                                        <option>Russia</option>
                                                    </select>
                                                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                </form>
                                            </div>
                                        </div>
                                    </div>{/*filter-secs end*/}
                                </div>
                                <div className="col-lg-6">
                                    <div className="main-ws-sec">
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
                                                        <li><a href="#" title="">Photoshop</a></li>
                                                        <li><a href="#" title="">Illustrator</a></li>
                                                        <li><a href="#" title="">Corel Draw</a></li>
                                                    </ul>
                                                </div>
                                                <div className="job-status-bar">
                                                    <ul className="like-com">
                                                        <li>
                                                            <a href="#" title="" className="active"><i className="la la-heart"></i> Like</a>
                                                            <img src="images/liked-img.png" alt="" />
                                                            <span>25</span>
                                                        </li>
                                                        <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                    </ul>
                                                    <a><i className="la la-eye"></i>Views 50</a>
                                                </div>
                                            </div>{/*post-bar end*/}
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
                                                            <a href="#" title="" className="active"><i className="la la-heart"></i> Like</a>
                                                            <img src="images/liked-img.png" alt="" />
                                                            <span>25</span>
                                                        </li>
                                                        <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                    </ul>
                                                    <a><i className="la la-eye"></i>Views 50</a>
                                                </div>
                                            </div>{/*post-bar end*/}
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
                                                        <li><a href="#" title="">Photoshop</a></li>
                                                        <li><a href="#" title="">Illustrator</a></li>
                                                        <li><a href="#" title="">Corel Draw</a></li>
                                                    </ul>
                                                </div>
                                                <div className="job-status-bar">
                                                    <ul className="like-com">
                                                        <li>
                                                            <a href="#" title="" className="active"><i className="la la-heart"></i> Like</a>
                                                            <img src="images/liked-img.png" alt="" />
                                                            <span>25</span>
                                                        </li>
                                                        <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                    </ul>
                                                    <a><i className="la la-eye"></i>Views 50</a>
                                                </div>
                                            </div>{/*post-bar end*/}
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
                                                            <a href="#" title="" className="active"><i className="la la-heart"></i> Like</a>
                                                            <img src="images/liked-img.png" alt="" />
                                                            <span>25</span>
                                                        </li>
                                                        <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                    </ul>
                                                    <a><i className="la la-eye"></i>Views 50</a>
                                                </div>
                                            </div>{/*post-bar end*/}
                                            <div className="process-comm">
                                                <div className="spinner">
                                                    <div className="bounce1"></div>
                                                    <div className="bounce2"></div>
                                                    <div className="bounce3"></div>
                                                </div>
                                            </div>{/*process-comm end*/}
                                        </div>{/*posts-section end*/}
                                    </div>{/*main-ws-sec end*/}
                                </div>
                                <div className="col-lg-3">
                                    <div className="right-sidebar">
                                        <AnuncioImoveis />

                                        <AnuncioImobiliaria />

                                        <div className="widget widget-jobs">
                                            <div className="sd-title">
                                                <h3>Top Jobs</h3>
                                                <i className="la la-ellipsis-v"></i>
                                            </div>
                                            <div className="jobs-list">
                                                <div className="job-info">
                                                    <div className="job-details">
                                                        <h3>Senior Product Designer</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                    </div>
                                                    <div className="hr-rate">
                                                        <span>$25/hr</span>
                                                    </div>
                                                </div>{/*job-info end*/}
                                                <div className="job-info">
                                                    <div className="job-details">
                                                        <h3>Senior UI / UX Designer</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                    </div>
                                                    <div className="hr-rate">
                                                        <span>$25/hr</span>
                                                    </div>
                                                </div>{/*job-info end*/}
                                                <div className="job-info">
                                                    <div className="job-details">
                                                        <h3>Junior Seo Designer</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                    </div>
                                                    <div className="hr-rate">
                                                        <span>$25/hr</span>
                                                    </div>
                                                </div>{/*job-info end*/}
                                                <div className="job-info">
                                                    <div className="job-details">
                                                        <h3>Senior PHP Designer</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                    </div>
                                                    <div className="hr-rate">
                                                        <span>$25/hr</span>
                                                    </div>
                                                </div>{/*job-info end*/}
                                                <div className="job-info">
                                                    <div className="job-details">
                                                        <h3>Senior Developer Designer</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                    </div>
                                                    <div className="hr-rate">
                                                        <span>$25/hr</span>
                                                    </div>
                                                </div>{/*job-info end*/}
                                            </div>{/*jobs-list end*/}
                                        </div>{/*widget-jobs end*/}
                                        <div className="widget widget-jobs">
                                            <div className="sd-title">
                                                <h3>Most Viewed This Week</h3>
                                                <i className="la la-ellipsis-v"></i>
                                            </div>
                                            <div className="jobs-list">
                                                <div className="job-info">
                                                    <div className="job-details">
                                                        <h3>Senior Product Designer</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                    </div>
                                                    <div className="hr-rate">
                                                        <span>$25/hr</span>
                                                    </div>
                                                </div>{/*job-info end*/}
                                                <div className="job-info">
                                                    <div className="job-details">
                                                        <h3>Senior UI / UX Designer</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                    </div>
                                                    <div className="hr-rate">
                                                        <span>$25/hr</span>
                                                    </div>
                                                </div>{/*job-info end*/}
                                                <div className="job-info">
                                                    <div className="job-details">
                                                        <h3>Junior Seo Designer</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                    </div>
                                                    <div className="hr-rate">
                                                        <span>$25/hr</span>
                                                    </div>
                                                </div>{/*job-info end*/}
                                            </div>{/*jobs-list end*/}
                                        </div>{/*widget-jobs end*/}
                                    </div>{/*right-sidebar end*/}
                                </div>
                            </div>
                        </div>{/* main-section-data end*/}
                    </div>
                </div>
            </main>

        </div>
        );
    }
}


export default UsuarioBuscar;