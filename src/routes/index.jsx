import { Routes, Route } from 'react-router-dom'
import { Home, ServicePage, Case } from '@/pages'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/services/:serviceUrl" element={<ServicePage />} /> {/* Dynamic Service Page */}
      <Route path='/case' element={<Case />} />
    </Routes>
  )
}

export default App