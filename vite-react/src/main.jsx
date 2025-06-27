import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return(
  <h1>My app</h1>
  )
}
const AnotherElement = (
  <a href="https://google.com" target='_blank'>Click me</a>
)
const reactElement = React.createElement('a',
  { href: 'https://google.com', target: '_blank'},
  'Click me to visit google through React.createElement')



createRoot(document.getElementById('root')).render(
    // MyApp()
    //AnotherElement
    // reactElement
    <App />
)
