
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#020210] py-16 border-t border-white/5 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue-900/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="inline-block mb-6">
                            <h3 className="text-2xl font-bold text-white">Dragon Info solution</h3>
                            <p className="text-xs text-blue-400 uppercase tracking-widest mt-1">Innovate. Build. Scale.</p>
                        </Link>
                        <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
                            We are a forward-thinking IT and software development company that blends innovation, technology, and creativity to deliver cutting-edge solutions.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Home</Link></li>
                            <li><Link to="/company" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Company</Link></li>
                            <li><Link to="/services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Services</Link></li>
                            <li><Link to="/career" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Career</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 text-lg">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                <span>info@dragon.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                <span>123 Tech Park, Innovation City, Digital Valley, CA 94043</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Dragon Info solution. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
