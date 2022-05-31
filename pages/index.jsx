import Head from 'next/head'
import {useState} from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [task,setTask] = useState("");
  const handleChange = (e) =>{
    e.preventDefault();
    setTask(e.target.value);
  }
  
  const [todosList, setTodosList] = useState([]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    setTodosList([
      task,
      ...todosList
    ])
  }

  const handleDelete = (todo) =>{
    const updList = todosList.filter(todoItem => todoItem != todo);
    setTodosList(updList);
  }
  const TodoList =({todolist}) =>{
    return todolist.map((todo, idx) =>(<li key={idx}>{todo}<button onClick={(e)=>{
      e.preventDefault();
      handleDelete(todo);
    }} todo={todo} >Delete</button></li>))
  }
  return (
    <>
      <Head>
        <title>Todo List</title>
      </Head>
      <div className={styles.container}>
        <h1>Todos List</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} />
          <button onClick={handleSubmit}> Submit </button> 
        </form>
        <ul>
          {todosList.length>0 ? <TodoList todolist={todosList}/> : "Enter a task in the list!"}
        </ul>
      </div>
    </>
  )
}
