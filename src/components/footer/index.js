import React from 'react'
import { basicContactDetails } from '../../utils/constants'

const Footer = () => {
  return (
    <footer id="footer">
      {/* In this div container class was used so i removed that class to remove 30 px padding from left & right */}
        <div>
        <div className="copyright">
          Copyright &copy; <strong>
              <span>2024  </span>
            </strong> 
            <a href={basicContactDetails.linkedinUrl} target='_blank' rel="noreferrer" >Anshul Shrivastava</a>
          </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ --> */}
             
             All Rights Reserved
          </div>
        </div>
      </footer>
  )
}

export default Footer