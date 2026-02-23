
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Company from './pages/Company';
import Services from './pages/Services';
import Career from './pages/Career';
import Contact from './pages/Contact';
import LoadingScreen from './components/LoadingScreen';
import TawkToWidget from './components/TawkToWidget';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <Router>
            <ScrollToTop />
            <TawkToWidget />
            <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
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
