import React from 'react'
import { basicContactDetails } from '../../utils/constants'

const Footer = () => {
  return (
    <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright
            <strong>
              <span>@2024</span>
            </strong>
          </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ --> */}
            Designed by <a href={basicContactDetails.linkedinUrl} target='_blank'>Anshul Shrivastava</a>
          </div>
        </div>
      </footer>
  )
}

export default Footer