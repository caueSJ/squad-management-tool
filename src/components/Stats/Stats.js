import React from 'react';

import './Stats.scss';

const Stats = props => {
    return (
        <div className="Stats">
            <div className="container">
                <h3 className="title">{props.title}</h3>
                <div className="wrapper-img-stats">
                    {props.children}    
                    <h3 className="percentage">{props.percentage.toFixed(2)}%</h3>
                </div>                
            </div>
        </div>
    );
}

export default Stats;