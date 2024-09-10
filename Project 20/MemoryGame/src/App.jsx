import React from 'react'
import Board from './components/Board'

const App = () => {
  return (
    <>
      <h1 className="text-center mt-5 text-3xl">Memory Game Z</h1>
      <div className='flex justify-center'>
        <Board />
      </div>
    </>
  )
}

export default App
