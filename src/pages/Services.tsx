
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    Layers,
    ChevronRight
} from 'lucide-react';
import CTASection from '../components/CTASection';
import bgGradient from '../assets/images/bg-4.svg';
import LiveChatCard from '../components/LiveChatCard';

const ServiceCard = ({
    category,
    index,
    isFocused,
    isDimmed,
    onHover,
    onLeave
}: {
    category: any,
    index: number,
    isFocused: boolean,
    isDimmed: boolean,
    onHover: () => void,
    onLeave: () => void
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            animate={{
                scale: isFocused ? 1.05 : 1,
                opacity: isDimmed ? 0.4 : 1,
                zIndex: isFocused ? 20 : 1,
            }}
            className={`relative overflow-hidden group rounded-3xl border transition-all duration-500 cursor-default min-h-[300px]
                ${isFocused
                    ? 'bg-blue-600/15 border-blue-500/50 shadow-[0_0_50px_-12px_rgba(59,130,246,0.4)]'
                    : 'bg-white/5 border-white/10 hover:border-white/20'}`}
        >
            <div className="p-8 h-full flex flex-col relative z-10">
                <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500
                        ${isFocused ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'bg-blue-500/10 text-blue-400'}`}>
                        <category.icon size={28} />
                    </div>
                    <h2 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {category.title}
                    </h2>
                </div>

                <div className="space-y-4 flex-grow">
                    <AnimatePresence mode="wait">
                        {isFocused ? (
                            <motion.div
                                key="items"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-3"
                            >
                                {category.items.map((item: any, i: number) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group/item"
                                    >
                                        <div className="mt-1 text-blue-400 group-hover/item:text-blue-300 transition-colors">
                                            <ChevronRight size={14} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                                            <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="description"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="h-full flex items-center"
                            >
                                <p className="text-gray-400 font-light leading-relaxed">
                                    Dive into our {category.title.toLowerCase()} tailored for modern enterprise needs.
                                    <span className="block mt-4 text-blue-400/60 text-sm font-medium italic">Hover to explore details →</span>
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Decorative background element */}
            <div className={`absolute -right-12 -bottom-12 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full transition-all duration-700
                ${isFocused ? 'scale-[2.5] opacity-60' : 'scale-100 opacity-20'}`} />
        </motion.div>
    );
};

const Services = () => {
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

    const serviceCategories = [
        {
            title: "Core Offerings",
            icon: Code,
            items: [
                { name: "Web Development", icon: Globe, desc: "Responsive, high-performance websites tailored to your brand." },
                { name: "App Development", icon: Smartphone, desc: "Native and cross-platform mobile applications for iOS and Android." },
                { name: "UI/UX Design", icon: Palette, desc: "Intuitive and engaging user interfaces that drive conversion." },
                { name: "Web Design", icon: Layout, desc: "Modern and aesthetic designs that captivate your audience." }
            ]
        },
        {
            title: "Design Services",
            icon: Palette,
            items: [
                { name: "UI/UX", icon: Palette, desc: "User-centric design flows and wireframes." },
                { name: "Graphics", icon: PenTool, desc: "Visual assets, branding, and marketing materials." },
                { name: "Web Design", icon: Layout, desc: "Website aesthetics and responsive layouts." },
                { name: "Video Editing", icon: Video, desc: "Professional video production and post-processing." }
            ]
        },
        {
            title: "Technology Stack",
            icon: Terminal,
            items: [
                { name: ".NET", icon: Code, desc: "Robust enterprise solutions using the Microsoft ecosystem." },
                { name: "JAVA", icon: Coffee, desc: "Scalable, secure, and reliable backend systems." },
                { name: "Python", icon: Terminal, desc: "Versatile development for web, data science, and automation." },
                { name: "AI/ML", icon: Brain, desc: "Intelligent solutions incorporating Artificial Intelligence and Machine Learning." }
            ]
        },
        {
            title: "Cloud Services",
            icon: Cloud,
            items: [
                { name: "AWS", icon: Cloud, desc: "Amazon Web Services infrastructure and management." },
                { name: "Google Cloud", icon: Cloud, desc: "GCP solutions for scalable and data-driven applications." },
                { name: "Microsoft Azure", icon: Cloud, desc: "Enterprise-grade cloud computing and services." }
            ]
        },
        {
            title: "Digital & Business Growth",
            icon: TrendingUp,
            items: [
                { name: "BDE-BDM", icon: TrendingUp, desc: "Business Development Executives and Managers to drive growth." },
                { name: "CRM", icon: Users, desc: "Customer Relationship Management implementation and strategy." },
                { name: "Digital Marketer", icon: Megaphone, desc: "Online marketing strategies to boost brand visibility." },
                { name: "Content Writer", icon: PenTool, desc: "Engaging content for blogs, websites, and marketing." },
                { name: "SEO", icon: Search, desc: "Search Engine Optimization to improve organic rankings." }
            ]
        },
        {
            title: "Testing | QA",
            icon: Bug,
            items: [
                { name: "Manual Testing", icon: CheckCircle, desc: "Human-driven testing to ensure user satisfaction." },
                { name: "Automation", icon: Bug, desc: "Automated scripts for regression and performance testing." }
            ]
        },
        {
            title: "Staffing Solutions",
            icon: Briefcase,
            items: [
                { name: "Contract Hiring", icon: Briefcase, desc: "Flexible staffing for short-term projects." },
                { name: "Permanent Hiring", icon: UserCheck, desc: "Long-term talent acquisition for your core team." },
                { name: "Hybrid Model", icon: Users, desc: "A balanced approach of onsite and remote working professionals." },
                { name: "Per-Hire", icon: UserPlus, desc: "Focused recruitment for specific critical roles." },
                { name: "Bulk Hiring", icon: Users, desc: "Mass recruitment drives to scale your workforce quickly." }
            ]
        },
        {
            title: "Web Development",
            icon: Globe,
            items: [
                { name: "MERN | MEAN Stack", icon: Layers, desc: "Full-stack JavaScript development (MongoDB, Express, React/Angular, Node)." },
                { name: "Front End", icon: Monitor, desc: "Engaging user interfaces using React, Vue, or Angular." },
                { name: "Back End", icon: Server, desc: "Robust server-side architecture and API development." }
            ]
        },
        {
            title: "Mobile Development",
            icon: Smartphone,
            items: [
                { name: "React Native", icon: Smartphone, desc: "Cross-platform mobile apps with a native feel." },
                { name: "Flutter", icon: Smartphone, desc: "Beautiful, natively compiled applications from a single codebase." },
                { name: "iOS", icon: Tablet, desc: "Native iOS development for Apple's ecosystem." },
                { name: "Android", icon: Smartphone, desc: "Native Android development for wide reach." },
                { name: "Swift & Kotlin", icon: Code, desc: "Modern languages for robust native mobile performance." }
            ]
        }
    ];

    return (
        <div className="pt-20 min-h-screen selection:bg-blue-500/30">
            {/* Header */}
            <div className="relative py-24 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <img src={bgGradient} alt="Background" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent"></div>
                </motion.div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Precision engineering, creative design, and strategic staffing to propel your digital evolution.
                    </motion.p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceCategories.map((category, idx) => (
                        <ServiceCard
                            key={idx}
                            category={category}
                            index={idx}
                            isFocused={focusedIndex === idx}
                            isDimmed={focusedIndex !== null && focusedIndex !== idx}
                            onHover={() => setFocusedIndex(idx)}
                            onLeave={() => setFocusedIndex(null)}
                        />
                    ))}
                </div>
            </div>

            {/* Process Section */}
            <div className="bg-white/5 py-24 border-y border-white/5 mt-16 relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-white mb-4"
                        >
                            Our Seamless Delivery Process
                        </motion.h2>
                        <p className="text-gray-400 max-w-2xl mx-auto font-light">A meticulous approach to transforming your vision into high-impact digital reality.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-12">
                        {[
                            { step: "01", title: "Discovery", desc: "In-depth analysis of your requirements and business ecosystem." },
                            { step: "02", title: "Strategy", desc: "Architecting intuitive prototypes and scalable system designs." },
                            { step: "03", title: "Execution", desc: "Agile development cycles with continuous quality assurance." },
                            { step: "04", title: "Launch", desc: "Seamless deployment and proactive post-launch optimization." }
                        ].map((process, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative group"
                            >
                                <div className="text-8xl font-black text-white/5 absolute -top-12 left-0 select-none group-hover:text-blue-500/10 transition-colors duration-500">{process.step}</div>
                                <div className="relative z-10 pt-4">
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{process.title}</h3>
                                    <div className="w-12 h-1 bg-blue-500 mb-4 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                    <p className="text-gray-400 text-sm leading-relaxed font-light">{process.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Live Chat Section */}
            <div className="container mx-auto px-6 py-24 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full max-w-3xl"
                >
                    <LiveChatCard className="bg-gradient-to-br from-blue-600/10 to-cyan-600/5 border-white/10 backdrop-blur-sm shadow-2xl" />
                </motion.div>
            </div>

            <CTASection />
        </div>
    );
};

export default Services;
