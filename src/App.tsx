
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Company from './pages/Company';
import Services from './pages/Services';
import Career from './pages/Career';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-[#0a0a2e] text-white selection:bg-blue-500/30 flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/company" element={<Company />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/career" element={<Career />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
