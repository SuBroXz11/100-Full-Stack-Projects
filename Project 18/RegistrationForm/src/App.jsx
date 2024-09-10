import RegistraionForm from './components/RegistrationForm'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
const App = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-5">User Registration Form</h1>
      <RegistraionForm />
      <ToastContainer />
    </div>
  )
}

export default App
