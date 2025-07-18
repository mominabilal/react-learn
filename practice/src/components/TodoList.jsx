import TodoItem from "./TodoItem"
import styles from './todoList.module.css'

function TodoList({ todos, setTodos }) {
  const sortedTodos=todos.slice().sort((a, b) =>Number(a.done)-Number(b.done))
  return (
    <div className={styles.list}>
    {sortedTodos.map((todo) => (
                <TodoItem item={todo} key={todo.name} todos={todos} setTodos={setTodos}/>
            ))}
    </div>
  )
}

export default TodoList