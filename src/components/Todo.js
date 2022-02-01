import React from 'react';
import {useState} from 'react';
//status also passed as prop
const Todo = ({ text , element , todos , setTodos }) => {
    //React demands id/key for each listed item entered in form of list
    //?EVENTS
    //OR Deletehandler-> TO modify state 

    //functions
    //todo 1st filter
    const TrashHandler = () => {
        // console.log(element.id);//Now you can access each element when its trash button is clicked and mess with it
       
        console.log({todos})

        setTodos(todos.filter(
            (el) => el.id !== element.id
        ))
        //el is each element in list whereas {element} is current element whose trash btn got clicked
       //Grab element id and delete it using id
    }

    const completeHandler = () => {

        //this logs all items with property completed just before when this btn was clicked

        console.log({todos})
        //map through each todo element to get the only element whose complete btn got clicked by user
        // when complete clicked set its state to toggle and add it to filteredtodos array corresponding to that state
        setTodos(todos.map(
            (item) => {
            //get the element whose btn clicked
                if(item.id === element.id) {

                    //todo An object returned and For object return Use {}
                    return {

                        ...item, completed: !item.completed
                        //? ...item , property_alpha -> means that copy all other properties (that each item  already had) to todos but modify the property_alpha listed after comma
                    
                    };
                }
                else return item; //return other items as it is without any changes
            }
        ))
    }
    

    return (
        <div className="todo">
        {/* Modify class */}
        {/* Using ternary operator set its class to completed or empty string on basis of todo.complete state  */}
            <li className={`todo-item ${element.completed ? "completed" : ""}`}>
                {text} 
            </li>
            <button onClick={completeHandler}  className="complete-btn "> 
            <i className="fas fa-check"></i>
            </button>
            <button onClick={TrashHandler} className="trash-btn "> 
            <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}
export default Todo;