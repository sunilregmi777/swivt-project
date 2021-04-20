import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import WhatWeDo from './components/what-we-do/WhatWeDo';
import Footer from './components/footer/Footer';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <>
        <NavBar />
        <Hero />
        <About />
        <WhatWeDo />
        <Testimonials />
        <Footer />
    </>
  );
}

export default App;
