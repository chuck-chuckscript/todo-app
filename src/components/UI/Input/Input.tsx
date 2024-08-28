import {FC, ChangeEvent} from 'react';
import style from './input.module.scss';
interface InputProps {
    value?: string | number;
    placeholder?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}


const Input : FC<InputProps> = ({onChange,placeholder, value}) => {
    return (
        <input className={style.input} onChange={onChange} value={value} placeholder={placeholder} type="text"/>
    );
};

export default Input;