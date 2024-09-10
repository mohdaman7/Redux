import { useState } from "react"



function Counter(){
    const [count,setCount] = useState(3)
    
    return (
        <div>
            <h2>Counter</h2>
            <h3>The Count is - {count}</h3>
            <button>Increase</button>
            <button>Decrease</button>
        </div>
    )
}

export default Counter