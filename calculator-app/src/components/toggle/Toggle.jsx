import React from 'react';
import './toggle.css';

function Toggle(props) {    

    return (
        <input
            type="range"
            min={1}
            max={3}
            step={1}                 
            value={`0${props.theme}`}             
            className={`toggle toggle-theme-${props.theme}`}
            id="toggle"
            onChange={ () => props.onChange() }                          
        />
    );

}

export default Toggle;