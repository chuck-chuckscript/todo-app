// import React from 'react';

import {FC} from "react";
import style from './toDoItem.module.scss';
import {BsCheck} from "react-icons/bs";
interface ToDoItemProps {
    id: number
    checked?: boolean
    title?: string
    onToggle: (id: number) => void;
}

const ToDoItem : FC<ToDoItemProps> = ({id, onToggle,checked, title}) => {

    const toggleCheck = () => onToggle(id);
    return (
        <div className={style.item}>
            <div className={[style.radio__marker,checked ? style.checked : ''].join(' ')} onClick={toggleCheck}>
                {checked ? <BsCheck/> : null}
            </div>
            <label className={checked ? style.checked : ''}>{title}</label>
        </div>

    );
};

export default ToDoItem;