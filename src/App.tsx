import { Routes, Route } from 'react-router-dom'
import Landing from "./pages/Landing"
import SignIn from './pages/SignIn.tsx'
import SignUp from './pages/SignUp.tsx'
import NotFound from './pages/NotFound.tsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
