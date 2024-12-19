import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import Accordion from './Accordion';

import fleche from '../../assets/fleche.svg';

import '../../styles/components/landingPage/Section2.style.css';

const Section2: React.FC = () => {
    const navigate = useNavigate();

    const [btnSelected, setBtnSelected] = useState('avantages');

    const handleClick = () => {
        navigate('/');
    }

    const selectBtn = (e: React.MouseEvent<HTMLButtonElement>) => { 
        setBtnSelected(e.currentTarget.id);  
    };

    return (
        <section className='section2 row justify-sp-between'>
            <div className='gauche'>
                <article className='row'>
                    <h2 className='sous-titre text-uppercase'>Valorise tes projets et transforme-les en <span className='color-lilas'>opportunités</span></h2>
                    <img src={fleche} alt='icon fleche' />
                </article>
                <div className='row content justify-sp-between'>
                    <article>   
                        <p className='parag'>
                            Commence à personnaliser ton profil pour mettre en avant ton parcours et tes projets,  et de te démarquer auprès des recruteurs.
                        </p>
                        <Button 
                            content={`C'est parti !`}
                            handleClick={handleClick}
                            style='white'
                        />
                    </article>
                    <div className='background-image'></div>
                </div>
            </div>
            <div className='droite'>
                <div className='row justify-sp-between btn'>
                    <article className={btnSelected==='avantages' ? 'selected' : ''}><button className={`text-uppercase ${btnSelected==='avantages' ? 'selected' : ''}`} onClick={selectBtn} id='avantages'>avantages</button></article>
                    <article className={btnSelected==='pourquoi' ? 'selected' : ''}><button className={`text-uppercase ${btnSelected==='pourquoi' ? 'selected' : ''}`} onClick={selectBtn} id='pourquoi'>Pourquoi ?</button></article>
                    <article className={btnSelected==='statistiques' ? 'selected' : ''}><button className={`text-uppercase ${btnSelected==='statistiques' ? 'selected' : ''}`} onClick={selectBtn} id='statistiques'>statistiques</button></article>
                </div>

                {btnSelected === 'avantages' &&(<Accordion />)}
            </div>
        </section>
    );
}

export default Section2;