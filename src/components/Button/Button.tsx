import React from 'react';
import './Button.css';

export interface ButtonProps {
    buttonText: string;
    handleClick: React.MouseEventHandler;
    className?: string;
}

export const Button = (props: ButtonProps) => {
    const { buttonText, handleClick, className } = props;

    return (
        <button className={`button ${className}`} onClick={handleClick}>{buttonText}</button>
    );
};