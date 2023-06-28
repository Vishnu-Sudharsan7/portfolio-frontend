import logo from './logo.svg';
import './App.css';
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import About from "./Components/about/About"
import Experience from "./Components/experience/Experience"
import Services from "./Components/services/Services"
import Portfolio from "./Components/portfolio/Portfolio"
import Testimonials from "./Components/testimonial/Testimonial"
import Footer from "./Components/footer/Footer"
import Contact from "./Components/contact/Contact"
function App() {
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
  );
}

export default App;
