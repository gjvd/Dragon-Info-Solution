
import { MessageSquare } from 'lucide-react';

interface LiveChatCardProps {
    className?: string;
}

const LiveChatCard = ({ className = "" }: LiveChatCardProps) => {
    return (
        <div className={`bg-white/5 border border-white/10 rounded-2xl p-8 ${className}`}>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MessageSquare className="text-blue-400" /> Live Chat
            </h3>
            <p className="text-gray-400 mb-6">
                Need immediate assistance? Our support team is available 24/7 to help you with any queries.
            </p>
            <button
                onClick={() => {
                    if (window.Tawk_API?.maximize) {
                        window.Tawk_API.maximize();
                    } else {
                        console.log("Tawk.to not ready, checking status...");
                        // If Tawk_API exists but maximize doesn't, it might be loading
                        if (window.Tawk_API) {
                            alert("Chat is loading... please wait a moment and try again.");
                        } else {
                            alert("Chat support is currently unavailable. Please check your internet connection.");
                        }
                    }
                }}
                className="w-full py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors cursor-pointer"
            >
                Start Chat
            </button>
        </div>
    );
};

export default LiveChatCard;
