import Banner from '@/components/home/Banner.jsx'
import ServicesSection from '../components/home/ServicesSection'
import ClientsSection from '../components/home/ClientsSection'
import Success from '../components/home/Success'
const Home = () => {
  return (
    <div>
      <Banner/>
      <ServicesSection/>
      <ClientsSection/>
      <Success/>
    </div>
  )
}

export default Home
