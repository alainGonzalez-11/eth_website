import Banner from '@/components/home/Banner.jsx'
import ServicesSection from '../components/home/ServicesSection'
import ClientsSection from '../components/home/ClientsSection'
import Success from '../components/home/Success'
import Diferentiator from '../components/home/Diferentiator'
const Home = () => {
  return (
    <div>
      <Banner/>
      <ServicesSection/>
      <ClientsSection/>
      <Success/>
      <Diferentiator/>
    </div>
  )
}

export default Home
