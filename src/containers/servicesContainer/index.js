import React from 'react'
import { servicesDetails } from './constants'

const ServicesContainer = () => {
  return (
    <section id="services" className="services">
    <div className="container">
      <div className="section-title">
        <h2>{servicesDetails.serviceTitle}</h2>
        <p>
          {servicesDetails.servicesIntro}
        </p>
      </div>

      <div className="row">
        {servicesDetails.services.map((items,i)=>{
          return ( <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={items.delay}>
          <div className="icon">
            {items.icon}
          </div>
          <h4 className="title">
            <a href="">{items.title}</a>
          </h4>
          <p className="description">
           {items.description}
          </p>
        </div>)
        })}
      </div>
    </div>
  </section>
  )
}

export default ServicesContainer