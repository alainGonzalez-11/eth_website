import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../components/service/Banner'
import BranchesSection from '../components/service/BranchesSection'
import CarouselSection from '../components/service/CarouselSection'
import ReviewsSection from '../components/service/ReviewsSection'
import FAQSection from '../components/service/FAQSection'
import CTASection from '../components/service/CTASection'
import ContactSection from '../components/service/ContactSection'

const ServicePage = () => {
  const { serviceUrl } = useParams() // Get dynamic URL parameter
  const [service, setService] = useState(null)
  const [branches, setBranches] = useState([])
  const [selectedBranch, setSelectedBranch] = useState(null) // Track the selected branch
  const [faqs, setFaqs] = useState([])
  const [cta, setCta] = useState({})
  const [contact, setContact] = useState({})

  // Fetch service data
  useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => {
        const matchedService = data.services.find(
          s => s.link === `/services/${serviceUrl}`
        )
        setService(matchedService)
      })
  }, [service?.id, serviceUrl])

  // Fetch service data
  useEffect(() => {
    if (service) {
      // Fetch FAQs
      fetch('/faqs.json')
        .then(res => res.json())
        .then(data => {
          const relatedFaqs = data.faqs.filter(f => f.serviceId === service.id)
          setFaqs(relatedFaqs)
        })
        .catch(err => console.log('Error fetching FAQs:', err))

      // Fetch CTA Data
      fetch('/cta.json')
        .then(res => res.json())
        .then(data => {
          setCta(data.cta || {}) // Default to empty object if CTA data is missing
        })
        .catch(err => console.log('Error fetching CTA:', err))

      // Fetch Contact Data
      fetch('/contact.json')
        .then(res => res.json())
        .then(data => {
          setContact(data.contact || {})
        })
        .catch(err => console.log('Error fetching Contact:', err))
    }
  }, [service]) // Only fetch these once the service is loaded

  // Fetch branches data after the service is loaded
  useEffect(() => {
    if (service) {
      fetch('/branches.json')
        .then(res => res.json())
        .then(data => {
          const relatedBranches = data.branches.filter(
            b => b.serviceId === service.id
          )
          setBranches(relatedBranches)

          // If no branch is selected, default to the first one
          if (!selectedBranch) {
            setSelectedBranch(relatedBranches[0])
          }
        })
    }
  }, [service, selectedBranch])

  const handleBranchClick = branchId => {
    const branch = branches.find(b => b.id === branchId)
    setSelectedBranch(branch)
  }

  if (!service || !selectedBranch) return <div>Loading...</div>

  return (
    <div>
      <Banner title={service.name} banner={service.banner} />
      <BranchesSection
        branches={branches}
        onBranchClick={handleBranchClick} // Pass click handler
        selectedBranchId={selectedBranch.id} // Highlight selected branch
      />
      <CarouselSection branch={selectedBranch} />
      <ReviewsSection />
      <FAQSection faqs={faqs} />
      <CTASection cta={cta} />
      <ContactSection contact={contact} />
    </div>
  )
}

export default ServicePage
