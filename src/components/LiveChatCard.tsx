
import { MessageSquare, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface LiveChatCardProps {
    className?: string;
}

const LiveChatCard = ({ className = "" }: LiveChatCardProps) => {
    const [isReady, setIsReady] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Check if already loaded
        if (window.Tawk_API?.maximize) {
            setIsReady(true);
        }

        const handleTawkLoaded = () => {
            setIsReady(true);
            setIsLoading(false);
        };

        window.addEventListener('tawk-loaded', handleTawkLoaded);
        return () => window.removeEventListener('tawk-loaded', handleTawkLoaded);
    }, []);

    const handleStartChat = () => {
        if (isReady && window.Tawk_API?.maximize) {
            window.Tawk_API.maximize();
        } else {
            setIsLoading(true);
            // Poll for a few seconds just in case
            let attempts = 0;
            const checkInterval = setInterval(() => {
                attempts++;
                if (window.Tawk_API?.maximize) {
                    clearInterval(checkInterval);
                    setIsReady(true);
                    setIsLoading(false);
                    window.Tawk_API.maximize();
                } else if (attempts > 20) { // 10 seconds timeout
                    clearInterval(checkInterval);
                    setIsLoading(false);
                    alert("Chat failed to load. Please refresh or check your connection.");
                }
            }, 500);
        }
    };

    return (
        <div className={`bg-white/5 border border-white/10 rounded-2xl p-8 ${className}`}>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MessageSquare className="text-blue-400" /> Live Chat
            </h3>
            <p className="text-gray-400 mb-6">
                Need immediate assistance? Our support team is available 24/7 to help you with any queries.
            </p>
            <button
                onClick={handleStartChat}
                disabled={isLoading}
                className="w-full py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="animate-spin w-5 h-5" /> Connecting...
                    </>
                ) : (
                    "Start Chat"
                )}
            </button>
        </div>
    );
};

export default LiveChatCard;
