import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '@/components/home/Banner.jsx'
import ServicesSection from '@/components/home/ServicesSection.jsx'
import ClientsSection from '@/components/home/ClientsSection.jsx'
import Success from '@/components/home/Success.jsx'
import Contact from '@/components/home/Contact.jsx'
import AllCases from '@/pages/AllCases.jsx'
import Case from '@/pages/Case.jsx'

const BasicPage = () => {
  const { pageUrl } = useParams() // Get dynamic URL parameter
  const [page, setPage] = useState(null)

  useEffect(() => {
    console.log(`the site is ${pageUrl}`)
    let path = pageUrl
    if (pageUrl === undefined) {
      path = ''
    }
    // https://cdn.contentful.com/spaces/0w7isqwzcsuy/environments/master/entries?access_token=bGyYPVBVyVHiyNPLSCDOqzM0T2HOV_qtdj11pSFcoo4&content_type=page&fields.url=%2F
    const token = import.meta.env.VITE_ACCESS_TOKEN
    const space = import.meta.env.VITE_CMS_SPACE
    fetch(
      `https://cdn.contentful.com/spaces/${space}/environments/master/entries?access_token=${token}&content_type=page&fields.url=%2F${path}`
    )
      .then(res => res.json())
      .then(data => {
        setPage(data)
      })
  }, [page?.id, pageUrl])

  if (page === null) return <div>Loading...</div>

  const createSection = (section, assets) => {
    const sectionData = extractSection(section, assets)
    switch (sectionData.type) {
      case 'CarouselBanner':
        return <Banner fields={sectionData} assets={assets.Asset} />
      case 'ServicesCards':
        return <ServicesSection fields={sectionData} assets={assets.Asset} />
      case 'Clients':
        return <ClientsSection fields={sectionData} assets={assets.Asset} />
      case 'SuccessStories':
        return <Success />
      case 'Contact':
        return <Contact />
      case 'AllCases':
        return <AllCases />
      case 'Case':
        return <Case />
      case 'image':
        return (
          <img
            src={`https://images.contentful.com/${
              assets[section.image.sys.id].fields.file.url
            }?w=800`}
            alt={section.image.fields.description}
          />
        )
      default:
        return <div>Missing section {sectionData.type}</div>
    }
  }

  const extractSection = (section, assets) => {
    const entry = assets.Entry.find(entry => entry.sys.id === section.sys.id)
    return entry.fields || 0 // Return the found entry or 0 if no match
  }

  return (
    <div>
      {page.items[0].fields.sections.map(section =>
        createSection(section, page.includes)
      )}
    </div>
  )
}

export default BasicPage
