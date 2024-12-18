import React from 'react';

import HeaderLanding from '../components/landingPage/HeaderLanding';
import Section1 from '../components/landingPage/Section1';
import Section2 from '../components/landingPage/Section2';

const LandingPage: React.FC = () => {
    return (
        <>
            <HeaderLanding />
            <main className='landingPage background-color padding'>
                <Section1 />
                <Section2 />
            </main>
        </>
    );
}

export default LandingPage;