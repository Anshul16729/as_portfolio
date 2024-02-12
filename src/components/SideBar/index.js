import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import profileImg from '../../assets/img/my-profile.jpg'
import { SocialMediaUrl } from '../../utils/Constants';
import { Link as ScrollLink } from 'react-scroll';

// Lazy-loaded components
// const Resume = lazy(() => import('../Resume'));
// const Portfolio = lazy(() => import('../Portfolio'));
// const Services = lazy(() => import('../Services'));
// const Contact = lazy(() => import('../Contact'));

const SideBar = () => {
  return (
  //   <header id="header">
  //   <div className="d-flex flex-column">

  //     <div className="profile">
  //       <img src={profileImg} alt="" className="img-fluid rounded-circle"/>
  //       <h1 className="text-light"><a href="index.html">Anshul Shrivastava</a></h1>
  //       <div className="social-links mt-3 text-center">
  //         <a href={SocialMediaUrl.fb} className="facebook" target='_blank'><i className="bx bxl-facebook"></i></a>
  //         <a href={SocialMediaUrl.insta} className="instagram" target='_blank'><i className="bx bxl-instagram"></i></a>
  //         <a href={SocialMediaUrl.skype} className="google-plus" target='_blank'><i className="bx bxl-skype"></i></a>
  //         <a href={SocialMediaUrl.linkedin} className="linkedin" target='_blank'><i className="bx bxl-linkedin"></i></a>
  //       </div>
  //     </div>

  //     <nav id="navbar" className="nav-menu navbar">
  //       <ul>
  //         <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
  //         <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
  //         <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
  //         <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
  //         <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
  //         <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
  //       </ul>
  //     </nav>
  //     {/* <!-- .nav-menu --> */}
  //   </div>
  // </header>

  // <header id="header">
  //     <div className="d-flex flex-column">
  //       <div className="profile">
  //         <img src={profileImg} alt="" className="img-fluid rounded-circle"/>
  //         <h1 className="text-light"><a href="/">Anshul Shrivastava</a></h1>
  //         <div className="social-links mt-3 text-center">
  //           <a href={SocialMediaUrl.fb} className="facebook" target='_blank'><i className="bx bxl-facebook"></i></a>
  //           <a href={SocialMediaUrl.insta} className="instagram" target='_blank'><i className="bx bxl-instagram"></i></a>
  //           <a href={SocialMediaUrl.skype} className="google-plus" target='_blank'><i className="bx bxl-skype"></i></a>
  //           <a href={SocialMediaUrl.linkedin} className="linkedin" target='_blank'><i className="bx bxl-linkedin"></i></a>
  //         </div>
  //       </div>

  //       <Router basename="/">
  //         <nav id="navbar" className="nav-menu navbar">
  //         <ul>
  //           <li><Link to="/" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></Link></li>
  //           <li><Link to="/about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></Link></li>
  //           <li><Link to="/resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
  //           <li><Link to="/portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></Link></li>
  //           <li><Link to="/services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></Link></li>
  //           <li><Link to="/contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></Link></li>
  //         </ul>
  //           <Suspense fallback={<div>Loading...</div>}>
  //             <Routes>
  //               <Route path="/" element={<Home />} />
  //               <Route path="/about" element={<About />} />
  //               {/* <Route path="/resume" element={<Resume />} /> */}
  //               {/* <Route path="/portfolio" element={<Portfolio />} />
  //               <Route path="/services" element={<Services />} />
  //               <Route path="/contact" element={<Contact />} /> */}
  //             </Routes>
  //           </Suspense>
  //         </nav>
  //       </Router>
  //       {/* <!-- .nav-menu --> */}
  //     </div>
  //   </header>


  <header id="header">
  <div className="d-flex flex-column">

    <div className="profile">
      <img src={profileImg} alt="" className="img-fluid rounded-circle"/>
      <h1 className="text-light"><a to="/">Anshul Shrivastava</a></h1>
      <div className="social-links mt-3 text-center">
        <a href={SocialMediaUrl.fb} className="facebook" target='_blank'><i className="bx bxl-facebook"></i></a>
        <a href={SocialMediaUrl.insta} className="instagram" target='_blank'><i className="bx bxl-instagram"></i></a>
        <a href={SocialMediaUrl.skype} className="google-plus" target='_blank'><i className="bx bxl-skype"></i></a>
        <a href={SocialMediaUrl.linkedin} className="linkedin" target='_blank'><i className="bx bxl-linkedin"></i></a>
      </div>
    </div>

    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li><ScrollLink to="hero" spy={true} smooth={true} offset={-70} duration={500} className="nav-link pointer"><i className="bx bx-home"></i> <span>Home</span></ScrollLink></li>
        <li><ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-link pointer"><i className="bx bx-user"></i> <span>About</span></ScrollLink></li>
        <li><ScrollLink to="resume" spy={true} smooth={true} offset={-70} duration={500} className="nav-link pointer"><i className="bx bx-file-blank"></i> <span>Resume</span></ScrollLink></li>
        <li><ScrollLink to="portfolio" spy={true} smooth={true} offset={-70} duration={500} className="nav-link pointer"><i className="bx bx-book-content"></i> <span>Portfolio</span></ScrollLink></li>
        <li><ScrollLink to="services" spy={true} smooth={true} offset={-70} duration={500} className="nav-link pointer"><i className="bx bx-server"></i> <span>Services</span></ScrollLink></li>
        <li><ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link pointer"><i className="bx bx-envelope"></i> <span>Contact</span></ScrollLink></li>
      </ul>
    </nav>
    {/* <!-- .nav-menu --> */}
  </div>
</header>


  )
}

export default SideBar