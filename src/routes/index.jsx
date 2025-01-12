import { Routes, Route } from 'react-router-dom'
import { Home, ServicePage, BasicPage, About, Services , Case} from '@/pages'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<BasicPage />} />
      <Route path='/:pageUrl' element={<BasicPage />} />
      <Route path="/services/:serviceUrl" element={<ServicePage />} /> Dynamic Service Page
      <Route path='/case' element={<Case />} />
      <Route path='/acercade' element={<About />} />
      <Route path='/servicios' element={<Services />} />
    </Routes>
  )
}

export default App