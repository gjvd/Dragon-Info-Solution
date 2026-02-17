
import React, { useState } from 'react';
import { X, Send, User, Phone, Mail, FileText, DollarSign, Calendar, MapPin, BadgeHelp } from 'lucide-react';

interface ApplicationFormProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle?: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ isOpen, onClose, jobTitle }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        contactNo: '',
        email: '',
        workExp: '',
        currentSalary: '',
        expectedSalary: '',
        isExpectedSalaryNegotiable: false,
        noticePeriod: '',
        isNoticePeriodNegotiable: false,
        currentLocation: '',
        reasonForChange: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Application Submitted:', { jobTitle, ...formData });
        setIsSubmitting(false);
        onClose();
        alert('Application submitted successfully!');
        setFormData({
            fullName: '',
            contactNo: '',
            email: '',
            workExp: '',
            currentSalary: '',
            expectedSalary: '',
            isExpectedSalaryNegotiable: false,
            noticePeriod: '',
            isNoticePeriodNegotiable: false,
            currentLocation: '',
            reasonForChange: ''
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-2xl bg-gradient-to-r from-black to-blue-900 border border-white/10 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="p-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Apply Now</h2>
                    {jobTitle && <p className="text-blue-400 mb-6">Position: {jobTitle}</p>}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Info */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                    <User size={16} /> Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                    <Phone size={16} /> Contact No <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="contactNo"
                                    value={formData.contactNo}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    placeholder="+1 234 567 8900"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                    <Mail size={16} /> Email ID <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                    <FileText size={16} /> Work Exp (Years) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="workExp"
                                    value={formData.workExp}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    placeholder="e.g. 3.5 years"
                                />
                            </div>
                        </div>

                        {/* Salary Info */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                    <DollarSign size={16} /> Current Salary <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="currentSalary"
                                    value={formData.currentSalary}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    placeholder="Annual CTC"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                    <DollarSign size={16} /> Expected Salary <span className="text-red-500">*</span>
                                </label>
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        name="expectedSalary"
                                        value={formData.expectedSalary}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                        placeholder="Expected CTC"
                                    />
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input
                                                type="checkbox"
                                                name="isExpectedSalaryNegotiable"
                                                checked={formData.isExpectedSalaryNegotiable}
                                                onChange={handleChange}
                                                className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-white/5 checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
                                            />
                                            <svg className="absolute w-3.5 h-3.5 pointer-events-none hidden peer-checked:block text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 14 14" fill="none">
                                                <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Negotiable</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                    <Calendar size={16} /> Notice Period <span className="text-red-500">*</span>
                                </label>
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        name="noticePeriod"
                                        value={formData.noticePeriod}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                        placeholder="e.g. 30 Days"
                                    />
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input
                                                type="checkbox"
                                                name="isNoticePeriodNegotiable"
                                                checked={formData.isNoticePeriodNegotiable}
                                                onChange={handleChange}
                                                className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-white/5 checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
                                            />
                                            <svg className="absolute w-3.5 h-3.5 pointer-events-none hidden peer-checked:block text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 14 14" fill="none">
                                                <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Negotiable</span>
                                    </label>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                    <MapPin size={16} /> Current Location <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="currentLocation"
                                    value={formData.currentLocation}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    placeholder="City, Country"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                <BadgeHelp size={16} /> Reason for job change <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="reasonForChange"
                                value={formData.reasonForChange}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                                placeholder="Briefly explain why you are looking for a new opportunity..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>Processing...</>
                                ) : (
                                    <>Submit Application <Send size={18} /></>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplicationForm;
