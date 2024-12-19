import React from 'react';

import icon_fleche from '../assets/fleche_button.svg';
import icon_profil from '../assets/icon_profil.svg';

import '../styles/components/button.style.css';

interface ButtonProps {
    content?: string;
    handleClick?: () => void;
    style?: string;
    classe?: string;
    profil?: boolean;
    buttonSlect?: boolean;
}

const Button: React.FC<ButtonProps> = ({ content, handleClick, style, classe='', profil=false, buttonSlect=false }) => {
    return (
        <button onClick={handleClick} className={`row ${classe} ${style==='white' ? 'button_white' : 'button_black'} ${buttonSlect ? 'button_select' : ''}`}>
            {(!profil && !buttonSlect) && <img src={icon_fleche} alt='icon fleche' />}
            {profil && <img src={icon_profil} alt='icon fleche' />}
            <p>{content}</p>
            {buttonSlect && 
                <svg width="25" height="30" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.77 7.08545L10.6083 12.2471C9.99873 12.8567 9.00123 12.8567 8.39165 12.2471L3.22998 7.08545" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
        </button>
    );
}

export default Button;