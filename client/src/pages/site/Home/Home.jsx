import React from 'react'
import Carousel from '../../../components/site/Carousel/Carousel'
import Crud from '../../../components/site/CrudSection/Crud'
import Form from '../../../components/site/FormSection/Form'
import Service from '../../../components/site/ServiceSection/Service'

const Home = () => {
  return (
    <div>
        <Carousel/>
        <Crud/>
        <Form/>
        <Service/>
    </div>
  )
}

export default Home