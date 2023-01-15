import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Nav/Navbar';
import Search from './components/Search';
import About from './pages/About';
import Contact from './pages/Contact';
import Disclaimer from './pages/Disclaimer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermCondition from './pages/TermCondition';

function App() {
  return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path="/disclaimer" exact element={<Disclaimer />} />
          <Route path="/privacy-policy" exact element={<PrivacyPolicy />} />
          <Route path="/term-condition" exact element={<TermCondition />} />
        </Routes>
        <Footer />
      </BrowserRouter> 
      {/* <Search details={initialDetails}/> */}
      {/* <SearchHome /> */}
      {/* <Disclaimer /> */}
      {/* <Search /> */}
      
    </div>
  );
}
export default App