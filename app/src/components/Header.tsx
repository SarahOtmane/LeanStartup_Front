import React from 'react';

import Logo from '../assets/logo.png';

const Header: React.FC = () => {
    return (
        <header>
            <img alt='logo Hive2Work' src={Logo} />
        </header>
    );
}

export default Header;