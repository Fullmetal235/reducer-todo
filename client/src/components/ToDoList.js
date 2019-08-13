import React, {useReducer} from 'react'

import ToDo from './ToDo.js'


const TodoList = ({state}) => {

   
    
    return(<div>
            <h2>Go Nottingham Forest!</h2>
            {state.map(item => 
              <ToDo key={item.id} item={item}
               />  
            )}
        </div>)
    
}

export default TodoList;