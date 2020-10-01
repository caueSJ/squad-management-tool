import React from 'react';

import './FormFields.scss';

const FormFields = props => {
    return (
        <div className="FormFields">
            {props.children}
        </div>
    );
};

export default FormFields;