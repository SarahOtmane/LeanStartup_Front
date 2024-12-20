import React from 'react';

import Logo from '../../assets/logo.png';

import '../../styles/components/landingPage/headerLanding.style.css';
import SelectHeader from './SelectHeader';

const Header: React.FC = () => {

    return (
        <header className='HeaderLanding profil background-color row align-center align-center justify-sp-between padding'>
            <img alt='logo Hive2Work' src={Logo} />
            <nav className='navHeader row'>
                <ul className='row'>
                    <li><a href='#'>Trouver un job</a></li>
                    <li><a href='#'>Mon dashboard</a></li>
                    <li><a href='#'>Messagerie</a></li>
                </ul>
                <SelectHeader />
            </nav>
        </header>
    );
}

export default Header;