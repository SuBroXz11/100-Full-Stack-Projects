import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <button className="button" onClick={() => setCount((count) => count + 1)}>
        Increase +
      </button>
      <p className="count-display">Count: {count}</p>
      <button className="button" onClick={() => setCount((count) => count - 1)}>
        Decrease -
      </button>
    </div>
  )
}

export default App
