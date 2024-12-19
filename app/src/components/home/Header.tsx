import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import Button from '../Button';

import '../../styles/components/landingPage/headerLanding.style.css';

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
                    <li><a href='#'>Trouver un job</a></li>
                    <li><a href='#'>Mon dashboard</a></li>
                    <li><a href='#'>Messagerie</a></li>
                </ul>
                <Button 
                    content='Accéder au site' 
                    handleClick={handleClick}
                    style='black'
                />
                <Button 
                    content={`Se connecter`}
                    handleClick={handleClick}
                    style='white'
                    profil={true}
                />
            </nav>
        </header>
    );
}

export default HeaderLanding;