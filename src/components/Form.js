import React from 'react';

const Form = ({inputText,setInputText,todos,setTodos})=> {

    //Write js functions and code to Handle input text
    const inputTextHandler = (e) => {
        console.log(e.target.value)//[prints value entered via path e.target.value] -> 
        //? In most cases e.target.value gives the input text entered by user
        setInputText(e.target.value);
    };

     const submitTodoHandler = (e) => {

        e.preventDefault();
        //setTodos
    //{[...todos]}//this spread means that if any todos is there pass it down as (an element of array (that gets created as result)) as argument
//? what does the added element consists of-> what does the
//? Created a object (which returns back to Todo component in return) consisting 
//     {
//         text: inputText,
//         completed: false,
//         id: Math.random()*1000, 
//     }
// ]);
//Todos WHy object declared here?
//? ANs-Todos have a instance created everytime with the properties in setTodos because it renders todo component each time and adds it to Form componenet
        setTodos([
            ...todos, 
            {
                text: inputText,
                completed: false,
                id: Math.random()*1000, 
            }
        ]);

        setInputText("");//resets the state to empty and inputText to empty string

    };
    return(
        <form>
        {/*onchange Eventlisteneer responds to any change happened to input */}
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i  className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
}
export default Form;