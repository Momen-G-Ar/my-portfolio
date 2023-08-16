import React from 'react';

const links: string[] = ['home'];

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