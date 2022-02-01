import React , {useState, useEffect} from 'react' 
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {

  
  //State stuff
  //useState functions are defined in App.js because from here it can be passed to From.js easily

  const [inputText,setInputText] = useState("")//this is now stored in app
  
  const [todos,setTodos] = useState([]);//since its gonna be an array of todos it's inisialised with empty array 
  
  const [status, setStatus] = useState("all")// set default state of status to All 
  
  //? new state to filter todos on baisis of Status
  const [filtertodos,setFiltertodos] = useState([]);//Initial state shouls be of uncpmpleted items tehn update it accordingly
  //now set it to array of uncompleted items first and give those items only

  // //USE EFFECT
  // //* RUN ONLY ONCE WHEN APP starts
  // const;
  
  useEffect(() => {
    // console.log("state changes");
    filterHandler();
    saveLocalTodos();
  }, [status , todos]); //every time todo value changes or 2nd argument's array value changed


  //functions

  const filterHandler = () => {
    switch(status) {
      case 'completed': setFiltertodos(todos.filter((item) => item.completed === true ))//.filter(element => {bool value})
      break;
      case 'uncompleted': setFiltertodos(todos.filter((item) => item.completed === false ))
      break;
      default : setFiltertodos(todos)
      break;
      
    }
  }

  //Save to local 
  const saveLocalTodos = () => {

    //? syntx localStorage.setItem('array', element or item)
    //?The JSON.stringify() method converts a JavaScript object or value to a JSON string
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos', JSON.stringify([]))//inisilise empty array to local 
    }
    
    else {
      localStorage.setItem('todos',JSON.stringify(todos))//updating pre-existing todos to latest todos array 
    }
  }

  //get todos
  const getLocalTodos = () => {

    //? syntx localStorage.setItem('array', element or item)
    //?The JSON.stringify() method converts a JavaScript object or value to a JSON string
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos', JSON.stringify([]))//inisilise empty array to local 
    }
    
    else {
      const obj = localStorage.getItem('todos')
      localStorage.setItem('todos',JSON.stringify(todos))//updating pre-existing todos to latest todos array 
    }
  }

  //functions end
  return (
    
   <div>
     <header>
     <h2>Its happening </h2>
   </header>
   <Form
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText= {setInputText} 
      setStatus = {setStatus}
      status = {status}
      setFiltertodos = {setFiltertodos}
      />
    <TodoList todos={todos} setTodos={setTodos} filtertodos={filtertodos} />
   
   </div>
  );
}

export default App;
//? filter syntax in es7
// array.filter(e => {
  //write condition only without any return statement
//})