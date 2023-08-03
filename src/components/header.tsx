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
            <span className='sm:hidden flex items-center justify-center text-base' >
                <TfiMenu className="relative" onClick={() => toggleOpenMenu()} />
                {
                    isOpen &&
                    <>
                        <ul tabIndex={0} className="flex flex-col gap-[4px] z-[3] p-2 shadow-md bg-gray-100 rounded-box w-28 mt-4 absolute top-[29px] right-1 rounded-md">
                            {
                                links.map((link, index) => {
                                    return (
                                        <a
                                            key={link + index}
                                            href={`#${link}`}
                                            className={`
                                                    font-normal w-full flex items-center justify-center
                                                    transition-all duration-200 ease-in-out
                                                    hover:decoration-[var(--primary-color)] hover:underline hover:underline-offset-2 hover:decoration-2 
                                                    cursor-pointer capitalize
                                                    ${activeLink === link ? 'font-semibold bg-[var(--secondary-color)] text-[var(--primary-color)] rounded-xl' : 'text-black'}
                                                `}
                                            onClick={() => setActiveLink(() => link)}
                                        >
                                            {link}
                                        </a >
                                    );
                                })
                            }
                        </ul>
                    </>
                }
            </span>
            <ul className='flex-row gap-[1px]  items-center justify-end hidden sm:flex text-base'>
                {
                    links.map((link, index) => {
                        return (
                            <a
                                key={link + index}
                                href={`#${link}`}
                                className={`
                                font-normal flex items-center justify-center w-[80px]
                                cursor-pointer capitalize
                                hover:decoration-[var(--primary-color)] hover:underline hover:underline-offset-2 hover:decoration-2 
                                ${activeLink === link ? 'font-semibold bg-[var(--secondary-color)] text-[var(--primary-color)] rounded-xl' : 'text-black'}
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