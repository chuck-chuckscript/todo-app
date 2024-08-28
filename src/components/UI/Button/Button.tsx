import {FC, MouseEventHandler, ReactNode} from "react";

import style from './button.module.scss';

type ButtonVariant = 'default' | 'styled';
interface ButtonProps {
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    variant?: ButtonVariant
    className?: string
}

const Button : FC<ButtonProps> = ({className, children, variant, onClick}) => {

    if(variant === 'styled'){
        return (
            <button className={[style.button, style.styled].join(' ')} onClick={onClick}>{children}</button>
        );
    }
    return (
        <button className={className} onClick={onClick}>{children}</button>
    );

};

export default Button;