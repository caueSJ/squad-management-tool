import React from 'react';

import './RoundedImage.scss';

const RoundedImage = props => {
    const borderStyle = {
        borderColor: props.borderColor,
    };

    return (
        <div className="RoundedImage">
            <div className={(props.dashed) ? 'dashed' : false}>
                <img
                    width="120px"
                    height="120px"
                    src={props.urlImage}
                    alt={props.alt}
                    style={borderStyle}
                />                    
            </div>
        </div>
    );
}

export default RoundedImage;
