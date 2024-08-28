
import './App.scss'

import Input from "./components/UI/Input/Input.tsx";
import {useTodo} from "./hooks/useTodo.tsx";
import Button from "./components/UI/Button/Button.tsx";
import {BsCheck} from "react-icons/bs";
import {RadioGroup} from "./components/UI/Radio/RadioGroup.tsx";



// import Button from "./components/UI/Button/Button.tsx";


function App() {


  const {title, changeTitle, memoToDO, append, removeInActive, countLeftItems} = useTodo();
  return (
      <div className={'page'}>

          <article className={'todo'}>
              <h1>todos</h1>

              <div className={'todo__content'}>
                  <div className={'todo__header'}>

                      <Input value={title} onChange={changeTitle} placeholder={'Whats needs to be done?'}/>
                      {title.length > 0 && <Button variant={'styled'} onClick={append}><BsCheck/></Button>}

                  </div>


                  {
                      memoToDO.length > 0
                      ?
                      <ul className={'todo__main'}>
                          {memoToDO}
                      </ul>
                      : null
                  }
                  <div className={'todo__footer'}>
                       <p>{countLeftItems > 0 && countLeftItems + ' items left'} </p>

                      <RadioGroup titles={['All', 'Active', 'Completed']} />


                      <Button onClick={removeInActive}>Clear Completed</Button>
                  </div>
              </div>


          </article>


      </div>
  )
}

export default App
