import { Routes, Route } from 'react-router-dom'
import { Home } from '@/pages'
import './style.scss';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App