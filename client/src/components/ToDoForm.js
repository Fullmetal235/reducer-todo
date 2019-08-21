import React, {useState} from 'react'



const ToDoForm = ({dispatch}) => {
    
    const [newItem, setNewItem] = useState('');
  
   const submitTask = event => {
        event.preventDefault()
        dispatch({type: 'ADD-TODO', payload: newItem})
        setNewItem('')
   }

   const  handleChange = event => {
    
           setNewItem(event.target.value)
    
     }

 
        return(<>
        <form onSubmit={submitTask}>
            <input
            type='text'
            value={newItem}
            name='item'
            onChange={handleChange}
            />
            <button type="submit">Add</button>
        </form>
            {/* <button onClick={props.clearTask}>Clear Completed</button> */}
            </>
        )
    
}

export default ToDoForm