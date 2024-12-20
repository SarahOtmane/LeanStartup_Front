import React, { useState } from 'react';
import Button from '../Button';

import '../../styles/components/home/SelectHeader.css';

interface SelectHeaderProps {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}

const SelectHeader: React.FC<SelectHeaderProps> = ({ state, setState }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleChangeState = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setState(e.currentTarget.id);
        setIsOpen(false);
    }

    return (
        <>
            <Button
                content={state}
                handleClick={() => setIsOpen(!isOpen)}
                style='black'
                buttonSlect={true}
            />

            {isOpen && (
                <div className='column sous-menu'>
                    <a href='#' onClick={handleChangeState} className='color-white' id='Espace recruteur'>Espace <span className='color-orange'>recruteur</span></a>
                    <a href='#' onClick={handleChangeState} className='color-white' id='Espace étudiant'>Espace <span>étudiant</span></a>
                    <a href='#' onClick={handleChangeState} className='color-white' id='Espace école'>Espace <span className='color-lilas'>école</span></a>
                </div>
            )}
        </>
    );
}

export default SelectHeader;