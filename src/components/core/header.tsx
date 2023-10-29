import { Link } from 'react-router-dom';
import useHeader from '../../hooks/header.hook';
import Icons from '../../icons';

const Header = () => {
    const { scrollPosition, isOpen, toggleOpenMenu, links, activeLink, setActiveLink } = useHeader();

    return (
        <div
            className={`
                w-full mx-auto fixed flex justify-center top-0 py-5 sm:py-4 z-30 
                ${scrollPosition > 0 ? `bg-white shadow-md` : "bg-transparent"} 
            `}>
            <nav className='container flex m-auto items-center justify-between'>
                <div data-aos="fade-down" className="flex justify-center px-10">
                    <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to="/my-portfolio/#home"
                        className="text-xl font-bold sm:text-3xl"
                    >
                        Momin Arafa
                    </Link>
                </div>
                <div className='flex justify-end px-10'>
                    <button
                        onClick={toggleOpenMenu}
                        className="cursor-pointer text-2xl flex md:hidden"
                    >
                        <Icons.TfiMenu size={25} />
                    </button>
                    <div className={`
                        flex flex-col absolute m-auto top-0 w-[50%] h-screen bg-white 
                        md:relative md:bg-transparent md:h-max md:w-full 
                        ${!isOpen ? "right-[-100%] md:right-[0%]" : "right-[0%] md:right-[0%]"} 
                        `}>
                        <button
                            onClick={toggleOpenMenu}
                            className={`text-3xl md:hidden flex relative w-full right-0 m-4 top-4 container`}
                        >
                            <Icons.RxCross2 size={25} />
                        </button>
                        <ul
                            data-aos="fade-down"
                            className={`
                            flex flex-col justify-center
                            md:flex-row md:items-center md:justify-end md:gap-7
                        `}>
                            {
                                links.map((link, index) => {
                                    return (
                                        <li>
                                            <a
                                                key={link + index}
                                                href={`#${link}`}
                                                className={`
                                                    flex items-center justify-center w-full mb-2 
                                                    cursor-pointer capitalize text-2xl 
                                                    hover:text-[var(--primary-color)]
                                                    ${activeLink === link
                                                        ? 'font-bold text-[var(--primary-color)]'
                                                        : 'font-semibold text-black'}
                                                `}
                                                onClick={() => setActiveLink(() => link)}>
                                                {link}
                                            </ a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;