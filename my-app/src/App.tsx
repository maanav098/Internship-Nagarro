import React from 'react'
import  {Counter} from './components/counter'
import './App.css'
import image from './Nagarro-New-Logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <img
          src={image}
          className="App-logo"
          alt='app'/>
  
        <Counter />
      </header>
    </div>
  )
}
export default App
