import { useState } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(0)

  // let count = 0 giving error because useState already initiallized count to 0
  const countUp = () => {
    if(count<20){
      count += 1
      // console.log('countUp', count)
      setCount(count) //setCount(count+1)
    }
    else {
      alert('Count cannot be greater than 20')
    }
  }
  const countDown = () => {
    if(count>0)
      setCount(count - 1)
    else 
      alert('Count cannot be less than 0')
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
