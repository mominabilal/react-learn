import { useState } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(0)

  // let count = 0 giving error because useState already initiallized count to 0
  const countUp = () => {
    count += 1
    // console.log('countUp', count)
    setCount(count) //setCount(count+1)
  }
  const countDown = () => {
    setCount(count - 1)
  }
  return (
    <>
      <h1>Counter with tutorial</h1>
      <h3>Counter value: {count}</h3>

      <button onClick={countUp}>count up</button>
      <br />
      <button onClick={countDown}>count down</button>
    </>
  )
}

export default App
