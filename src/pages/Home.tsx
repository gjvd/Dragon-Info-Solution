
import { ArrowRight, Flame, Globe, Code, BarChart, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import bgGradient from '../assets/images/bg-4.svg';
import dragonImage from '../assets/images/bg-3.svg';

import CTASection from '../components/CTASection';

const Home = () => {
    const features = [
        {
            title: "Who we are",
            description: "Dragon Info solution is a forward-thinking IT and software development company that blends innovation, technology, and creativity.",
            icon: Globe
        },
        {
            title: "Our Mission",
            description: "We empower organizations to embrace digital transformation with confidence and success. We build scalable systems that grow with your business.",
            icon: Code
        },
        {
            title: "Our Vision",
            description: "To be the leading catalyst for digital innovation, helping businesses of all sizes achieve their full potential through intelligent technology.",
            icon: BarChart
        }
    ];

    const services = [
        { title: "Custom Software Development", desc: "Tailored solutions for your unique business needs." },
        { title: "Mobile App Development", desc: "Native and cross-platform apps that engage users." },
        { title: "Cloud Solutions", desc: "Scalable infrastructure for modern enterprises." },
        { title: "AI & Machine Learning", desc: "Intelligent systems that automate and optimize." },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img src={bgGradient} alt="Background" className="w-full h-full object-cover opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 max-w-2xl animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                            At Dragon Info solution, we create <span className="text-blue-400">powerful</span>, <span className="text-purple-400">scalable</span>, and <span className="text-indigo-400">intelligent</span> digital solutions.
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            We empower organizations to embrace digital transformation with confidence and success. Transform your ideas into growth.
                        </p>

                        <Link to="/contact" className="group inline-flex items-center gap-3 bg-transparent border border-white/20 hover:border-blue-500 hover:bg-blue-500/10 text-white px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm">
                            <span className="font-semibold tracking-wide">Let's Build Your Next Big Idea</span>
                            <Flame className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* <div className="hidden md:flex justify-end relative animate-fade-in">
                        <img
                            src={dragonImage}
                            alt="Dragon Illustration"
                            className="w-full max-w-lg object-contain opacity-80 drop-shadow-[0_0_50px_rgba(59,130,246,0.3)] animate-float"
                        />
                    </div> */}
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
                        <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-300">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-white/5 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
                        <p className="text-gray-400">We deliver end-to-end digital solutions designed to solve complex challenges.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="p-6 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-blue-500/50 transition-all duration-300 group">
                                <div className="mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                    <Cpu size={32} />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-400">{service.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/services" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                            View All Services <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
};

export default Home;
