import React from 'react';

import './RoundedImage.scss';

import { getInitialLetters } from '../../utils/utils';

const RoundedImage = props => {
    const borderStyle = {
        borderColor: props.borderColor,
    };

    return (
        <div className="RoundedImage">
            <div className={(props.dashed) ? 'dashed' : null}>
                {
                    props.urlImage ?
                        <img
                            width="120px"
                            height="120px"
                            src={props.urlImage}
                            alt={props.alt}
                            style={borderStyle}
                            className="content"
                        />
                        : <span className="content">{getInitialLetters(props.alt)}</span>
                }
            </div>
        </div>
    );
}

export default RoundedImage;
