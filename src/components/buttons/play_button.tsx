import React from 'react';
import ButtonPropsInterface from "./button_props_interface";
import './button_style.css';
function PlayButton({ onClick }: ButtonPropsInterface) {
    return (
        <button onClick={() => onClick()} className='dark-button'>
            <i className="fa fa-play fa-xl" aria-hidden="true"></i>
        </button>
    );
}

export default PlayButton;