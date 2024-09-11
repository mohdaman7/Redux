import { useSelector ,useDispatch} from "react-redux";
import { change_color } from "./color/colorSlice";

function Aside(){
   
    return(
        <div>
            <h2>Aside</h2>
            <button>Change Color</button>
        </div>
    );
}

export default Aside;