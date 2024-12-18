import React from 'react';

import icon_fleche from '../assets/icon_fleche.svg';

import '../styles/components/button.style.css';

interface ButtonProps {
    content?: string;
    handleClick?: () => void;
    style?: string;
    classe?: string;
}

const Button: React.FC<ButtonProps> = ({ content, handleClick, style, classe='' }) => {
    return (
        <button onClick={handleClick} className={`row ${classe} ${style==='white' ? 'button_white' : 'button_black'}`}>
            <img src={icon_fleche} alt='icon fleche' />
            <p>{content}</p>
        </button>
    );
}

export default Button;