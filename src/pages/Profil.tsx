import React from 'react';

import Header from '../components/profil/Header';

import '../styles/pages/Profil.style.css';
import CardPoste from '../components/profil/CardPoste';
import Avis from '../components/profil/Avis';
import FooterLanding from '../components/landingPage/FooterLanding';
import Competences from '../components/profil/Competences';

const Profil: React.FC = () =>{
    return(
        <>
            <Header />
            <main className='profil background-color padding'>
                <h1 className='text-uppercase text-align-center'>Bienvenue dans mon univers</h1>
                <CardPoste />
                <Competences />
                <Avis />
            </main>
            <FooterLanding />
        </>
    )
}

export default Profil;