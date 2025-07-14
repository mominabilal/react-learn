import { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList' 
import Footer from './Footer' 

function Todo() {
    const [todos,setTodos]= useState([])
    const completed=todos.filter(todo=> todo.done === true).length
    const total=todos.length

    return (
        <>
            <Form todos={todos} setTodos={setTodos}/>
            <TodoList todos={todos} setTodos={setTodos}/>
            <Footer total={total} completed={completed}/>
        </>
    )
}

export default Todo