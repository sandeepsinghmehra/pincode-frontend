import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import { SearchHome } from './components/SearchHome';
import Disclaimer from './pages/Disclaimer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermCondition from './pages/TermCondition';

function App() {
  return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
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