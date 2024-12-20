import React from 'react';
import logoWhite from '../../assets/logo_white.png';
import insta from '../../assets/socialMedia/inta.svg';
import fb from '../../assets/socialMedia/fb.svg';
import linkedin from '../../assets/socialMedia/linkedin.svg';
import x from '../../assets/socialMedia/x.svg';

import '../../styles/components/landingPage/FooterLanding.style.css';

const FooterLanding: React.FC = () => {

    return (
        <footer className='footerLanding padding'>
            <nav className='row justify-sp-between align-center'>
                <img src={logoWhite} alt='logo hive2Work white' />
                <ul className='row'>
                    <li><a className='color-white text-uppercase' href='#'>Services</a></li>
                    <li><a className='color-white text-uppercase' href='#'>À propos</a></li>
                    <li><a className='color-white text-uppercase' href='#'>FAQ</a></li>
                    <li><a className='color-white text-uppercase' href='#'>Newsletter</a></li>
                </ul>
            </nav>

            <div></div>

            <ul className='row'>
                <li><a href='#'><img src={insta} alt='logo insta' /></a></li>
                <li><a href='#'><img src={fb} alt='logo fb' /></a></li>
                <li><a href='#'><img src={linkedin} alt='logo linkedin' /></a></li>
                <li><a href='#'><img src={x} alt='logo x' /></a></li>

                <li><a href='#' className='color-white'>Conditions générales d’utilisation</a></li>
            </ul>
        </footer>
    );
}

export default FooterLanding;