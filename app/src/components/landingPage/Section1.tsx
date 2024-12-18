import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';

import '../../styles/components/landingPage/Section1.style.css';

const Section1: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }

    return (
        <section className='section1 row justify-sp-between'>
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
                        <h2 className='color-white'>Trouve des offres qui te correspond !</h2>
                    </div>
                    <div>
                        <h2 className='color-white'>Reçoit des retours <span className='color-lilas'>rapidement</span>.</h2>
                    </div>
                </div>
                <div className='bas row justify-sp-between'>
                    <article>
                        <h2>Avec l’application Hive2Work, choisis les offres que tu aimes <span className='color-orange'>facilement</span>.</h2>
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