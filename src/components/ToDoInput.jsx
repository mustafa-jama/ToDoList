import { useState} from "react"


export function ToDoInput(props){

  const{handleToDo, todos} = props
  const[text,setText] = useState('')



  return(

    <div className="input-container">

      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add Task"/>
      <button disabled={!text || todos.some((t) => t.text === text)} onClick={() =>
      {
      handleToDo(text)
        setText('')
      }}>
      <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  )
}
