import { useState, useEffect } from 'react';

const useScrollVisibility = () => {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.pageYOffset <= 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isAtTop;
};

export default useScrollVisibility;
