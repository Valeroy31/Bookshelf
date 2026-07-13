import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement,reset, incrementByAmount} from './counterSlice'
import { useState } from 'react'

const Counter = () => {
    const [amount, setamount] = useState(0)
    const count = useSelector((state)=>state.counter.count)
   const dispatch = useDispatch()
   const value =  Number(amount) || 0 
   const resetAll =()=>{
    setamount(0),
    dispatch(reset())
   }
  return (
    <>
<h1>{count}</h1>

<input type="text" value={amount} onChange={(e)=>  setamount(e.target.value)}/>

<button onClick={()=>dispatch(increment())}>+</button>
<button onClick={()=>dispatch(decrement())}>-</button>
<button onClick={resetAll}>Reset all</button>

<button onClick={()=>dispatch(incrementByAmount(value))}>Increment</button>
    </>
  )
}

export default Counter