import React from 'react';

import './List.scss';

const List = props => {
    return (
        <ul className="List">
            {props.children}
        </ul>
    )
}

export default List;