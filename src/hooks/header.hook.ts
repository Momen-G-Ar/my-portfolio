import React from 'react';

const links: string[] = ['home', 'contact']; // TODO: 'about', 'projects', 

const useHeader = () => {
    const [activeLink, setActiveLink] = React.useState<string>('home');
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    
    const toggleOpenMenu = () => setIsOpen((oldState) => !oldState);

    return {
        links,
        activeLink,
        setActiveLink,
        isOpen,
        toggleOpenMenu,
    };
};

export default useHeader;