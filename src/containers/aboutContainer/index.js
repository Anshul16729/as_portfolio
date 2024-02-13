import React from 'react'
import profileImg from '../../assets/img/my-profile.jpg'
import { basicContactDetails, designation, profileName } from '../../utils/constants'
import { aboutDetails } from './constants'

const AboutContainer = () => {
  return (
    <section id="about" className="about">
    <div className="container">

      <div className="section-title">
        <h2>{aboutDetails.aboutTitle}</h2>
        <p>{aboutDetails.aboutIntro}</p>
      </div>

      <div className="row">
        <div className="col-lg-4" data-aos="fade-right">
          <img src={profileImg} className="img-fluid" alt={profileName}/>
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>{designation}</h3>
          <p className="fst-italic">
            {aboutDetails.basicInfo}
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{basicContactDetails.birthday}</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span><a href='tel:+918279460724'>{basicContactDetails.phone}</a></span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{basicContactDetails.address}</span></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{basicContactDetails.age}</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{basicContactDetails.degree}</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span><a href="mailto:anshul.progorammingjobs@gmail.com">{basicContactDetails.mail}</a></span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>{basicContactDetails.isFreelance}</span></li>
              </ul>
            </div>
          </div>
          <p>
           {aboutDetails.anotherAboutIntro}
          </p>
        </div>
      </div>

    </div>
  </section>
  )
}

export default AboutContainer