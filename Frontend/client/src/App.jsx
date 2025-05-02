import { React, useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [name1, setName1] = useState("");
  const [show, setShow] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  // const [todos, setTodos] = useState(()=>{
  //   const savedTodos = localStorage.getItem('todos');
  //   return savedTodos ? JSON.parse(savedTodos) : [];
  // });
  // const [todos,setTodos] = useState(
  //   JSON.parse(localStorage.getItem('todos') || '[]')
  // );

  const [todos, setTodos] = useLocalStorage('todos', []);




  const [inputValue, setInputValue] = useState('');



  const Counter = () => {
    let n = count + 1;
    setCount(n);
    console.log(n);
    return count
  }

  // const nameset = (e) =>{
  //   let n = e.target.value;
  //   setName1(n);
  //   console.log(n);
  //   // return n;
  // }

  const handleChange = () => {
    setShow(name1)
  }
  const handleMode = () => {
    setDarkMode(!darkMode);
  }
  // useEffect (()=>{
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // },[todos])

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
        },
      ]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      {/* counter
      <div className="App">
        <h1>Welcome to the React App</h1>
        <h2>Count: {count}</h2>
        <button onClick={Counter} >Click me</button>
      </div>    */}

      {/* greeting 
      <div className="App">
        <h1>Welcome {show || 'guest'}</h1>
        <input onChange={(e)=>setName1(e.target.value) } placeholder="Enter name" type="text" />
        <button onClick={handleChange}>Submit</button>
      </div> */}

      {/* toggle-mode and todo  */}
      {/* <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
  <label className="inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" className="sr-only peer" />
    <div
      onClick={handleMode}
      className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
      peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
      peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
      after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
      after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 
      dark:peer-checked:bg-blue-600"
    ></div>
    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
  </label>
  <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Todo App</h1>

            <div className="flex mb-6">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a todo"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              />
              <button
                onClick={addTodo}
                className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add
              </button>
            </div>

            <ul className="space-y-2">
              {todos.map(todo => (
                <li
                  key={todo.id}
                  className={`flex items-center justify-between p-3 border rounded-lg ${todo.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300'
                    }`}
                >
                  <span
                    onClick={() => toggleComplete(todo.id)}
                    className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
                      }`}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="ml-4 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 focus:outline-none"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

</div> */}


      

    </>
  )
}

export default App
