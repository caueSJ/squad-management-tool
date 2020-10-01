import React, { useRef, useState } from 'react';

import './InputTag.scss';
import { VscClose } from "react-icons/vsc";

const InputTag = props => {
    let tagInput = null;
    const inputTag = useRef(null);
    const [tags, setTags] = useState(['BR','PTW', 'Attack']);

    const removeTag = i => {
        const tagList = [...tags];
        tagList.splice(i, 1);
        setTags(tagList);
    };

    const inputKeyDown = e => {
        const val = e.target.value;
        // On my keyboard (ABNT2), the key ";" has the code 191,
        // but in key code table, semicolon code is 186.
        // On my keyboard, the key which that is 186 is the "Ç".
        // You can test this on: https://keycode.info/
        if ((e.keyCode === 13 || e.keyCode === 186) && val.trim().length > 0) {
            if (tags.find(tag => tag === val)) {
                return;
            }
            setTags([...tags, val]);
            e.target.value = null;
        }
    };

    const label = props.label ?
        <div className="label">
            <label>{props.label}</label>
        </div>
        : null;

    return (
        <div className="Input">
            {label}
            <div className="InputTag">
                <div className="list-tag" onClick={() => inputTag.current.focus()}>
                    {tags.map((tag, i) => (
                        <span key={tag} className="tag">
                            {tag}
                            <button id={"remove_" + tag} className="remove-icon" type="button" onClick={() => { removeTag(i); }}>
                                <VscClose size="20" />
                            </button>
                        </span>
                    ))}
                    <input ref={inputTag} type="text" onKeyDown={inputKeyDown} />                    
                </div>
            </div>
        </div>
    );
}

export default InputTag;