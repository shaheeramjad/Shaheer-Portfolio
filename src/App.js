import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import CaseStudy from "./components/projects/CaseStudy";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Features />
                  <Projects />
                  <Resume />
                  <Testimonial />
                  <Contact />
                  <Footer />
                  <FooterBottom />
                </>
              }
            />
            <Route path="/case-study/:projectId" element={<CaseStudy />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
