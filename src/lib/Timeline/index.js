import React, {Component} from 'react';
import './tiny-timeline.css';

export default class Timeline extends Component{

    render(){
        return (
            <div className="tiny-timeline">
                <div className="tiny-timeline-container tiny-timeline-left">
                    <div className="tiny-timeline-badge">
                    </div>
                    <div className="tiny-timeline-panel">
                        <h2>2017</h2>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
                <div className="tiny-timeline-container tiny-timeline-right">
                    <div className="tiny-timeline-badge">
                    </div>
                    <div className="tiny-timeline-panel">
                        <h2>2017</h2>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
            </div>
        );
    }
}