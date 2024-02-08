import React from 'react'
import profileImg from '../../assets/img/profile-img.jpg'
import { SocialMediaUrl } from '../../utils/Constants';


const Header = () => {
  return (
    <header id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        <img src={profileImg} alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="index.html">Anshul Shrivastava</a></h1>
        <div className="social-links mt-3 text-center">
          <a href={SocialMediaUrl.fb} className="facebook" target='_blank'><i className="bx bxl-facebook"></i></a>
          <a href={SocialMediaUrl.insta} className="instagram" target='_blank'><i className="bx bxl-instagram"></i></a>
          <a href={SocialMediaUrl.skype} className="google-plus" target='_blank'><i className="bx bxl-skype"></i></a>
          <a href={SocialMediaUrl.linkedin} className="linkedin" target='_blank'><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
      {/* <!-- .nav-menu --> */}
    </div>
  </header>
  )
}

export default Header