import React from 'react';

import './ListGroup.scss';

const ListGroup = props => {
    return (
        <div className="ListGroupContainer">
            <div className="ListGroup">
                <h3 className="title">{props.title}</h3>
                {props.children}
            </div>
        </div>
    )
}

export default ListGroup;