
import { motion } from 'framer-motion';
import { Globe, Lightbulb, Sparkles, Shield, Zap } from 'lucide-react';
import CTASection from '../components/CTASection';
import bgGradient from '../assets/images/bg-4.svg';

const About = () => {
    const values = [
        {
            title: "Innovation",
            description: "We stay at the forefront of technology to deliver cutting-edge solutions.",
            icon: Lightbulb,
            color: "text-blue-400"
        },
        {
            title: "Reliability",
            description: "Our systems are built to be robust, secure, and always available.",
            icon: Shield,
            color: "text-cyan-400"
        },
        {
            title: "Performance",
            description: "We optimize every line of code for maximum speed and efficiency.",
            icon: Zap,
            color: "text-purple-400"
        }
    ];

    return (
        <div className="pt-20 min-h-screen selection:bg-blue-500/30">
            {/* Hero Section */}
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
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Our Journey</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Dragon Info solution is more than just an IT company. We are a team of passionate innovators dedicated to reshaping the digital landscape through intelligent technology.
                    </motion.p>
                </div>
            </div>

            {/* Who We Are & Story Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                                <Sparkles size={16} />
                                <span>Who We Are</span>
                            </div>
                            <h2 className="text-4xl font-bold text-white leading-tight">
                                Delivering Excellence in <span className="text-blue-400">Digital Innovation</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Founded with a vision to empower businesses, Dragon Info solution has evolved into a powerhouse of software development and IT strategy. We bridge the gap between complex problems and elegant solutions.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                                        <Globe className="text-blue-400" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Global Perspective</h4>
                                        <p className="text-gray-400 text-sm">Working with clients across borders to deliver world-class products.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full" />
                            <div className="relative bg-white/5 border border-white/10 p-1 rounded-3xl backdrop-blur-sm overflow-hidden drop-shadow-2xl">
                                <div className="p-10 space-y-6">
                                    <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                                    <p className="text-gray-300">
                                        To empower organizations to embrace digital transformation with confidence and success. We build scalable systems that grow with your business and solve real-world challenges.
                                    </p>
                                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                    <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                                    <p className="text-gray-300">
                                        To be the leading catalyst for digital innovation globally, helping businesses of all sizes achieve their full potential through intelligent, sustainable technology.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Grid */}
            <section className="py-24 bg-white/5 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
                        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-blue-500/50 transition-all group"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${value.color}`}>
                                    <value.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default About;
