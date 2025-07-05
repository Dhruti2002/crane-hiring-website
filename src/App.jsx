import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Index from './Components/Page/Index';
import About from './Components/Page/About';
import ScrollToTop from './Components/Page/ScrollToTop';
import Footer from './Components/Footer/Footer';
import Tours from './Components/Page/Services';
import Contact from './Components/Page/Contact';

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
