import React from 'react'
import MemoryGame from './components/MemoryGame'

const App = () => {
  return (
    <>
      <h1 className="text-center mt-5 text-3xl animate-pulse">Memory Game</h1>
      <div className='flex justify-center'>
        <MemoryGame />
      </div>
    </>
  )
}

export default App
