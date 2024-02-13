import React from "react";
import "./style.css";
// import './App.css';

import MobileNavToggleButton from "./components/mobileNavToggleButton";
import { Home, About, Resume, Portfolio, Services, Contact } from "./routes/routes";
// import About from "./pages/about";
import Navigation from "./reusable-components/navigation";
import Facts from "./containers/factsContainer";
import SkillsSection from "./containers/skillsContainer";
import TestimonialsSection from "./containers/testimonialsContainer";
import Footer from "./components/footer";
import BackToTop from "./components/backToTopButton";
import Layout from "./layout";

function App() {
  return (
    <Layout/>
  );
}

export default App;
