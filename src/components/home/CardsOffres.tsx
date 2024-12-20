import React from 'react';

import caisse from '../../assets/home/card/caisse.png';
import oreal from '../../assets/home/card/oreal.png';
import hive2work from '../../assets/home/card/hive2work.png';

import Card from './Card';

import '../../styles/components/home/card.style.css';

const CardsOffres: React.FC = () => {
    const tabsAlternances = [{
        pic : caisse,
        title : 'Chef de projet',
        content : 'Bac +3 minimum dans le domaine de la gestion de projet...',
        link : '/'
    },{
        pic : oreal,
        title : 'Alternance - Communication',
        content : 'Diplômé d’un bac +3 en communication. Disponible à partir de septembre 2025....',
        link : '/'
    },{
        pic : hive2work,
        title : 'Alternance - Comptable',
        content : 'Diplômé d’un bac +3 en finance. Disponible à partir d’octobre 2025....',
        link : '/'
    },{
        pic : caisse,
        title : 'Chef de projet',
        content : 'Bac +3 minimum dans le domaine de la gestion de projet...',
        link : '/'
    },{
        pic : oreal,
        title : 'Alternance - Communication',
        content : 'Diplômé d’un bac +3 en communication. Disponible à partir de septembre 2025....',
        link : '/'
    },{
        pic : hive2work,
        title : 'Alternance - Comptable',
        content : 'Diplômé d’un bac +3 en finance. Disponible à partir d’octobre 2025....',
        link : '/'
    }]

    return (
        <section className='offresAlternance text-align-center'>
            <h2 className='bold text-uppercase'>Les offres d’alternances recommandés</h2>
            <p>Trouvez l’alternance vous correspondant le mieux !</p>

            <div className='row slide'>
                {tabsAlternances.map((tab, index) => (
                    <Card key={index} pic={tab.pic} title={tab.title} content={tab.content} link={tab.link} />
                ))}
            </div>
        </section>
    );
}

export default CardsOffres;