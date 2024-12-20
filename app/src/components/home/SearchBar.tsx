import React from 'react';

import bag from '../../assets/home/bag.svg';
import search from '../../assets/home/search.svg';

import '../../styles/components/home/searchBar.style.css';
import '../../styles/components/button.style.css'

const SearchBar: React.FC = () => {
    return (
        <>
            <article className='row title'>
                <img src={bag} alt='bag icon' />
                <h1 className='titre'>Commence tes recherches !</h1>
            </article>
            <div className='search row margin-auto'>
                <div className='column'>
                    <label className='sous-titre-2' htmlFor='search'>QUOI ?</label>
                    <input type='text' placeholder='Métier, entreprise, compétences...' />
                </div>
                <div className='column'>
                    <label className='sous-titre-2' htmlFor='location'>OÙ ?</label>
                    <input type='text' placeholder='Ville, département, code postal...' />
                </div>
                <button className='row'>
                    <p className='color-white'>Rechercher</p>
                    <img src={search} alt='search icon' />
                </button>
            </div>
        </>
    );
}

export default SearchBar;