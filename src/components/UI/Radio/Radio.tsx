import {FC} from 'react';

import style from "./radio.module.scss";

interface RadioProps {
    id: number;
    title: string;
    active: boolean;
    onChangeActive: (id: number, title: string) => void
}

const Radio : FC<RadioProps> = ({id,title, active, onChangeActive}) => {




    return (
        <div
            onClick={() => onChangeActive(id, title)}
            className={[style.radio, active ? style.active : ''].join(' ')}
        >
            {title}
        </div>

    )
};

export default Radio;