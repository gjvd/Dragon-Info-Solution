
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
    Server,
    Briefcase,
    UserCheck,
    UserPlus,
    Brain,
    Terminal,
    Tablet,
    PenTool,
    Video,
    CheckCircle,
    Bug,
    TrendingUp,
    Megaphone,
    Search,
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
                { name: "Web Design", icon: Layout, desc: "Modern and aesthetic designs that captivate your audience." }
            ]
        },
        {
            title: "Staffing Solutions",
            items: [
                { name: "Contract Hiring", icon: Briefcase, desc: "Flexible staffing for short-term projects." },
                { name: "Permanent Hiring", icon: UserCheck, desc: "Long-term talent acquisition for your core team." },
                { name: "Hybrid Model", icon: Users, desc: "A balanced approach of onsite and remote working professionals." },
                { name: "Per-Hire", icon: UserPlus, desc: "Focused recruitment for specific critical roles." },
                { name: "Bulk Hiring", icon: Users, desc: "Mass recruitment drives to scale your workforce quickly." }
            ]
        },
        {
            title: "Technology Stack",
            items: [
                { name: ".NET", icon: Code, desc: "Robust enterprise solutions using the Microsoft ecosystem." },
                { name: "JAVA", icon: Coffee, desc: "Scalable, secure, and reliable backend systems." },
                { name: "Python", icon: Terminal, desc: "Versatile development for web, data science, and automation." },
                { name: "AI/ML", icon: Brain, desc: "Intelligent solutions incorporating Artificial Intelligence and Machine Learning." }
            ]
        },
        {
            title: "Cloud Services",
            items: [
                { name: "AWS", icon: Cloud, desc: "Amazon Web Services infrastructure and management." },
                { name: "Google Cloud", icon: Cloud, desc: "GCP solutions for scalable and data-driven applications." },
                { name: "Microsoft Azure", icon: Cloud, desc: "Enterprise-grade cloud computing and services." }
            ]
        },
        {
            title: "Web Development",
            items: [
                { name: "MERN | MEAN Stack", icon: Layers, desc: "Full-stack JavaScript development (MongoDB, Express, React/Angular, Node)." },
                { name: "Front End", icon: Monitor, desc: "Engaging user interfaces using React, Vue, or Angular." },
                { name: "Back End", icon: Server, desc: "Robust server-side architecture and API development." }
            ]
        },
        {
            title: "Mobile Development",
            items: [
                { name: "React Native", icon: Smartphone, desc: "Cross-platform mobile apps with a native feel." },
                { name: "Flutter", icon: Smartphone, desc: "Beautiful, natively compiled applications from a single codebase." },
                { name: "iOS", icon: Tablet, desc: "Native iOS development for Apple's ecosystem." },
                { name: "Android", icon: Smartphone, desc: "Native Android development for wide reach." },
                { name: "Swift & Kotlin", icon: Code, desc: "Modern languages for robust native mobile performance." }
            ]
        },
        {
            title: "Design Services",
            items: [
                { name: "UI/UX", icon: Palette, desc: "User-centric design flows and wireframes." },
                { name: "Graphics", icon: PenTool, desc: "Visual assets, branding, and marketing materials." },
                { name: "Web Design", icon: Layout, desc: "Website aesthetics and responsive layouts." },
                { name: "Video Editing", icon: Video, desc: "Professional video production and post-processing." }
            ]
        },
        {
            title: "Testing | QA",
            items: [
                { name: "Manual Testing", icon: CheckCircle, desc: "Human-driven testing to ensure user satisfaction." },
                { name: "Automation", icon: Bug, desc: "Automated scripts for regression and performance testing." }
            ]
        },
        {
            title: "Digital & Business Growth",
            items: [
                { name: "BDE-BDM", icon: TrendingUp, desc: "Business Development Executives and Managers to drive growth." },
                { name: "CRM", icon: Users, desc: "Customer Relationship Management implementation and strategy." },
                { name: "Digital Marketer", icon: Megaphone, desc: "Online marketing strategies to boost brand visibility." },
                { name: "Content Writer", icon: PenTool, desc: "Engaging content for blogs, websites, and marketing." },
                { name: "SEO", icon: Search, desc: "Search Engine Optimization to improve organic rankings." }
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
                        Comprehensive digital, staffing, and design solutions tailored to accelerate your business growth.
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
