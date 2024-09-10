import { useState } from 'react'
import {Provider} from 'react-redux'
import './App.css'
import store from './store'
import Usage from './Usage'
import Home from './Home'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
          <Home/>
        </div>

    </>
  )
}

export default App
