import { Target, Lightbulb, Star, Briefcase, Repeat, CheckCircle2 } from 'lucide-react';
import CTASection from '../components/CTASection';
import bgGradient from '../assets/images/bg-4.svg';

const Company = () => {
    const team = [
        { name: "Rushil Mehta", role: "Founder, CEO & Agency Manager", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
        { name: "Giriraj Patoliya", role: "Project Manager", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
        { name: "Madhav Bhatt", role: "CTO", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
        { name: "Diya Bhatt", role: "HR Manager", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" }
    ];

    const stats = [
        { label: "Projects Completed", value: "100+", icon: CheckCircle2, color: "text-blue-400" },
        { label: "Client Satisfaction", value: "98%", icon: Star, color: "text-yellow-400" },
        { label: "Client Retention", value: "85%", icon: Repeat, color: "text-green-400" },
        { label: "Years Experience", value: "7+", icon: Briefcase, color: "text-purple-400" }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CTO, TechFlow",
            content: "Dragon Info Solution transformed our legacy systems into a modern AI-driven platform. Their expertise in AI software solutions is unmatched.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
        },
        {
            name: "Michael Chen",
            role: "Founder, StartUpX",
            content: "The team's dedication and technical prowess helped us launch our MVP in record time. Highly recommended for any complex software needs.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
        },
        {
            name: "Emily Davis",
            role: "Director, CreativeCorp",
            content: "Exceptional service and support. They didn't just build software; they built a solution that solved our core business problems.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
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
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Dragon Info Solution</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We are a premier AI Software Solution company, dedicated to transforming complex challenges into elegant, scalable solutions.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-16">

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors">
                            <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Our Story</h2>
                        <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
                        <p className="text-gray-400 leading-relaxed">
                            Founded with a vision to bridge the gap between business needs and technological possibilities, Dragon Info Solution has grown into a premier digital transformation partner. We specialize in AI-driven software solutions that empower businesses to scale and innovate.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Our team of expert developers, designers, and strategists work in unison to deliver products that are not only functional but also intuitive and future-proof.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                        <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-4">
                                    <div className="text-4xl font-bold text-blue-400 mb-2">7+</div>
                                    <div className="text-sm text-gray-400">Years Experience</div>
                                </div>
                                <div className="text-center p-4">
                                    <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
                                    <div className="text-sm text-gray-400">Projects Delivered</div>
                                </div>
                                <div className="text-center p-4">
                                    <div className="text-4xl font-bold text-indigo-400 mb-2">50+</div>
                                    <div className="text-sm text-gray-400">Happy Clients</div>
                                </div>
                                <div className="text-center p-4">
                                    <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
                                    <div className="text-sm text-gray-400">Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leadership Team */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Meet Our Leadership</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">The visionaries driving our innovation and success.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-2xl">
                                <img src={member.image} alt={member.name} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a2e] via-transparent to-transparent opacity-90"></div>
                                <div className="absolute bottom-0 left-0 w-full p-6">
                                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-blue-400 text-sm">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">What Our Clients Say</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-4 mb-6">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 italic">"{testimonial.content}"</p>
                                <div className="flex gap-1 mt-4 text-yellow-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    <div className="bg-[#05051a] p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                            <Target size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-gray-400 leading-relaxed">
                            To empower businesses with innovative AI software solutions that drive growth, efficiency, and competitive advantage in an ever-evolving technological landscape.
                        </p>
                    </div>
                    <div className="bg-[#05051a] p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 text-purple-400">
                            <Lightbulb size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                        <p className="text-gray-400 leading-relaxed">
                            To be the global standard for digital excellence, recognized for our commitment to quality, innovation, and client success.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Innovation", desc: "We constantly push boundaries to find better solutions." },
                            { title: "Integrity", desc: "We build trust through transparency and honest communication." },
                            { title: "Excellence", desc: "We deliver nothing short of the best quality in every line of code." },
                            { title: "Collaboration", desc: "We work closely with our clients as true partners." },
                            { title: "Agility", desc: "We adapt quickly to changes and new requirements." },
                            { title: "User-Centric", desc: "We design with the end-user in mind at every step." }
                        ].map((value, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                                    <p className="text-gray-400 text-sm">{value.desc}</p>
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

export default Company;
