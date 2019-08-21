import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';


import ToDoForm from './components/ToDoForm.js'
import TodoList from './components/ToDoList.js'
import {initialState, reducer} from './reducers/Reducer.js'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">

     <TodoList state={state}/>
    <ToDoForm dispatch={dispatch}/>
    </div>
  );
}

export default App;
