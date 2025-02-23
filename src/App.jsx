import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from "./components/Header"
import { Tabs } from './components/Tabs'
import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'

function App() {
  
  /*const todos =  [
     { input: 'Hello! Add your first todo!', complete: true },
     { input: 'Get the groceries!', complete: false },
     { input: 'Learn how to web design', complete: false },
     { input: 'Say hi to gran gran', complete: true },
]*/ 

  
   const [todos,setTodos] = useState([ { input: 'Hello! Add your first todo!', complete: true }])

   const [selectedTab,setSelectedTab] = useState('All')

   function HandleAddTodo(newTodo){
   const newTodoList = [...todos,{input : newTodo, complete : false}]
   setTodos(newTodoList)
   HandleSaveData(newTodoList)
   }

   function HandleTodoComplete(index){
    let newTodoList = [...todos];
    let completedTodo = newTodoList[index];
    completedTodo['complete'] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList)
    HandleSaveData(newTodoList)
   }

   function HandleDeleteTodo(index){
     let newTodoList = todos.filter((val,valIndex)=>{
      return valIndex != index;
     })
     setTodos(newTodoList)
     HandleSaveData(newTodoList)
   }

   function HandleSaveData(currentTodos){
    localStorage.setItem('todo-app',JSON.stringify({todos:currentTodos}))
   } 
   
   useEffect(()=>{
    if(!localStorage || !localStorage.getItem('todo-app')){
      return
    }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
   },[todos])

  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList todos = {todos} HandleDeleteTodo={HandleDeleteTodo} selectedTab={selectedTab} HandleTodoComplete={HandleTodoComplete}/>
      <TodoInput HadleAddTodo = {HandleAddTodo} />
    </>
  )  
}

export default App
