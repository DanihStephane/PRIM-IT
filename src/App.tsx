import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import Login from './pages/client/Login';
import Register from './pages/client/Register';
import Dashboard from './pages/client/Dashboard';
import Settings from './pages/client/Settings';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLeads from './pages/admin/AdminLeads';
import AdminContent from './pages/admin/AdminContent';
import AdminSettings from './pages/admin/AdminSettings';

function App() {
  return (
    <LanguageProvider>
        <Router>
          <Routes>
            {/* Routes Admin Back-office */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/leads" element={<AdminLeads />} />
            <Route path="/admin/content" element={<AdminContent />} />
            <Route path="/admin/settings" element={<AdminSettings />} />

            {/* Routes Espace Client */}
            <Route path="/client/login" element={<Login />} />
            <Route path="/client/register" element={<Register />} />
            <Route path="/client/dashboard" element={<Dashboard />} />
            <Route path="/client/settings" element={<Settings />} />

            {/* Routes Site Principal */}
            <Route path="*" element={
              <div className="min-vh-100 position-relative bg-theme ">
                <div className="relative z-10">
                  <div className='mx-90'>
                    <div className="container">
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
                  <ChatBot />
                </div>
              </div>
            } />
          </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;