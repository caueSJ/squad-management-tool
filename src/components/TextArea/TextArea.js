import React from 'react';

import './TextArea.scss';

const TextArea = props => {
    return (
        <div className="TextArea">
            <textarea
                name={props.name}
                autoComplete={props.autocomplete}
                cols={props.cols}
                rows={props.rows}
                placeholder={props.placeholder}
                maxLength={props.maxlength}
                required={props.required}
            >
                {props.value}
            </textarea>
        </div>
    )
}

export default TextArea;