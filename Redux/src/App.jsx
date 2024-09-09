import { useState } from 'react'
import {Provider} from 'react-redux'
import './App.css'
import store from './store'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Provider store={store}>
        <div>
          
        </div>
       </Provider>
    </>
  )
}

export default App
