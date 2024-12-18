import React from 'react';

interface ButtonProps {
    content: string;
    handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ content, handleClick }) => {
    return (
        <button onClick={handleClick}>
            {content}
        </button>
    );
}

export default Button;