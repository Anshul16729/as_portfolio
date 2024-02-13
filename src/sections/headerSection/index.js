import React from 'react'
import MobileNavToggleButton from '../../components/mobileNavToggleButton'
import Navigation from '../../reusable-components/navigation'
import { Home } from '../../routes/routes'

const HeaderSection = () => {
  return (
   <> {/* <!-- ======= Mobile nav toggle button ======= --> */}
   <MobileNavToggleButton />

   {/* <!-- ======= Header ======= --> */}
   <Navigation />
   {/* <!-- End Header --> */}

   {/* <!-- ======= Hero Section ======= --> */}
   <Home />
   {/* <!-- End Hero --> */}</>
  )
}

export default HeaderSection