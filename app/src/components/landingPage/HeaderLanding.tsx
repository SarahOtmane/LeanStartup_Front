import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import Button from '../Button';

import '../../styles/components/landingPage/headerLanding.style.css';

const HeaderLanding: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    }

    return (
        <header className='HeaderLanding background-color row align-center align-center justify-sp-between padding'>
            <img alt='logo Hive2Work' src={Logo} />
            <nav className='navHeader row'>
                <ul className='row'>
                    <li><a href='#section1'>Services</a></li>
                    <li><a href='#section3'>À propos</a></li>
                    <li><a href='#section4'>Newsletter</a></li>
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