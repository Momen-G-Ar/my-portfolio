import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import useActiveSection from '../../hooks/use-active-section';
import profile from '../../data/profile';
import Container from '../ui/container';
import ThemeToggle from '../ui/theme-toggle';

const navLinks = ['about', 'experience', 'projects', 'competitive', 'community', 'skills', 'contact'];

const observedSections = ['home', ...navLinks];

const labels: Record<string, string> = { competitive: 'CP' };

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const active = useActiveSection(observedSections);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const linkClass = (link: string) =>
        `capitalize transition-colors hover:text-accent ${active === link ? 'text-accent' : 'text-muted'}`;

    return (
        <header
            className={`fixed inset-x-0 top-0 z-30 transition-colors ${scrolled || isOpen ? 'border-b border-line bg-bg/80 backdrop-blur-md' : 'border-b border-transparent'}`}
        >
            <Container className='flex h-16 items-center justify-between'>
                <a href='#home' className='font-mono text-sm font-semibold' onClick={() => setIsOpen(false)}>
                    <span className='text-accent'>~/</span>{profile.name.split(' ')[0].toLowerCase()}
                </a>
                <nav className='hidden items-center gap-6 text-sm md:flex'>
                    {navLinks.map((link) => (
                        <a key={link} href={`#${link}`} className={linkClass(link)}>
                            {labels[link] ?? link}
                        </a>
                    ))}
                    <ThemeToggle />
                </nav>
                <div className='flex items-center gap-2 md:hidden'>
                    <ThemeToggle />
                    <button
                        type='button'
                        onClick={() => setIsOpen((open) => !open)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                        className='grid h-9 w-9 place-items-center rounded-md border border-line text-muted'
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </Container>
            {isOpen && (
                <nav className='border-t border-line md:hidden'>
                    <Container className='flex flex-col py-2'>
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link}`}
                                onClick={() => setIsOpen(false)}
                                className={`py-3 ${linkClass(link)}`}
                            >
                                {link === 'competitive' ? 'Competitive programming' : link}
                            </a>
                        ))}
                    </Container>
                </nav>
            )}
        </header>
    );
};

export default Header;
