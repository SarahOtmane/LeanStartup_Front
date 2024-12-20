import React from 'react';

import photo from '../../assets/photo.png';

import '../../styles/components/profil/CardPoste.style.css';

const CardPoste: React.FC = () => {

    return (
        <section className='CardPoste row justify-sp-between'>
            <div className='photoProfil column align-center'>
                <img alt='photo de profil' src={photo} />
                <p className='text-uppercase bold'>Emma Morel</p>
                <span>23 ans</span>
                <div>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.228 1.4325L13.988 4.9525C14.228 5.4425 14.868 5.9125 15.408 6.0025L18.598 6.5325C20.638 6.8725 21.118 8.3525 19.648 9.8125L17.168 12.2925C16.748 12.7125 16.518 13.5225 16.648 14.1025L17.358 17.1725C17.918 19.6025 16.628 20.5425 14.478 19.2725L11.488 17.5025C10.948 17.1825 10.058 17.1825 9.50796 17.5025L6.51796 19.2725C4.37796 20.5425 3.07796 19.5925 3.63796 17.1725L4.34796 14.1025C4.47796 13.5225 4.24796 12.7125 3.82796 12.2925L1.34796 9.8125C-0.112044 8.3525 0.357956 6.8725 2.39796 6.5325L5.58796 6.0025C6.11796 5.9125 6.75796 5.4425 6.99796 4.9525L8.75796 1.4325C9.71796 -0.4775 11.278 -0.4775 12.228 1.4325Z" fill="#FFD15C"/>
                    </svg>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.228 1.4325L13.988 4.9525C14.228 5.4425 14.868 5.9125 15.408 6.0025L18.598 6.5325C20.638 6.8725 21.118 8.3525 19.648 9.8125L17.168 12.2925C16.748 12.7125 16.518 13.5225 16.648 14.1025L17.358 17.1725C17.918 19.6025 16.628 20.5425 14.478 19.2725L11.488 17.5025C10.948 17.1825 10.058 17.1825 9.50796 17.5025L6.51796 19.2725C4.37796 20.5425 3.07796 19.5925 3.63796 17.1725L4.34796 14.1025C4.47796 13.5225 4.24796 12.7125 3.82796 12.2925L1.34796 9.8125C-0.112044 8.3525 0.357956 6.8725 2.39796 6.5325L5.58796 6.0025C6.11796 5.9125 6.75796 5.4425 6.99796 4.9525L8.75796 1.4325C9.71796 -0.4775 11.278 -0.4775 12.228 1.4325Z" fill="#FFD15C"/>
                    </svg>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.228 1.4325L13.988 4.9525C14.228 5.4425 14.868 5.9125 15.408 6.0025L18.598 6.5325C20.638 6.8725 21.118 8.3525 19.648 9.8125L17.168 12.2925C16.748 12.7125 16.518 13.5225 16.648 14.1025L17.358 17.1725C17.918 19.6025 16.628 20.5425 14.478 19.2725L11.488 17.5025C10.948 17.1825 10.058 17.1825 9.50796 17.5025L6.51796 19.2725C4.37796 20.5425 3.07796 19.5925 3.63796 17.1725L4.34796 14.1025C4.47796 13.5225 4.24796 12.7125 3.82796 12.2925L1.34796 9.8125C-0.112044 8.3525 0.357956 6.8725 2.39796 6.5325L5.58796 6.0025C6.11796 5.9125 6.75796 5.4425 6.99796 4.9525L8.75796 1.4325C9.71796 -0.4775 11.278 -0.4775 12.228 1.4325Z" fill="#FFD15C"/>
                    </svg>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.228 1.4325L13.988 4.9525C14.228 5.4425 14.868 5.9125 15.408 6.0025L18.598 6.5325C20.638 6.8725 21.118 8.3525 19.648 9.8125L17.168 12.2925C16.748 12.7125 16.518 13.5225 16.648 14.1025L17.358 17.1725C17.918 19.6025 16.628 20.5425 14.478 19.2725L11.488 17.5025C10.948 17.1825 10.058 17.1825 9.50796 17.5025L6.51796 19.2725C4.37796 20.5425 3.07796 19.5925 3.63796 17.1725L4.34796 14.1025C4.47796 13.5225 4.24796 12.7125 3.82796 12.2925L1.34796 9.8125C-0.112044 8.3525 0.357956 6.8725 2.39796 6.5325L5.58796 6.0025C6.11796 5.9125 6.75796 5.4425 6.99796 4.9525L8.75796 1.4325C9.71796 -0.4775 11.278 -0.4775 12.228 1.4325Z" fill="#FFD15C"/>
                    </svg>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.228 1.4325L13.988 4.9525C14.228 5.4425 14.868 5.9125 15.408 6.0025L18.598 6.5325C20.638 6.8725 21.118 8.3525 19.648 9.8125L17.168 12.2925C16.748 12.7125 16.518 13.5225 16.648 14.1025L17.358 17.1725C17.918 19.6025 16.628 20.5425 14.478 19.2725L11.488 17.5025C10.948 17.1825 10.058 17.1825 9.50796 17.5025L6.51796 19.2725C4.37796 20.5425 3.07796 19.5925 3.63796 17.1725L4.34796 14.1025C4.47796 13.5225 4.24796 12.7125 3.82796 12.2925L1.34796 9.8125C-0.112044 8.3525 0.357956 6.8725 2.39796 6.5325L5.58796 6.0025C6.11796 5.9125 6.75796 5.4425 6.99796 4.9525L8.75796 1.4325C9.71796 -0.4775 11.278 -0.4775 12.228 1.4325Z" fill="#FFD15C"/>
                    </svg>
                </div>
            </div>
            <div className='description'>
                <article className='row justify-sp-between'>
                    <h2>Je postule pour être</h2>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.0399 3.02001L8.15988 10.9C7.85988 11.2 7.55988 11.79 7.49988 12.22L7.06988 15.23C6.90988 16.32 7.67988 17.08 8.76988 16.93L11.7799 16.5C12.1999 16.44 12.7899 16.14 13.0999 15.84L20.9799 7.96001C22.3399 6.60001 22.9799 5.02001 20.9799 3.02001C18.9799 1.02001 17.3999 1.66001 16.0399 3.02001Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.9102 4.15002C15.5802 6.54002 17.4502 8.41002 19.8502 9.09002" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </article>
                <p className='bold color-black'>Direction Artistique - Graphiste</p>
                <h2>Introduction</h2>
                <p className='bold'>Salut, moi c'est Emma !</p>
                <p className='descrip'>Étudiante en Master Direction Artistique, je suis passionnée par le design graphique et digital. Avec un œil créatif et une envie constante de repousser les limites, je transforme les idées en projets visuels marquants. Si vous voulez en savoir plus sur mon parcours et mes réalisations, vous êtes au bon endroit !</p>
                <div className='btn row'>
                    <button className='row'>
                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="30" height="30" rx="15" fill="#E82B89"/>
                            <path d="M12.6665 14.5H17.3332" stroke="white" strokeWidth="1.22" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.6668 19.7867H14.3335L17.3002 21.76C17.7402 22.0533 18.3335 21.74 18.3335 21.2067V19.7867C20.3335 19.7867 21.6668 18.4533 21.6668 16.4533V12.4533C21.6668 10.4533 20.3335 9.12 18.3335 9.12H11.6668C9.66683 9.12 8.3335 10.4533 8.3335 12.4533V16.4533C8.3335 18.4533 9.66683 19.7867 11.6668 19.7867Z" stroke="white" strokeWidth="1.22" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p>Prendre contact</p>
                    </button>
                    <button className='row'>
                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="30" height="30" rx="15" fill="#74A355"/>
                            <path d="M15.625 14.875L20.75 9.75" stroke="white" strokeWidth="1.22" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21.25 12.25V9.25H18.25" stroke="white" strokeWidth="1.22" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.375 9.25H13.125C10 9.25 8.75 10.5 8.75 13.625V17.375C8.75 20.5 10 21.75 13.125 21.75H16.875C20 21.75 21.25 20.5 21.25 17.375V16.125" stroke="white" strokeWidth="1.22" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p>Partager ce profil</p>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CardPoste;