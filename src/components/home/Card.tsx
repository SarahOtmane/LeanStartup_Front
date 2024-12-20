import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';

import '../../styles/components/home/card.style.css';

interface CardProps {
    pic: string,
    title: string,
    content: string,
    link: string
}

const Card: React.FC<CardProps> = ({pic, title, content, link}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(link);
    }

    return (
        <div className='card'>
            <img src={pic} alt='logo' />
            <article>
                <h3 className='sous-titre-2 bold'>{title}</h3>
                <p>{content}</p>
                <Button 
                    content={`En savoir plus`}
                    handleClick={handleClick}
                    style='white'
                />
            </article>
        </div>
    );
}

export default Card;