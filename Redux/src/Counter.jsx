import {useSelector , useDispatch} from 'react-redux'
import { increase_count,decrease_count } from './count/countSlice'

function Counter(){

    return (
        <div>
            <h2>Counter</h2>
            <h3>The Count is - 5</h3>
            <button>Increase</button>
            <button>Decrease</button>
        </div>
    )
}

export default Counter