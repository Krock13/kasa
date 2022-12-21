import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to scroll to the top of the page on change.
 * @returns {null} - The hook does not render any JSX, it only triggers an effect.
 */
export default function ScrollToTop() {
    // Get the current location from the hook
    const { pathname } = useLocation();

    useEffect(() => {
        // Select the root element and scroll to it smoothly
        const body = document.querySelector('#root');
        body.scrollIntoView(
            {
                behavior: 'smooth',
            },
            500,
        );
    }, [pathname]);

    return null;
}
