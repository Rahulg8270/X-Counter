import React, {useState} from 'react'

const Counter = () => {
  const [valueofCount, setValueOfCount] = useState(0)

  const handleIncrement = ()=>{
    setValueOfCount(prevValue => prevValue+1)
  }

  const handleDecrement = ()=>{
    setValueOfCount(prevValue => prevValue-1)
  }
  return (
    <div>
        <h1>Counter App</h1>
        <p>Count: {valueofCount}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter