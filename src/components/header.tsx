import useHeader from '../hooks/header.hook';

import { TfiMenu } from 'react-icons/tfi';
const Header = () => {
    const { isOpen, toggleOpenMenu, links, activeLink, setActiveLink } = useHeader();
    return (
        <header
            id='header'
            className={`
                flex sticky flex-row h-8 top-0 left-0 right-0 align-middle z-20 justify-between p-6
                font-medium text-xl text-[var(--primary-color)]
                bg-[rgb(27 32 44 / 70%)] backdrop-blur-2xl shadow-md`
            }
        >
            <span className='flex items-center justify-start'>
                Momin Arafa
            </span>
            <span className='sm:hidden flex items-center justify-center' onClick={() => toggleOpenMenu()}>
                <TfiMenu />
            </span>
            {
                isOpen &&
                <ul className='flex-row space-x-10 items-center justify-end hidden sm:flex text-black text-base'>
                    <li className='hover:underline-offset-auto cursor-pointer hover:underline'>
                        Home
                    </li >
                    <li className='hover:underline-offset-auto cursor-pointer hover:underline'>
                        About
                    </li >
                    <li className='hover:underline-offset-auto cursor-pointer hover:underline'>
                        Project
                    </li>
                    <li className='hover:underline-offset-auto cursor-pointer hover:underline'>
                        contact
                    </li>
                </ul>
            }
            <ul className='flex-row space-x-10 items-center justify-end hidden sm:flex text-black text-base'>
                {
                    links.map((link, index) => {
                        return (
                            <a
                                key={link + index}
                                href={`#${link}`}
                                className={`
                                cursor-pointer capitalize
                                ${activeLink === link ? 'underline underline-offset-4 decoration-[var(--primary-color)] decoration-4' : ''}
                            `}
                                onClick={() => setActiveLink(() => link)}>
                                {link}
                            </a >
                        );
                    })
                }
            </ul>
        </header>
    );
};

export default Header;