import { useState } from 'react'
import './App.css'
import IPOListings from './components/IPOListings'
import IPODetails from './components/IPODetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<IPOListings />}></Route>
        <Route path='/ipo-details/:company' element={<IPODetails/>}></Route>
      </Routes>
            
        </div>
  )
}

export default App
