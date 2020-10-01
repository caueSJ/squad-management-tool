import React from 'react';

import './ListItem.scss';

const ListItem = props => {
    const showInfo = (props.info) ? <span className="info">{props.info}</span> : '';

    return (
        <li className="ListItem">
            {props.children}
            {showInfo}
        </li>
    )
}

export default ListItem;