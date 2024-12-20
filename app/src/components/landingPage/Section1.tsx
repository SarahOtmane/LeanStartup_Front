import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';

import '../../styles/components/landingPage/Section1.style.css';

const Section1: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    }

    return (
        <section className='section1 row justify-sp-between' id='section1'>
            <div className='gauche'>
                <h1 className='titre'>Étudiants et entreprises, enfin connectés <span className='color-white'>efficacement !</span></h1>
                <p className='color-white'>Cherche et trouve l’alternance des tes rêves en mettant tes compétences en avant. Découvre une multitudes d’offres partout en France !</p>
                <Button 
                    content='Accéder au site' 
                    handleClick={handleClick}
                    style='black'
                />
            </div>
            <div className='droite'>
                <div className='row haut justify-sp-between'>
                    <div>
                        <h3 className='color-white sous-titre-2'>Trouve des offres qui te correspond !</h3>
                    </div>
                    <div>
                        <h3 className='color-white sous-titre-2'>Reçoit des retours <span className='color-lilas'>rapidement</span>.</h3>
                    </div>
                </div>
                <div className='bas row justify-sp-between'>
                    <article>
                        <h3 className='sous-titre-2'>Avec l’application Hive2Work, choisis les offres que tu aimes <span className='color-orange'>facilement</span>.</h3>
                        <Button 
                            content='Télécharger l’application' 
                            handleClick={handleClick}
                            style='white'
                        />
                    </article>
                    <p>Pose toi et swipe !</p>
                </div>
            </div>
        </section>
    );
}

export default Section1;