import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import GameDetail from './Components/GameDetail'

const App = () => {
  return (
   <BrowserRouter>
     <div>  
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route path='/game/:id' component={GameDetail}/>
       </Switch>
     </div>
   </BrowserRouter>
  )
}

export default App
