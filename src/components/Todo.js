import React from 'react';
import {useState} from 'react';
const Todo = ({ text , element , todos , setTodos }) => {
    //React demands id/key for each listed item entered in form of list
    //?EVENTS
    //OR Deletehandler-> TO modify state 
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

        console.log({todos})

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
                else return item
            }
        ))

    }
    return (
        <div className="todo">
            <li className="todo-item">
                {text}
            </li>
            <button onClick={completeHandler} className="complete-btn "> 
            <i className="fas fa-check"></i>
            </button>
            <button onClick={TrashHandler} className="trash-btn "> 
            <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}
export default Todo;