import React from "react";
import { resumeDetails } from "./constants";
import { basicContactDetails, profileName } from "../../utils/constants";
import { color } from "../../themes/color";

const ResumeContainer = () => {
  // const handleDownload = () => {
  //   // Here you can define the content of the file you want to download
  //   const msContent = 'This is the content of the file you want to download.';

  //   const blob = new Blob([msContent], { type: 'application/msword' });

  //   // Create a URL representing the Blob object
  //   const url = URL.createObjectURL(blob);

  //   // Create a link element
  //   const link = document.createElement('a');

  //   // Set the href attribute of the link to the URL representing the Blob object
  //   link.href = url;

  //   // Set the download attribute of the link to specify the filename
  //   link.download = 'download.doc';

  //   // Append the link to the document body
  //   document.body.appendChild(link);

  //   // Programmatically click the link to trigger the download
  //   link.click();

  //   // Clean up by removing the link and revoking the URL
  //   document.body.removeChild(link);
  //   URL.revokeObjectURL(url);
  // };
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>{resumeDetails.resumeTitle}</h2>
          <p>
            {resumeDetails.resumeIntro}
            <a
              // onClick={handleDownload}
              style={{ cursor: "pointer", color: color._149ddd}}
              href="https://docs.google.com/document/d/1uyYjcQ2HBl-jDpghMEpOGhUc6pt-QGAt/edit?usp=drive_link&ouid=115110223783799042683&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume&nbsp;
            </a>
            to check my detailed work experience.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>{profileName}</h4>
              <p>
                <em>{resumeDetails.resumeSummary}</em>
              </p>
              <ul>
                <li>{basicContactDetails.address}</li>
                <li>{basicContactDetails.phone}</li>
                <li>{basicContactDetails.mail}</li>
                <li><a href={basicContactDetails.git} target="_blank">{basicContactDetails.github}</a></li>
                <li>
                  <a href={basicContactDetails.linkedinUrl} target="_blank">
                    {basicContactDetails.linkedin}
                  </a>
                </li>
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
            <h3 className="resume-title">
              {resumeDetails.professionalExperienceTitle}
            </h3>
            {resumeDetails.experience.map((list, index) => {
              return (
                <div className="resume-item" key={index}>
                  <h4>{list.experienceTitle}</h4>
                  <h5>{list.year}</h5>
                  <p>
                    <em>{list.location} </em>
                  </p>
                  <ul>
                    {list.responsibilities.map((items, index) => {
                      return <li key={index}>{items.desc}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeContainer;
