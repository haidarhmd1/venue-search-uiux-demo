import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Venues } from './components/Venues'
import { Home } from './components/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/guide' element={<Venues />} />
    </Routes>
  )
}

export default App
