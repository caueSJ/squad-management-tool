import React from 'react';

import { FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './SectionTitle.scss';

const SectionTitle = props => {
    const addTitle = (props.addButton && typeof props.addButton !== "boolean") ? props.addButton : "Add";
    return (
        <>
            <div className="section-header">
                <h1 className="section-title">{props.title}</h1>
                {(props.addButton) ? 
                    <Link to="/team/new">
                        <button className="add" title={addTitle}><FiPlus /></button> 
                    </Link>
                    : '' }
            </div>
            <hr />
        </>
    )
}

export default SectionTitle