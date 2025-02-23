import { useState } from "react"

export function TodoInput(props){
  const {HadleAddTodo} = props
  const [inputValue,setInput] = useState('')

    return <div className="input-container">
        <input value={inputValue} placeholder="Add task" onChange={(e)=>{
           setInput(e.target.value)
        }}/>
        <button onClick={()=>{
            if(!inputValue){
              return alert("Please enter a todo")
            }
            HadleAddTodo(inputValue)
            setInput('')
        }}>
        <i className="fa-solid fa-plus"></i>
        </button>
    </div>
}