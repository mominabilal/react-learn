import Todos from './components/Todo'
import AddTodo from './components/AddTodo'
import './App.css'
function App() {


  return (
    <>
      <h1 className="text-3xl text-white mb-8">Learn about redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
