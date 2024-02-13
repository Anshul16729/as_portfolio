import React from 'react'
import { resumeDetails } from './constants'
import { basicContactDetails, profileName } from '../../utils/constants'

const ResumeContainer = () => {
  return (
    <section id="resume" className="resume">
    <div className="container">
      <div className="section-title">
        <h2>{resumeDetails.resumeTitle}</h2>
        <p>
          {resumeDetails.resumeIntro}
        </p>
      </div>

      <div className="row">
        <div className="col-lg-6" data-aos="fade-up">
          <h3 className="resume-title">Sumary</h3>
          <div className="resume-item pb-0">
            <h4>{profileName}</h4>
            <p>
              <em>
                {resumeDetails.resumeSummary}
              </em>
            </p>
            <ul>
              <li>{basicContactDetails.address}</li>
              <li>{basicContactDetails.phone}</li>
              <li>{basicContactDetails.whatsapp}</li>
              <li>{basicContactDetails.mail}</li>
            </ul>
          </div>

          <h3 className="resume-title">{resumeDetails.education}</h3>
          <div className="resume-item">
            <h4>{resumeDetails.masters.mastersDegree}</h4>
            <h5>{resumeDetails.masters.mastersYear}</h5>
            <p>
              <em>{resumeDetails.masters.mastersCollege}</em>
            </p>
          </div>
          <div className="resume-item">
            <h4>{resumeDetails.bachelors.bachelorsDegree}</h4>
            <h5>{resumeDetails.bachelors.bachelorsYear}</h5>
            <p>
              <em>{resumeDetails.bachelors.bachelorsCollege}</em>
            </p>
            
          </div>
          <div className="resume-item">
            <h4>{resumeDetails.certification.certificationDegree}</h4>
            <h5>{resumeDetails.certification.certificationYear}</h5>
            <p>
              <em>{resumeDetails.certification.certificationCollege}</em>
            </p>
            
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 className="resume-title">{resumeDetails.professionalExperienceTitle}</h3>
          {resumeDetails.experience.map((list,index)=>{
              return (<div className="resume-item" key={index}>
            
              <h4>{list.experienceTitle}</h4>
              <h5>{list.year}</h5>
              <p>
                <em>{list.location} </em>
              </p>
              <ul>
                {list.responsibilities.map(((items,index)=>{
                  return (<li key={index}>{items.desc}</li>)
                }))}
              </ul>
            </div>)
            })}
          
          {/* <div className="resume-item">
            <h4>"nkjlk"</h4>
            <h5>2017 - 2018</h5>
            <p>
              <em>Stepping Stone Advertising, New York, NY</em>
            </p>
            <ul>
              <li>
                Developed numerous marketing programs (logos,
                brochures,infographics, presentations, and
                advertisements).
              </li>
              <li>
                Managed up to 5 projects or tasks at a given time while
                under pressure
              </li>
              <li>
                Recommended and consulted with clients on the most
                appropriate graphic design
              </li>
              <li>
                Created 4+ design presentations and proposals a month for
                clients and account managers
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  </section>
  )
}

export default ResumeContainer