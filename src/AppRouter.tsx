import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Slang_page from './components/slang/Slang_Page';
import PA from './components/PA/PA';
import Scam from './components/scam/scam';
<<<<<<< HEAD
import Spid from './components/PA/Spid'; // importa il componente SPID

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/slang" element={<Slang_page />} />
      <Route path="/PA" element={<PA />} />
      <Route path="/scam" element={<Scam />} />
      <Route path="/spid" element={<Spid />} /> {/* aggiungi la route per SPID */}
    </Routes>
  );
=======
import Bot from './components/scam/bot';
import Phishing from './components/scam/phishing';

function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/slang" element={<Slang_page />} />
            <Route path="/PA" element={<PA />} />
            <Route path="/scam" element={<Scam />} />
            <Route path="/bot" element={<Bot />} />
            <Route path="/phishing" element={<Phishing />} />
        </Routes>
    )
>>>>>>> 9b85e12ceec5efb2a170f5b25c6f3b378038eacf
}

export default AppRouter;
