import React, { useState } from 'react';
import Button from '../Button';

import '../../styles/components/home/SelectHeader.css';

const SelectHeader: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [state, setState] = useState<string>('Emma Morel');

    const handleChangeState = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setState(e.currentTarget.id);
        setIsOpen(false);
    }

    return (
        <>
            <Button
                content={state}
                handleClick={() => setIsOpen(!isOpen)}
                style='white'
                buttonSlect={true}
                picture={true}
            />

            {isOpen && (
                <div className='column sous-menu'>
                    <a href='#' onClick={handleChangeState} id='Mon CV'>Mon CV</a>
                    <a href='#' onClick={handleChangeState} id='Paramètres'>Paramètres</a>
                    <a href='/home' onClick={handleChangeState} id='Me déconnecter'>Me déconnecter</a>
                </div>
            )}
        </>
    );
}

export default SelectHeader;