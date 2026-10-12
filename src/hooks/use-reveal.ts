import React from 'react';

/** Adds `is-visible` to every `.reveal` element the first time it scrolls into view. */
const useReveal = () => {
    React.useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>('.reveal');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: '0px 0px -10% 0px' },
        );
        elements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);
};

export default useReveal;
