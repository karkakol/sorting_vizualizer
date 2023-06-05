import React from 'react';
import './text_button_style.css';

interface TextButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const TextButton: React.FC<TextButtonProps> = ({ onClick, children }) => {
    return (
        <button className="text-button" onClick={onClick}>
            {children}
        </button>
    );
};

export default TextButton;