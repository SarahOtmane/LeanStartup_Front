import React from 'react';

import Logo from '../assets/logo.png';

import '../styles/components/header.style.css';

const HeaderLanding: React.FC = () => {
    return (
        <header className='Header row align-center'>
            <img alt='logo Hive2Work' src={Logo} />
            <nav>
                <ul className='row'>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>À propos</a></li>
                    <li><a href='#'>FAQ</a></li>
                    <li><a href='#'>Newsletter</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderLanding;