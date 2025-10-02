import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Slang_page from './components/slang/Slang_Page';
import PA from './components/PA/PA';
import Scam from './components/scam/scam';
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
}

export default AppRouter;
