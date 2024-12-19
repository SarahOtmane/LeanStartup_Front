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
}

const Button: React.FC<ButtonProps> = ({ content, handleClick, style, classe='', profil=false }) => {
    return (
        <button onClick={handleClick} className={`row ${classe} ${style==='white' ? 'button_white' : 'button_black'}`}>
            {!profil && <img src={icon_fleche} alt='icon fleche' />}
            {profil && <img src={icon_profil} alt='icon fleche' />}
            <p>{content}</p>
        </button>
    );
}

export default Button;