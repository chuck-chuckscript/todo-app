import {
    ChangeEvent,
    useEffect,
    useMemo,
    useState
} from 'react';
import ToDoItem from "../components/ToDoItem/ToDoItem";
import {useAppSelector} from "./reduxHooks.ts";


interface ToDoItem{
    id: number
    title: string
    completed: boolean
}

export const useTodo = () => {


    const [toDO, setToDo] = useState<ToDoItem[]>([]);
    const [title, setTitle] = useState<string>('');
    const [filter, setFilter] = useState('');
    const [countLeftItems, setCountLeftItems] = useState<number>(0);
    const state = useAppSelector(state => state.filter)

    useEffect(() => {
        setFilter(state.value);
    }, [state.value]);

    useEffect(() => {
        const count = toDO.filter(item => !item.completed).length;
        setCountLeftItems(count);

    }, [toDO])



    const append = () => {
        const item: ToDoItem = {
            id: toDO.length + 1,
            title: title,
            completed: false

        }

        setToDo(prev => ([...prev, item]));
        setTitle('');
    }
    const toggleComplete = (id: number) => {



        setToDo([...toDO.map(item => {
          if(item.id === id){
              item.completed = !item.completed;
          }
          return item;
        })])
    }

    const removeInActive = () => {
        setToDo(prev => ([...prev.filter(item => !item.completed)]))
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const memoToDO = useMemo(() => {
        if(filter !== 'all'){
            console.log(filter);
            if(filter === 'active'){
                return toDO.filter(el => !el.completed).map(item => <ToDoItem id={item.id} checked={item.completed} key={item.id} title={item.title} onToggle={toggleComplete}/>)
            }

            if(filter === 'completed'){
                return toDO.filter(el => el.completed).map(item => <ToDoItem id={item.id} checked={item.completed} key={item.id} title={item.title} onToggle={toggleComplete}/>)
            }
        }
        return toDO.map(item => <ToDoItem id={item.id} checked={item.completed} key={item.id} title={item.title} onToggle={toggleComplete}/>)
    }, [toDO, filter])

    return {title, changeTitle, memoToDO, append, removeInActive, countLeftItems, toggleComplete}







};

