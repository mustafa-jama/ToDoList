import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { ToDoList } from './components/ToDoList';
import { ToDoInput } from './components/ToDoInput';
import {useState, useEffect} from 'react'

function App() {
  // const todos = [
  //   { text: 'Gym', completed: true },
  //   { text: 'Code', completed: false },
  //   { text: 'Sleep', completed: false },
  // ];

  const[todos,setTodos] = useState([])
  const[selectedTab,setSelectedTab] = useState('Open')

 function handleAddToDo(newToDo){

  const todosCopy = [...todos, {text: newToDo , completed: false}]
  setTodos(todosCopy)
  handleSaveData(todosCopy)

 }

function handleDelete(todo){

  const copySetTodos = todos.filter((currentTodo)=> currentTodo !== todo )
  setTodos(copySetTodos)
  handleSaveData(copySetTodos)

}

function handleDone(index){

  const copySetTodos = [...todos]
  const completedTodo = copySetTodos[index]
  completedTodo["completed"] = true
  copySetTodos[index]= completedTodo
  setTodos(copySetTodos)
  handleSaveData(copySetTodos)
}


function handleSaveData(currentList) {

  localStorage.setItem('todo-app', JSON.stringify(currentList))
}


useEffect(() => {

if(!localStorage || !localStorage.getItem('todo-app')) return
    const data = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(data)

}, [])





  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <ToDoList todos={todos} handleDelete={handleDelete} selectedTab={selectedTab} handleDone={handleDone} />
      <ToDoInput handleToDo={handleAddToDo} todos={todos}/>
    </>
  );
}

export default App;
