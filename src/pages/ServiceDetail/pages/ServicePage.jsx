import React from 'react'
import ServiceHome from '../Components/ServiceHome'
import ServiceDescription from '../Components/ServiceDescription'
import ServiceRoofMaster from '../Components/ServiceRoofMaster'
import RoofReplacement from '../Components/RoofReplacement'
import RoofMaintenance from '../Components/RoofMaintenance'
import Footer from '../../Footer'

const ServicePage = () => {
  return (
    <div>
      <ServiceHome />
      <ServiceDescription />
      <ServiceRoofMaster />
      <RoofReplacement />
      <RoofMaintenance />
      <Footer />
    </div>
  )
}

export default ServicePage
