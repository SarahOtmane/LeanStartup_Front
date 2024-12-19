import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';

import '../../styles/components/landingPage/Section4.style.css';

const Section4: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }

    return (
        <section className='section4'>
            <h2 className='sous-titre text-uppercase text-align-center'>Reste informé(e) avec notre newsletter</h2>
            <p className='text-align-center margin-auto'>Ne manque aucune opportunité pour booster ta recherche d’alternance et ta carrière. <br></br> Inscris-toi à notre newsletter et reçois directement dans ta boîte mail</p>
            <input type='email' placeholder='Ton adresse mail' />
            <Button 
                content={`Je m'abonne`}
                handleClick={handleClick}
                style='black'
            />
        </section>
    );
}

export default Section4;