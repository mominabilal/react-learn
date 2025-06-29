import UserContextProvider from "./context/UserContextProvider"
import Login from './Components/Login'
import Profile from "./Components/Profile"
import './App.css'

function App() {
  
  return (
    <UserContextProvider>
      <h1>React using API context</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
