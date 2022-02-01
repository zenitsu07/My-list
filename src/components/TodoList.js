import React from 'react';

import Todo from './Todo'

//passing parameter todos now you can access each entry
 const TodoList = ({todos, setTodos,  filtertodos}) => {
    //since each input is catched in array of objects So map through it and render a todo component to each
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {/*Syntax-> todos.map(element => ())  */}
                {/* returning a mapped array */}
                
                {filtertodos.map( element => (

                    <Todo text = { element.text}
                    key = { element.id}      
                    todos = { todos }
                    element = { element }//This shows what element  we are currently on and can acessed in Todo component now
                    setTodos= { setTodos }
                    />
                    ))
                }
                
            </ul>
        </div>
    );
};
export default TodoList;
//get evrey involved components into state so that web app react ot those changes 