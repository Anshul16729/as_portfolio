import React, { useEffect, useState } from "react";
import { contactDetails } from "./constants";
import { basicContactDetails } from "../../utils/constants";

const ContactContainer = () => {
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  useEffect(() => {
    // Get current location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        error => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>{contactDetails.contactTitle}</h2>
          <p>{contactDetails.contactIntro}</p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>{contactDetails.locationTitle}</h4>
                <p>{basicContactDetails.completeAddress}</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>{contactDetails.email}</h4>
                <p>
                  <a href="mailto:anshul.programmingjobs@gmail.com">
                    {basicContactDetails.mail}
                  </a>
                </p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>{contactDetails.call}</h4>
                <p>
                  <a href="tel:+918279460724" >
                    {basicContactDetails.phone}
                  </a>
                </p>
              </div>

              {/* <iframe
                // src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d${currentLocation.lng}!3d${currentLocation.lat}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621`}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameborder="0"
                style={{ border: 0, width: "100%", height: "290px" }}
                allowFullScreen
                title="Current Location"
              ></iframe> */}
            </div>
          </div>

          {/* <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="row">
              <div className="form-group col-md-6">
                <label for="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label for="name">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label for="name">Subject</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                required
              />
            </div>
            <div className="form-group">
              <label for="name">Message</label>
              <textarea
                className="form-control"
                name="message"
                rows="10"
                required
              ></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;
