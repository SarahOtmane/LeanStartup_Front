import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';

interface CardSection7Props {
    content: string,
    link: string
}

const CardSection7: React.FC<CardSection7Props> = ({content, link}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(link);
    }

    return (
        <div className='cardSect7'>
            <article>
            <h3 className='color-white text-uppercase bold'>{content}</h3>
            <Button
                content={`En savoir plus`}
                handleClick={handleClick}
                style='white'   
            />
            </article>
        </div>
    );
}

export default CardSection7;