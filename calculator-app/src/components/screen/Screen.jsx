import React from 'react';
import './screen.css';

function Screen(props) {    

    return (
        <div className={`calc-display-container display-theme-${props.theme}`}>
            <div className={`calc-display theme-${props.theme}`}>{props.value}</div>
        </div>
    );

}

export default Screen;