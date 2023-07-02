import React from 'react'
import Header from "../header/Header";
import Nav from "../nav/Nav";
import About from "../about/About"
import Experience from "../experience/Experience"
import Services from "../services/Services"
import Portfolio from "../portfolio/Portfolio"
import Testimonials from "../testimonial/Testimonial"
import Footer from "../footer/Footer"
import Contact from "../contact/Contact"
function Final() {
  return (
      <div className='App'>
     <Header />
     <Nav/>
     <About />
     <Experience />
     <Services />
     <Portfolio />
     {/* <Testimonials /> */}
     {/* <Nav />
     <About />
     <Experience />
     
     <Portfolio />
     <Testimonials />
     <Contact />
     <Footer /> */}

    </div>
   
  )
}

export default Final
