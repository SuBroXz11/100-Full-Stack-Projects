import React from 'react'
import Weather from './components/Weather'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='app'>
      <Weather />
      <ToastContainer />
    </div>
  )
}

export default App
