import { Routes, Route } from 'react-router-dom'
import { Home, ServicePage, About, Services , Case} from '@/pages'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/services/:serviceUrl" element={<ServicePage />} /> {/* Dynamic Service Page */}
      <Route path='/case' element={<Case />} />
      <Route path='/acercade' element={<About />} />
      <Route path='/servicios' element={<Services />} />
    </Routes>
  )
}

export default App