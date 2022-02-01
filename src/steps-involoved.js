//? TO check props and hooks of a component use React develper tools extensionsa accessed via
//? developer tools -> Components
//? Steps follow
// s-1 gathering syles and form for inputs to get ui ready for changes
// Get everything in state soit allows web app to change accordingly
//TO do that 
// import {use State}
//? useState() -> The useState function is a built in hook that can be imported from the react package. It allows you to add state to your functional components. 
//?Using the useState hook inside a function component, you can create a piece of state without switching to class components.
//todo  Now, const [inputText,setInputText] = useState("")
// setInputText updates input value using inputText variable entered to input
//Pass setInput text using props
//Now setInputText is used as props to pass down to Form component , which uses it to give it value entered
// THis enterred value can now be accessed with inputText variable defined in App.js
//todo const [todos,setTodos] = useState([]);//since its gonna be an array of todos
//now add e.preventdefault() to prevent refreshig of page when clicked on plus button
//Now add this as props in Form.js {todos,setTodos}
//setTodos
    //{[...todos]}
//this spread means that if any todos is there pass it down as (an element of array (jo create hoga fir)) as argument
//? what does the added element consists of-> what does the
// //? Created a object (which returns back to Todo component in return) consisting 
//     {
//         text: inputText,
//         completed: false,
//         id: Math.random()*1000, 
//     }
// ]);
// setInputText("");//resets the state to empty  and inputText to empty string
// adidng values={inputText} 
// TO use state of component to add todos
//? map each element Todo to render a coponent out of it and
//? that forms an array of todos element after

//! React demands ->
//React demands id/key for each listed item entered in form of list

//?Deleeting a Todo element
//Modify setTodos -> pass  it adn todos down to Todo component via TodoList component
//? Now when completed and trash btn are functional then move to styling it

//? Add completed class to element whose completed btn is clicked using ternary operator
// that is i.e.-> Apply ternary operation to add className of completed when ever element.completed===true

// FILTERING TODOS LIST

//todo Now Apply filters on todo list on basis of completed and incompleted
//Add new state 
// Added new useState hook which handles the statsu of items in my list
//for this  state of Status update the list by their status
//Ex -> when tick marked each change to complete so silter them by that state
// fiter contain those items on basis of their own Status update
//add a fliter state
//On the basis of selected state(Status) filter every element and add them to filtertodos array (can be viewed in components in webpage)
//? S-1 when complete is clicked State(todos) should change to array of completed items not all

//todo Running filtertodos every time status is changed 
// Use useeffect() 
//? use effect( ) hook will be used to run function filterHandling every itme the object changes on adding any element