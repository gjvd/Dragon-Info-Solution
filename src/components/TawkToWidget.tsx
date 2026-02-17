
import { useEffect } from 'react';

declare global {
    interface Window {
        Tawk_API: any;
        Tawk_LoadStart: any;
    }
}

const TawkToWidget = () => {
    useEffect(() => {
        // Prevent double injection
        if (window.Tawk_API) return;

        // Tawk.to Script
        var Tawk_API: any = Tawk_API || {};
        Tawk_API.onLoad = function () {
            console.log("Tawk.to chat loaded");
        };

        var Tawk_LoadStart = new Date();
        window.Tawk_API = Tawk_API;
        window.Tawk_LoadStart = Tawk_LoadStart;

        (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            // REPLACE 'YOUR_PROPERTY_ID' WITH ACTUAL ID FROM TAWK.TO
            s1.src = 'https://embed.tawk.to/6994a77b73d8cb1c357e3fbd/default';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            if (s0 && s0.parentNode) {
                s0.parentNode.insertBefore(s1, s0);
            }
        })();
    }, []);

    return null;
};

export default TawkToWidget;
