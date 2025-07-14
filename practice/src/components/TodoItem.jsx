import styles from './todoItem.module.css'


function TodoItem({item, todos, setTodos}) {

  function handledelete(item) {
    setTodos(todos.filter((todo)=>todo !== item))
  }
  function handleComplete(item) {
    //console.log("Complete clicked for:", item.name);
    setTodos(todos.map((todo) => 
      todo.name === item.name ? {...todo, done: !todo.done} : todo
    ))
  }
  const className = item.done ? styles.completed : ""

  return (
      <div className={styles.item}>      
        <div className={className}>
          <span onClick={()=>handleComplete(item)}>
            {item.name}
          </span>
          <span>
          <button 
          className={styles.itemdelete}
          onClick={()=>handledelete(item)}>
            x
          </button>
        </span>
        </div>
        
        <hr className={styles.line}/>
      </div>
  )
}

export default TodoItem