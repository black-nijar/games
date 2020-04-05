import React from 'react'
import './App.css'
import Home from './Components/Home'
import GamesList from './Components/GamesList'
import SearchGame from './Components/SearchGame'

const App = () => {
  return (
    <div className='container'>
      <Home/>
      <SearchGame/>
      <GamesList/>
    </div>
  )
}

export default App
