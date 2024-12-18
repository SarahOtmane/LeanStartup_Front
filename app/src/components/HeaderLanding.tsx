import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/logo.png';
import Button from './Button';

import '../styles/components/headerLanding.style.css';

const HeaderLanding: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }

    return (
        <header className='HeaderLanding background-color row align-center align-center justify-sp-between padding'>
            <img alt='logo Hive2Work' src={Logo} />
            <nav className='navHeader row'>
                <ul className='row'>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>À propos</a></li>
                    <li><a href='#'>FAQ</a></li>
                    <li><a href='#'>Newsletter</a></li>
                </ul>
                <Button 
                    content='Accéder au site' 
                    handleClick={handleClick}
                    style='black'
                />
                <Button 
                    content={`Télécharger l'application`}
                    handleClick={handleClick}
                    style='white'
                />
            </nav>
        </header>
    );
}

export default HeaderLanding;