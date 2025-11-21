import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
        <Router>
          <div className="min-vh-100 position-relative bg-theme ">
           
          <div className="relative z-10">
          <div className='bg-deco deco-top top-left py-10  mx-90'>
              <div className=" container ">
                <Header />
              </div>
            </div>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;