import React from 'react';

const links: string[] = ['home', 'skills', 'work', 'about', 'contact']; // TODO: , 'projects', 

const useHeader = () => {
    const [activeLink, setActiveLink] = React.useState<string>('home');
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const toggleOpenMenu = () => setIsOpen((oldState) => !oldState);

    const [scrollPosition, setScrollPosition] = React.useState(0);
    React.useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return {
        scrollPosition,
        links,
        activeLink,
        setActiveLink,
        isOpen,
        toggleOpenMenu,
    };
};

export default useHeader;