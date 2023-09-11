import { useState } from "react"

const ToDo = ({ toDo, completeToDo, editToDoText, deleteToDo }) => {
    const [showInput, setShowInput] = useState(false);
  return (
    <li>
        <div className="left">
            <h2 onClick = {(e)=>{
                setShowInput(!showInput)
            }}>
                {ToDo.text}
            </h2>
            <input  style={{display: showInput ? "block" : "none"}}
            type="text"
            onKeyDown={(e)=>{
                if(e.key === "Enter"){
                    editToDoText(toDo.id,e)
                    setShowInput(false)
                }
            }}
            />
        </div>
        <label className="middle">
            Complete
            <input type="checkbox"
            checked={toDo.completed}
            onChange={(e)=>{
                completeToDo(toDo.id , e);
            }} />
        </label>
        <button
        checked={toDo.completed}
        onClick={(e)=>{
            deleteToDo(toDo.id)
        }}>
            Delete ToDp
        </button>
    </li>
  )
}

export default ToDo