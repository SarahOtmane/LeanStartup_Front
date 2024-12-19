import React from 'react';

import Header from '../components/profil/Header';

import '../styles/pages/Profil.style.css';
import CardPoste from '../components/profil/CardPoste';

const Profil: React.FC = () =>{
    return(
        <>
            <Header />
            <main className='profil background-color padding'>
                <h1 className='text-uppercase text-align-center'>Bienvenue dans mon univers</h1>
                <CardPoste />
            </main>
        </>
    )
}

export default Profil;