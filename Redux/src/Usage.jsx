import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Usage() {

    const value = useSelector((state)=>{
        return state;
    })

    const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={()=>{
            dispatch({
                type:'increment'
            })
        }}>
            increment
        </button>

        <button onClick={()=>{
            dispatch({
                type:'decrement'
            })
        }}>
            decrement
        </button>
      </div>
    </div>
  )
}

export default Usage
