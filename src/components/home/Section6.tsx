import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

import '../../styles/components/home/section6.style.css';

const Section6: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }

    return (
        <section className='section6'>
            <article className='text-align-center'>
                <h2 className='bold text-uppercase'>Ils ont trouvé leur alternance !</h2>
                <p>Optimise ta recherche et décroche l'alternance qui te correspond !</p>
            </article>

            <div className='row justify-sp-between'>
                <div className='gauche'>
                    <div className='image'></div>
                    <h3 className='semi-bold'>"Mon alternance ? Une vraie réussite grâce à cet outil !"</h3>
                    <p>Franchement, cette plateforme m’a vraiment aidé. J’ai trouvé mon alternance super vite et sans prise de tête. Je recommande à fond !</p>
                    <Button 
                        content={`Lire davantage`}
                        handleClick={handleClick}
                        style='black'
                    />
                </div>
                <div className='droite'>
                    <article className='first row justify-sp-between'>
                        <div className='image'></div>
                        <div>
                            <span>08/07/2024</span>
                            <p>"C’est ici que j’ai décroché mon poste : simple, clair, efficace."</p>
                        </div>
                    </article>
                    <article className='second row justify-sp-between'>
                        <div className='image'></div>
                        <div>
                            <span>13/12/2024</span>
                            <p>"J’ai enfin décroché mon contrat ici !"</p>
                        </div>
                    </article>
                    <article className='third row justify-sp-between'>
                        <div className='image'></div>
                        <div>
                            <span>26/11/2024</span>
                            <p>"Alternance trouvée, défi relevé !"</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Section6;