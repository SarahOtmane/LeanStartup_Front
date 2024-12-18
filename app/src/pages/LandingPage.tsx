import React from 'react';

import HeaderLanding from '../components/landingPage/HeaderLanding';
import Section1 from '../components/landingPage/Section1';

const LandingPage: React.FC = () => {
    return (
        <>
            <HeaderLanding />
            <main className='landingPage background-color padding'>
                <Section1 />
            </main>
        </>
    );
}

export default LandingPage;