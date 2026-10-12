import React from 'react';

/** Returns the id of the section currently crossing the upper part of the viewport. */
const useActiveSection = (ids: string[]) => {
    const [active, setActive] = React.useState(ids[0]);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -55% 0px' },
        );
        ids.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });
        return () => observer.disconnect();
    }, [ids]);

    return active;
};

export default useActiveSection;
