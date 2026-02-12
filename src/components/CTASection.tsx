
import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-20 bg-[#05051a] border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/5 blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        Ready to transform your vision into reality?
                    </h2>
                    <Link
                        to="/contact"
                        className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-white hover:text-blue-400 transition-colors"
                    >
                        <span>Let's Build Your Next Big Idea</span>
                        <Flame className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
