import React, { useState } from 'react';

import { hardskills, softSkills, langues } from './competences.data';

import '../../styles/components/profil/Competences.style.css';

const Competences: React.FC = () =>{
    const [btnSelected, setBtnSelected] = useState('Compétences');

    const selectBtn = (e: React.MouseEvent<HTMLButtonElement>) => { 
        setBtnSelected(e.currentTarget.id);  
    };

    return(
        <section className='compet row justify-sp-between'>
            <div className='competences'>
                <div className='btn row justify-sp-between btn'>
                    <article className={btnSelected==='Compétences' ? 'selected' : ''}><button className={`text-uppercase ${btnSelected==='Compétences' ? 'selected' : ''}`} onClick={selectBtn} id='Compétences'>Compétences</button></article>
                    <article className={btnSelected==='pourquoi' ? 'selected' : ''}><button className={`text-uppercase ${btnSelected==='pourquoi' ? 'selected' : ''}`} onClick={selectBtn} id='pourquoi'>Expériences</button></article>
                    <article className={btnSelected==='Formations' ? 'selected' : ''}><button className={`text-uppercase ${btnSelected==='Formations' ? 'selected' : ''}`} onClick={selectBtn} id='Formations'>Formations</button></article>
                </div>

                {btnSelected === 'Compétences' && (
                    <div className='content'>
                        <h3 className='text-uppercase color-white semi-bold'>Hardskills</h3>
                        <article className='row'>
                            {hardskills.map((skill, index) => (
                                <button key={index} className='skill row'>
                                    {skill.img}
                                    <p>{skill.title}</p>
                                </button>
                            ))}
                        </article>
                        <h3 className='text-uppercase color-white semi-bold'>Softskills</h3>
                        <article className='row'>
                            {softSkills.map((skill, index) => (
                                <button key={index} className='skill row'>
                                    {skill}
                                </button>
                            ))}
                        </article>
                        <h3 className='text-uppercase color-white semi-bold'>Langues</h3>
                        <article className='row'>
                            {langues.map((langue, index) => (
                                <button key={index} className='skill row'>
                                    {langue.img}
                                    <p>{langue.title}</p>
                                </button>
                            ))}
                        </article>
                    </div>
                )}
            </div>
            <div className='projets'>
                <h3 className='text-uppercase text-align-center'>Mes 3 projets incontournables</h3>
                <article>
                    <div className='image'>
                        <p className='color-white bold'>Virtual Urban Flow</p>
                    </div>
                    <div>
                        <p className='color-white bold'>The Drip Grillz</p>
                    </div>
                    <div>
                        <p className='color-white bold'>Memphis</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Competences;