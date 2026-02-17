
import { Loader2 } from 'lucide-react';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000] text-white">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
                <p className="text-gray-400 font-medium">Loading...</p>
            </div>
        </div>
    );
};

export default LoadingScreen;
