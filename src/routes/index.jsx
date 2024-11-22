import { Routes, Route } from 'react-router-dom'
import { Home, ServicePage } from '@/pages'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/services/:serviceUrl" element={<ServicePage />} /> {/* Dynamic Service Page */}
    </Routes>
  )
}

export default App