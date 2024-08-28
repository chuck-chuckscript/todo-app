import {FC, useEffect, useState} from "react";

import Radio from "./Radio.tsx";
import {useAppDispatch} from "../../../hooks/reduxHooks.ts";
import {FilterSlice, setFilter} from "../../../store/slices/filterSlice.tsx";


interface  RadioGroupProps{
    titles: string[];
}

interface RadioObject{
   title: string;
   active: boolean;
   id: number
}





export const RadioGroup : FC<RadioGroupProps> = ({titles}) => {
    const [radios, setRadios] = useState<RadioObject[]>([]);

    const dispatch = useAppDispatch();
    useEffect(() => {
        const array: RadioObject[] = [];
        for (const title of titles) {
            array.push({
                title: title,
                active: false,
                id: array.length + 1
            })

        }

        setRadios([...array]);
    }, [titles])
    function changeActiveById(id: number, title: string): void{
        setRadios(prev => ([...prev.map(el => {
            el.active = el.id === id;
            return el;
        })]))
        const filterName = title.toLowerCase() as FilterSlice;
        setTimeout(() => dispatch(setFilter(filterName)), 100)

    }
    return <div>
        {radios.map((item) => <Radio key={item.title} id={item.id} title={item.title} active={item.active} onChangeActive={changeActiveById}/>)}

    </div>;
}