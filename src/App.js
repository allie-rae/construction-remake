import React, { createRef } from 'react';
import Navbar from './components/navbar/Navbar';
import Jumbotron from './components/jumbotron/Jumbotron';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Gallery from './components/gallery/Gallery';
import About from './components/about/About';


function App() {
  const homeRef = React.createRef()
  const aboutRef = React.createRef()
  const servicesRef = React.createRef()
  const galleryRef = React.createRef()
  const contactRef = React.createRef()
  return (
    <div className="App">
      <Navbar servicesRef={servicesRef} aboutRef={aboutRef} homeRef={homeRef} contactRef={contactRef} galleryRef={galleryRef} />
      <Jumbotron />
      <About aboutRef={aboutRef} />
      <Services servicesRef={servicesRef} galleryRef={galleryRef} />
      <Gallery galleryRef={galleryRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
}

export default App;
