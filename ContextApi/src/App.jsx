import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'
function App() {

  return (<>
    <h1>React with Chai and share is important</h1>
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
    </>
  )
}

export default App
