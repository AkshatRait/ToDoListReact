import { useState , useEffect} from 'react'
import './styles.css'
import ToDoList from './components/ToDoList'

function App() {
const [toDos, setToDos] = useState([]);
const addToDo = (e) =>{
  const newToDo = {text: e.target.value, id: Date.now(), completed: false };
  setToDos([newToDo, ...toDos]);
  e.target.value = "";

}
const completeToDo = (id , e) =>{
  const toDosCopy = [...toDos];
  const indexOfToDo = toDosCopy.findIndex((i) => i.id === id);
  toDosCopy[indexOfToDo].completed = !toDosCopy[indexOfToDo].completed;
  setToDos([...toDosCopy]);
}
const editToDoText = (id, e) => {
  const toDosCopy = [...toDos]
  const indexOfToDo = toDosCopy.findIndex((i) => i.id === id)
  toDosCopy[indexOfToDo].text = e.target.value
  setToDos([...toDosCopy])
  e.target.value = ""
}

const deleteToDo = (id) => {
  const toDosCopy = [...toDos]
  const indexOfToDo = toDosCopy.findIndex((i) => i.id === id)
  toDosCopy.splice(indexOfToDo, 1)
  setToDos([...toDosCopy])
};
  return (
    <>
      <div className="App">
      <ToDoList
        toDos={toDos}
        addToDo={addToDo}
        completeToDo={completeToDo}
        editToDoText={editToDoText}
        deleteToDo={deleteToDo}
      />
    </div>
    </>
  )
}

export default App
