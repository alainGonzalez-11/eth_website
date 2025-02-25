import { Routes, Route } from 'react-router-dom'
import { Home, ServicePage, About, Services, AllCases, Case, OurBrands } from '@/pages'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/services/:serviceUrl" element={<ServicePage />} /> {/* Dynamic Service Page */}
      <Route path='/allcases' element={<AllCases />} />
      <Route path='/case' element={<Case />} />
      <Route path='/acercade' element={<About />} />
      <Route path='/servicios' element={<Services />} />
      <Route path='/ourbrands' element={<OurBrands />} />
    </Routes>
  )
}

export default App