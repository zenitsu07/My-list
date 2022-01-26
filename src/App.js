import React,{useState} from 'react' 
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  //useState functions are defined in App.js because from here it can be passed to From.js easily

  const [inputText,setInputText] = useState("")//this is now stored in app
  
  const [todos,setTodos] = useState([]);//since its gonna be an array of todos it's inisialised with empty array 
  
  return (
    
   <div>
     <header>
     <h2>Its happening </h2>
   </header>
   <Form inputText={inputText} todos={todos} setTodos={setTodos}  setInputText= {setInputText} />
    <TodoList todos={todos} setTodos={setTodos} />
   </div>
  );
}

export default App;
