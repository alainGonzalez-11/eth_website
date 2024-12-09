import Banner from '@/components/home/Banner.jsx'
import ServicesSection from '../components/home/ServicesSection'
import ClientsSection from '../components/home/ClientsSection'
import Success from '../components/home/Success'
import Contribute from '../components/home/Contribute'
import Contact from '../components/home/Contact'
const Home = () => {
  const loadContent = (name) => {

  }

  return (
    <div>
      <Banner/>
      <ServicesSection/>
      <ClientsSection/>
      <Success/>
      <Contribute/>
      <Contact/>
    </div>
  )
}

export default Home
