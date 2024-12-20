import React, { useState } from 'react';

import { hardskills, softSkills, langues } from './competences.data';

const Competences: React.FC = () =>{
    const [btnSelected, setBtnSelected] = useState('Compétences');

    const selectBtn = (e: React.MouseEvent<HTMLButtonElement>) => { 
        setBtnSelected(e.currentTarget.id);  
    };

    return(
        <section className='compet'>
            <div className='competences'>
                <div className='row justify-sp-between btn'>
                    <article className={btnSelected==='Compétences' ? 'selected' : ''}><button className={`text-uppercase ${btnSelected==='Compétences' ? 'selected' : ''}`} onClick={selectBtn} id='Compétences'>Compétences</button></article>
                    <article className={btnSelected==='pourquoi' ? 'selected' : ''}><button className={`text-uppercase ${btnSelected==='pourquoi' ? 'selected' : ''}`} onClick={selectBtn} id='pourquoi'>Expériences</button></article>
                    <article className={btnSelected==='Formations' ? 'selected' : ''}><button className={`text-uppercase ${btnSelected==='Formations' ? 'selected' : ''}`} onClick={selectBtn} id='Formations'>Formations</button></article>
                </div>

                {btnSelected === 'Compétences' && (
                    <div>
                        <h3 className='text-uppercase'>Hardskills</h3>
                        <article className='row justify-sp-between'>
                            {hardskills.map((skill, index) => (
                                <button key={index} className='skill row'>
                                    {skill.img}
                                    <p>{skill.title}</p>
                                </button>
                            ))}
                        </article>
                        <h3 className='text-uppercase'>Softskills</h3>
                        <article className='row justify-sp-between'>
                            {softSkills.map((skill, index) => (
                                <button key={index} className='skill row'>
                                    {skill}
                                </button>
                            ))}
                        </article>
                        <h3 className='text-uppercase'>Langues</h3>
                        <article className='row justify-sp-between'>
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
                <h3 className='text-uppercase'>Mes 3 projets incontournables</h3>
                <article>
                    <div className='image'>
                        <p>Virtual Urban Flow</p>
                    </div>
                    <div>
                        <p>The Drip Grillz</p>
                    </div>
                    <div>
                        <p>Memphis</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Competences;