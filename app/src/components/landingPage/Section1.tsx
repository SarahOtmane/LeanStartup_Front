import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';

const Section1: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }

    return (
        <section className='section1 row'>
            <div>
                <h1>Étudiants et entreprises, enfin connectés efficacement !</h1>
                <p>Cherche et trouve l’alternance des tes rêves en mettant tes compétences en avant. Découvre une multitudes d’offres partout en France !</p>
                <Button 
                    content='Accéder au site' 
                    handleClick={handleClick}
                    style='black'
                />
            </div>
            <div>
                <div className='row'>
                    <div>
                        <h2>Trouve des offres qui te correspond !</h2>
                    </div>
                    <div>
                        <h2>Reçoit des retours rapidement.</h2>
                    </div>
                </div>
                <div>
                    <h2>Avec l’application Hive2Work, choisis les offres que tu aimes facilement.</h2>
                    <Button 
                        content='Télécharger l’application' 
                        handleClick={handleClick}
                        style='white'
                    />
                </div>
            </div>
        </section>
    );
}

export default Section1;