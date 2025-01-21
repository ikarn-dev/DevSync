import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Home page components
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import ContactUs from './Components/ContactUs';

// Pages
import About from './Components/Pages/About';
import ProjectsPage from './Components/Pages/ProjectsPage';
import ServicesPage from './Components/Pages/ServicesPage';

// Create a Home component to organize home page sections
const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Projects />
      <Testimonials />
      <ContactUs />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;