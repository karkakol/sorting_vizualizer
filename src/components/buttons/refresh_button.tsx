import React from 'react';
import ButtonPropsInterface from "./button_props_interface";



function RefreshButton({ onClick }: ButtonPropsInterface) {
    return (
        <button
            onClick={ () =>onClick()}
            className='dark-button'
        >


            <i className="fas fa-sync-alt fa-xl"></i>
        </button>
    );
}

export default RefreshButton;

export {}; // Add this line to mark the file as a module