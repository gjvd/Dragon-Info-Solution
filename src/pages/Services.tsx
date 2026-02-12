
import {
    Code,
    Cloud,
    Smartphone,
    Globe,
    Palette,
    Users,
    Coffee,
    Monitor,
    Layout,
    Database,
    Server,
    Layers
} from 'lucide-react';
import CTASection from '../components/CTASection';
import bgGradient from '../assets/images/bg-4.svg';

const Services = () => {
    const serviceCategories = [
        {
            title: "Core Offerings",
            items: [
                { name: "Web Development", icon: Globe, desc: "Responsive, high-performance websites tailored to your brand." },
                { name: "App Development", icon: Smartphone, desc: "Native and cross-platform mobile applications for iOS and Android." },
                { name: "UI/UX Design", icon: Palette, desc: "Intuitive and engaging user interfaces that drive conversion." },
                { name: "Staffing Solutions", icon: Users, desc: "Connecting you with top-tier tech talent to scale your team." }
            ]
        },
        {
            title: "Technology Stack",
            items: [
                { name: ".NET Development", icon: Code, desc: "Robust enterprise solutions using the Microsoft .NET ecosystem." },
                { name: "Java Development", icon: Coffee, desc: "Scalable, secure, and reliable backend systems." },
                { name: "Microsoft Solutions", icon: Monitor, desc: "Integration and development with Microsoft technologies." },
                { name: "CMS Development", icon: Layout, desc: "Custom Content Management Systems for easy content control." }
            ]
        },
        {
            title: "Cloud & Infrastructure",
            items: [
                { name: "AWS Services", icon: Cloud, desc: "Cloud infrastructure, migration, and management on Amazon Web Services." },
                { name: "Cloud Solutions", icon: Database, desc: "Scalable cloud architectures for modern businesses." }
            ]
        },
        {
            title: "Development Domains",
            items: [
                { name: "Front End", icon: Monitor, desc: "Modern, interactive client-side development (React, Vue, Angular)." },
                { name: "Back End", icon: Server, desc: "Powerful server-side logic, APIs, and database management." },
                { name: "Full Stack", icon: Layers, desc: "End-to-end development covering the entire technology stack." }
            ]
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-[#0a0a2e]">
            {/* Header */}
            <div className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={bgGradient} alt="Background" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] via-[#0a0a2e]/90 to-[#0a0a2e]"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Comprehensive digital solutions designed to accelerate your business growth and technological capabilities.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-6 py-16">
                {serviceCategories.map((category, idx) => (
                    <div key={idx} className="mb-20 last:mb-0">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                            {category.title}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {category.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-transform">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Process Section */}
            <div className="bg-[#05051a] py-20 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">How We Work</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Our proven methodology ensures transparent communication and successful delivery.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "We analyze your requirements and business goals." },
                            { step: "02", title: "Design", desc: "We create intuitive prototypes and system architectures." },
                            { step: "03", title: "Development", desc: "We build robust solutions using agile methodologies." },
                            { step: "04", title: "Deployment", desc: "We launch your product and provide ongoing support." }
                        ].map((process, i) => (
                            <div key={i} className="relative">
                                <div className="text-6xl font-bold text-white/5 absolute -top-8 left-0 select-none">{process.step}</div>
                                <div className="relative z-10 pt-4">
                                    <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                                    <p className="text-gray-400 text-sm">{process.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <CTASection />
        </div>
    );
};

export default Services;
