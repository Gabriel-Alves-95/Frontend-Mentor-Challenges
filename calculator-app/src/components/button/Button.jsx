import React from 'react';
import './button.css';
import './button-id-01-styles.css';
import './button-id-02-styles.css';
import './button-id-03-styles.css';

function Button(props) {   
    
    return (

        <button
            type="button"
            className={`button ${props.className}`}            
            onClick={props.onClick}
        >
            {props.symbol}
        </button>

    );

}

export default Button;