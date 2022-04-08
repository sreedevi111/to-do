import React, {useState} from 'react'

function Input() {
    const [value,setValue] = useState("")
    const [todo,setTodo] = useState([])

    const handleChange =(e) =>{setValue(e.target.value)}

    const handleTodo =()=>{
        const newTodo = [...todo,value]
        setTodo(newTodo)
        setValue("")}

  return (
    <div>
        <input onChange={handleChange} value={value}/>
        <button onClick={handleTodo}>Add To Do </button>
    </div>
  )
}

export default Input