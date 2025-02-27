import React from 'react';

import HeaderLanding from '../components/landingPage/HeaderLanding';
import Section1 from '../components/landingPage/Section1';
import Section2 from '../components/landingPage/Section2';
import Section4 from '../components/landingPage/Section4';
import FooterLanding from '../components/landingPage/FooterLanding';

import '../styles/pages/LandingPage.style.css';

const LandingPage: React.FC = () => {
    return (
        <>
            <HeaderLanding />
            <main className='landingPage background-color padding'>
                <Section1 />
                <Section2 />
                <section className='section3' id='section3'>
                    <h2 className='sous-titre text-uppercase text-align-center'>Comment ça marche ?</h2>
                    <p className='text-align-center'>Simplifie ta recherche d’alternance avec une plateforme pensée pour toi.</p>
                    <article className='row justify-sp-between text-right'>
                        <div className='image'></div>
                        <div className='text'>
                            <p className='text-uppercase color-orange'>brille !</p>
                            <h3 className='sous-titre-2 text-uppercase'>Votre duo gagnant : portfolio + lettre impactante</h3>
                            <p>Fini les lettres de motivation classiques et monotones qui saturent les recruteurs ! Connecte ton portfolio interactif à ta lettre de motivation : illustre tes arguments avec des exemples concrets en un clic.</p>
                        </div>
                    </article>
                    <article className='row justify-sp-between text-left'>
                        <div className='text'>
                            <p className='text-uppercase color-orange'>postule !</p>
                            <h3 className='sous-titre-2 text-uppercase'>Des réponses claires, un recrutement efficace</h3>
                            <p>Marre des longs silences et des candidatures qui restent sans retour ? Grâce à des recruteurs engagés et des processus transparents, reçois des réponses précises et constructives pour avancer rapidement.</p>
                        </div>
                        <div className='image'></div>
                    </article>
                    <article className='row justify-sp-between text-right'>
                        <div className='image'></div>
                        <div className='text'>
                            <p className='text-uppercase color-orange'>Reste informé !</p>
                            <h3 className='sous-titre-2 text-uppercase'>Suis l’avancement de tes candidatures</h3>
                            <p>Ne reste plus dans le flou ! Grâce à notre outil de suivi, vois en temps réel où en est chaque candidature : reçue, en cours d’examen, ou en attente de réponse. Garde le contrôle de ta recherche et reste proactif face aux recruteurs.</p>
                        </div>
                    </article>
                </section>
                <Section4 />
            </main>
            <FooterLanding />
        </>
    );
}

export default LandingPage;