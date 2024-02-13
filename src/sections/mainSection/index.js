import React from 'react'
import { About, Contact, Portfolio, Resume, Services } from '../../routes/routes'
import Facts from '../../containers/factsContainer'
import SkillsSection from '../../containers/skillsContainer'
import TestimonialsSection from '../../containers/testimonialsContainer'

const MainSection = () => {
  return (
    <main id="main">
    {/* <!-- ======= About Section ======= --> */}
    <About />
    {/* <!-- End About Section --> */}

    {/* <!-- ======= Facts Section ======= --> */}
    <Facts />
    {/* <!-- End Facts Section --> */}

    {/* <!-- ======= Skills Section ======= --> */}
    <SkillsSection />
    {/* <!-- End Skills Section --> */}

    {/* <!-- ======= Resume Section ======= --> */}
    <Resume />
    {/* <!-- End Resume Section --> */}

    {/* <!-- ======= Portfolio Section ======= --> */}
    <Portfolio />
    {/* <!-- End Portfolio Section --> */}

    {/* <!-- ======= Services Section ======= --> */}
    <Services />
    {/* <!-- End Services Section --> */}

    {/* <!-- ======= Testimonials Section ======= --> */}
   <TestimonialsSection/>
    {/* <!-- End Testimonials Section --> */}

    {/* <!-- ======= Contact Section ======= --> */}
  <Contact/>
    {/* <!-- End Contact Section --> */}
  </main>
  /* <!-- End #main --> */
  )
}

export default MainSection