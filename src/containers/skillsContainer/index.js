import React from 'react'
import { skillsDetails } from './constants'

const SkillsSection = () => {
  return (
    <section id="skills" className="skills section-bg">
    <div className="container">
      <div className="section-title">
        <h2>{skillsDetails.skillTitle}</h2>
        
      </div>

      <div className="row skills-content">
        <div className="col-lg-6" data-aos="fade-up">
          <div className="progress">
            <span className="skill">
              HTML <i className="val">100%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">
              CSS <i className="val">70%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">
              JavaScript <i className="val">75%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div className="progress">
            <span className="skill">
              NodeJS <i className="val">80%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">
              ReactJS /React Native <i className="val">80%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">
              SQL/NOSQL <i className="val">65%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="55"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SkillsSection