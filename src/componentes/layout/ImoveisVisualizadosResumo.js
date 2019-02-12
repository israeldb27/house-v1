import React, { Component } from 'react';

class ImoveisVisualizadosResumo extends Component {
    render() {
        return (
            <div className="widget widget-jobs">
                <div className="sd-title">
                    <h3>Imóveis Visualizados</h3>
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
                    </div>{/*--job-info end*/}
                    <div className="job-info">
                        <div className="job-details">
                            <h3>Senior UI / UX Designer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                        </div>
                        <div className="hr-rate">
                            <span>$25/hr</span>
                        </div>
                    </div>{/*--job-info end*/}
                    <div className="job-info">
                        <div className="job-details">
                            <h3>Junior Seo Designer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                        </div>
                        <div className="hr-rate">
                            <span>$25/hr</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImoveisVisualizadosResumo;