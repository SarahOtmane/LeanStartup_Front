import React from 'react';

import Header from '../components/home/Header';
import Section1 from '../components/landingPage/Section1';

import '../styles/pages/home.style.css';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <main className='home background-color padding'>
                <Section1 />
            </main>
        </>
    );
}

export default Home;