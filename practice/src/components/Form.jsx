import { useState } from 'react'
import styles from'./form.module.css'

export default function Form({todos, setTodos}) {
    // const [todo, setTodo] = useState("");
    const [todo, setTodo]=useState({name:"", done:false});

    function handleSubmit (e) {
        e.preventDefault(); 
        setTodos([...todos, todo]);//need to spread so we don't overwrite
        setTodo({name:"", done:false});//reset the input field
    }
    
    return(
        <>
            <form className={styles.todoform} onSubmit={handleSubmit}>
                <input
                className={styles.input}
                placeholder="Add a new todo"
                name="todoAdd"
                type="text" 
                value={todo.name} 
                onChange={(e)=>setTodo({name:e.target.value, done:false})
                }/>
                <button className={styles.button} type="submit">Add</button>
            </form>
        </>
    )
}