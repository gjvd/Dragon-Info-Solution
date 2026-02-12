
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Company', path: '/company' },
        { name: 'Services', path: '/services' },
        { name: 'Career', path: '/career' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#05051a]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex flex-col group">
                    <span className="text-2xl font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">Dragon Info solution</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider group-hover:text-gray-300">Innovate. Build. Scale. Lead.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        link.path.startsWith('/#') ? (
                            <a key={link.name} href={link.path.substring(1)} className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide relative group">
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                            </a>
                        ) : (
                            <Link key={link.name} to={link.path} className={`text-sm font-medium uppercase tracking-wide transition-colors relative group ${location.pathname === link.path ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                        )
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#05051a] border-t border-gray-800 p-6 flex flex-col space-y-4 shadow-2xl animate-fade-in">
                    {navLinks.map((link) => (
                        link.path.startsWith('/#') ? (
                            <a key={link.name} href={link.path.substring(1)} className="text-gray-300 hover:text-white text-lg font-medium" onClick={() => setIsOpen(false)}>
                                {link.name}
                            </a>
                        ) : (
                            <Link key={link.name} to={link.path} className="text-gray-300 hover:text-white text-lg font-medium" onClick={() => setIsOpen(false)}>
                                {link.name}
                            </Link>
                        )
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
