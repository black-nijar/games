import React from 'react'
import './App.css'
import Home from './Components/Home'
import GamesList from './Components/GamesList'

const App = () => {
  return (
    <div className='container'>
      <Home/>
      <GamesList/>
    </div>
  )
}

export default App
