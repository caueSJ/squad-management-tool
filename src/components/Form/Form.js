import React from 'react';

import './Form.scss';

const Form = props => {
    return (
        <div className="Form">
            <form onSubmit={props.submitFor} autoComplete="off">
                {props.children}
            </form>
        </div>
    )
}

export default Form;