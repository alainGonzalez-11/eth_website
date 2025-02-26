import { Routes, Route } from 'react-router-dom'
import { Home, ServicePage, BasicPage, About, Services, AllCases, Case, OurBrands } from '@/pages'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<BasicPage />} />
      <Route path='/:pageUrl' element={<BasicPage />} />
      <Route path="/services/:serviceUrl" element={<ServicePage />} />
      {/* <Route path='/allcases' element={<AllCases />} /> */}
      {/* <Route path='/case' element={<Case />} /> */}
      {/* <Route path='/acercade' element={<About />} /> */}
      {/* <Route path='/servicios' element={<BasicPage />} /> */}
      {/* <Route path='/ourbrands' element={<OurBrands />} /> */}
    </Routes>
  )
}

export default App