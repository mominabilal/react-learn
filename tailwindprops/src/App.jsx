import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    price:0.19,
    code:2806
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4
      rounded-xl mb-4'>Tailwind Test</h1>
      <Card price="0.192" name="NFT monkey"/>
      <Card price="0.156" name="NFT monkey blind" />
    </>
  )
}

export default App
