
import { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import bgGradient from '../assets/images/bg-4.svg';
import CTASection from '../components/CTASection';
import ApplicationForm from '../components/ApplicationForm';

const Career = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');

    const jobs = [
        {
            title: "Senior Frontend Developer",
            type: "Full-time",
            location: "Remote / Hybrid",
            dept: "Engineering",
            desc: "We are looking for an experienced React developer to lead our frontend initiatives."
        },
        {
            title: "Backend Engineer (Node.js)",
            type: "Full-time",
            location: "On-site",
            dept: "Engineering",
            desc: "Join our backend team to build scalable APIs and microservices."
        },
        {
            title: "UI/UX Designer",
            type: "Contract",
            location: "Remote",
            dept: "Design",
            desc: "Create intuitive and beautiful user experiences for our global clients."
        },
        {
            title: "Project Manager",
            type: "Full-time",
            location: "Hybrid",
            dept: "Management",
            desc: "Oversee project timelines and ensure successful delivery of client solutions."
        }
    ];

    const handleApply = (jobTitle: string) => {
        setSelectedJob(jobTitle);
        setIsModalOpen(true);
    };

    return (
        <div className="pt-20 min-h-screen">
            {/* Header */}
            <div className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={bgGradient} alt="Background" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Join Our Team</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Build the future with us. We're always looking for passionate people to join our mission.
                    </p>
                </div>
            </div>

            {/* Benefits */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                            <Briefcase size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Meaningful Work</h3>
                        <p className="text-gray-400">Work on projects that make a real impact on businesses and users worldwide.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-400">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Flexible Hours</h3>
                        <p className="text-gray-400">We value work-life balance and offer flexible schedules and remote options.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-400">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Great Location</h3>
                        <p className="text-gray-400">Our modern office is located in the heart of the tech district, but we support remote work.</p>
                    </div>
                </div>

                {/* Open Positions */}
                <h2 className="text-3xl font-bold text-white mb-12">Open Positions</h2>
                <div className="space-y-6">
                    {jobs.map((job, index) => (
                        <div key={index} className="group bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{job.title}</h3>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                                    <span className="flex items-center gap-1"><Briefcase size={14} /> {job.dept}</span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                                    <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                                </div>
                                <p className="text-gray-400 max-w-2xl">{job.desc}</p>
                            </div>
                            <button
                                onClick={() => handleApply(job.title)}
                                className="shrink-0 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors flex items-center gap-2"
                            >
                                Apply Now <ArrowRight size={16} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center bg-white/5 p-12 rounded-2xl border border-white/5">
                    <h3 className="text-2xl font-bold text-white mb-4">Don't see the right role?</h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        We're always looking for talent. Send your resume to info@dragon.com and we'll keep you in mind for future openings.
                    </p>
                    <a href="mailto:info@dragon.com" className="inline-block px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white transition-colors">
                        Contact Recruiting
                    </a>
                </div>
            </div>

            <CTASection />

            <ApplicationForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jobTitle={selectedJob}
            />
        </div>
    );
};

export default Career;
