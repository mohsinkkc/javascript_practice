
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, Reset } from './feature/counterSlice'
import { useState } from 'react'

function App() {
  const [amount,setAmount] = useState(0);
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()

  const handleIncremnetClick=()=>{
    dispatch(increment())
  }
  const handleDecremnetClick=()=>{
    dispatch(decrement())
  }
  const handleResetClick=()=>{
    dispatch(Reset())
  }
  const handleIncrementAmountClick=()=>{
    dispatch(incrementByAmount(amount))
  }

  return (
    <>
      <div>
      <div>
        <button onClick={handleIncremnetClick}>+</button>
        <p>Count : {count}</p>
        <button onClick={handleDecremnetClick}>-</button>
        <br/>
        <br/>
        <div>
        <button onClick={handleResetClick}>Reset</button>
        </div>
        <br/>
        <br/>
        <input 
        type='number'
        placeholder='Enter number'
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleIncrementAmountClick}>Increment Amount</button>
      </div>
      </div>
    </>
  )
}

export default App
