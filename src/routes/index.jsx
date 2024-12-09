import { Routes, Route } from 'react-router-dom'
import { Home, ServicePage, BasicPage } from '@/pages'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<BasicPage />} />
      <Route path='/:pageUrl' element={<BasicPage />} />
      {/* <Route path="/services/:serviceUrl" element={<ServicePage />} /> Dynamic Service Page */}
    </Routes>
  )
}

export default App