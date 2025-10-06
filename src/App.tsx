import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AccessibilityProvider } from './context/AccessibilityContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PubblicaAmministrazione from './pages/PubblicaAmministrazione';
import Scam from './pages/Scam';
import Slang from './pages/Slang';
import SpidGuide from './pages/SpidGuide';
import PagoPaGuide from './pages/PagoPaGuide';
import AppIOGuide from './pages/AppIOGuide';
import CIEGuide from './pages/CIEGuide';
import Phishing from './pages/Phishing';
import PhoneScam from './pages/PhoneScam';
import FakeNews from './pages/FakeNews';
import PasswordSecurity from './pages/PasswordSecurity';
import PhishingChatbot from './components/PhishingChatbot';
import './App.css';

function App() {
  return (
    <AccessibilityProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pubblica-amministrazione" element={<PubblicaAmministrazione />} />
              <Route path="/scam" element={<Scam />} />
              <Route path="/slang" element={<Slang />} />
              <Route path="/spid-guide" element={<SpidGuide />} />
              <Route path="/pagopa-guide" element={<PagoPaGuide />} />
              <Route path="/appio-guide" element={<AppIOGuide />} />
              <Route path="/cie-guide" element={<CIEGuide />} />
              <Route path="/phishing" element={<Phishing />} />
              <Route path="/phone-scam" element={<PhoneScam />} />
              <Route path="/fake-news" element={<FakeNews />} />
              <Route path="/password-security" element={<PasswordSecurity />} />
            </Routes>
          </main>
          
          <Footer />
          <PhishingChatbot />
        </div>
      </Router>
    </AccessibilityProvider>
  );
}

export default App
