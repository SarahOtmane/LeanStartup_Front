import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

import Logo from '../../assets/logo.png';
import Button from '../Button';

import '../../styles/components/landingPage/headerLanding.style.css';
import SelectHeader from './SelectHeader';

const HeaderLanding: React.FC = () => {
    const navigate = useNavigate();

    const [state, setState] = useState<string>('Espace étudiant');
    const handleClick = () => {
        navigate('/profil');
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
                <SelectHeader state={state} setState={setState} />
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