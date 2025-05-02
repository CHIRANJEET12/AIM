// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Todo todo="Learn React" desc="Learn React with TypeScript" done={false} />
    </>
  )
}

interface todowork {
  todo: string;
  desc: string;
  done: boolean;
}

function Todo(todo: todowork){
  return (
    <div>
      <h1>{todo.todo}</h1>
      <p>{todo.desc}</p>
      <p>{todo.done ? "Done" : "Not Done"}</p>
    </div>
  )
}


export default App
