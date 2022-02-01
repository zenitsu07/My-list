import React from 'react';

const Form = ({inputText,setInputText,todos,setTodos, setStatus})=> {

    //todo 1st hook->Write js functions and code to Handle input text
    const inputTextHandler = (e) => {
        console.log(e.target.value)//[prints value entered via path e.target.value] -> 
        //? In most cases e.target.value gives the input text entered by user
        setInputText(e.target.value);
    };
    //todo 2nd hook->
    // submitTodoHandler function starts
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
        //todos WHy object declared here?
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
    //? submitTodoHandler function ends
    
    //todo 3rd hook -> statusHandler Fucntion starts
    const statusHandler = (e) => {

      // console.log(e.target.value);//displays all or completed or uncompleted
      setStatus(e.target.value)//set items their current status

    }
    //todo
    //* Now return
    
    return(
      <form>
        { /*onchange Eventlisteneer responds to any change happened to input  */}
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
        
        <i className="fas fa-plus-square"></i>

        </button>
        {/* select status of items button*/}

        <div className="select">
          <select onChange = {statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
        <div className ="total_items"> <h2> ( Items in my_list : {todos.length} ) </h2></div>

      
      </form>
    )
}
export default Form;