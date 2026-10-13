import { useState } from "react"

function App() {

  const todosData = [
    {
      "todoText": "Learn HTML",
      "todoStatus": true
    },
    {
      "todoText": "Learn CSS",
      "todoStatus": false
    },
    {
      "todoText": "Learn JS",
      "todoStatus": true
    },
    {
      "todoText": "Learn React",
      "todoStatus": false
    }
  ]

  const [text, setTodoText] = useState("")
  const [todos, setTodo] = useState([...todosData])

  const onchangeTodo = (text: string) => {
    setTodoText(text)
  }

  const addTodo = (todoText: string) => {
    setTodo((prevData) => [...prevData, {"todoText": todoText, "todoStatus": false}] )
    setTodoText("")
  }

  const removeTodo = (val: string) => {
    setTodo((prevData) => prevData.filter((todo) => todo.todoText !== val))
  }

 
  const updateTodo = (val: boolean, todoText: string) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.todoText === todoText) {
        todo.todoStatus = val
      }

      return todo
    })
    
    setTodo(updatedTodo)
  }
  

  return (
    <>
      <section className="grid min-h-screen place-items-center bg-gray-100">
        <div className='w-96 rounded-xl bg-white p-6 shadow-lg'>
          <h1 className="text-center">My Todo App</h1>
          <div className="todo-input-container m-2">
            <input type="text" className="border border-gray-400  rounded-sm p-1" placeholder="Type your todo..." value={text} onChange={(e) => onchangeTodo(e.target.value)}  name="todo"/>
            <button className="add-btn border rounded-sm  mx-2 p-1" onClick={() => addTodo(text)}>Add</button>
          </div>
          <ul>
            {todos.map((todo) => ( 
              <li key={todos.indexOf(todo)} className="flex justify-between m-2">
              <span className="flex gap-1">
                <input type="checkbox" name={String(todos.indexOf(todo))} checked={todo.todoStatus} className="mx-2" onChange={(e) => updateTodo(e.target.checked, todo.todoText)} />
                <p className={todo.todoStatus ? "line-through" : ""}>{todo.todoText}</p>
              </span>
              <button className="border rounded-sm p-1" onClick={() => removeTodo(todo.todoText)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default App
