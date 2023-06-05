import React from 'react';
import ButtonPropsInterface from "./button_props_interface";

function StopButton({ onClick }: ButtonPropsInterface) {
    return (
        <button className='dark-button' onClick={() =>onClick()}>
            <i className="fa fa-stop fa-xl" aria-hidden="true"></i>
        </button>
    );
}

export default StopButton;