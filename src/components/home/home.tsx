import personalImage from '../../assets/self-image.png';
import { TypeAnimation } from 'react-type-animation';
import Icons from '../../icons';
import resumePDF from './../../assets/Momin Arafa.pdf';

const Home = () => {
    return (
        <section id='home' className=''>
            <div className={`bg-gradient-to-r from-green-300 to-green-600`}>
                <div className={`
                    flex flex-col mx-auto justify-center items-center pt-20 w-full gap-5
                    md:flex md:flex-row md:h-[700px] md:justify-between md:container md:pt-5 md:px-10
                `}>
                    {/* Left part */}
                    <div
                        id='up-left-home'
                        className='flex flex-col justify-center md:w-1/2 md:flex-1 md:py-2'
                    >
                        <h1
                            data-aos="fade-up"
                            className={`
                                flex flex-col justify-center items-start text-3xl gap-3 px-[2.5rem]
                                md:justify-start md:items-start md:px-0
                            `}>
                            {/* Some information about me */}
                            <span className='font-bold text-2xl md:text-5xl sm:text-3xl p-y-2 md:p-0'>Hello, I'm Momin</span>
                            <TypeAnimation
                                data-aos="fade-up"
                                sequence={[
                                    "Web developer",
                                    2000,
                                    "Problem Solver",
                                    2000,
                                    "",
                                ]}
                                speed={30}
                                wrapper="span"
                                repeat={Infinity}
                                className="font-bold text-lg  md:text-4xl sm:text-xl capitalize text-[var(--primary-color)]"
                            />
                            <span
                                className='font-semibold text-lg text-lime-900'
                            >
                                I'm an undergraduate student at Palestine Polytechnic University
                            </span>
                            {/* Buttons */}
                            <div data-aos="fade-up" className="buttons flex gap-5 justify-center w-full sm:justify-start">
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/momin-arafa/"
                                    className=" bg-black text-xs sm:text-[1rem] text-white px-5 py-2 sm:px-8 rounded-lg font-bold  hover:text-[var(--primary-color)]"
                                >
                                    <span> Hire Me</span>
                                </a>
                                <a
                                    target="_blank"
                                    href={resumePDF}
                                    className="flex items-center gap-2 text-xs sm:text-[1rem] bg-white border-black px-4 py-2 sm:px-6 rounded-lg font-bold  hover:text-[var(--primary-color)]"
                                    download
                                >
                                    <div className="flex items-center gap-1">
                                        Resume <Icons.FiDownload />
                                    </div>
                                </a>
                            </div>
                            {/* Icons of social media */}
                            <div className="icons flex mt-5 w-full justify-center sm:justify-start">
                                <ul
                                    data-aos="fade-up"
                                    data-aos-duration="1scale-1500"
                                    className=" flex gap-5 flex-row justify-center w-full sm:justify-start"
                                >
                                    <li>
                                        <a target="_blank" href="https://github.com/Momen-G-Ar">
                                            <Icons.AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-150" />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://www.linkedin.com/in/momin-arafa/">
                                            <Icons.FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-150 " />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://www.instagram.com/momenarafeh/">
                                            <Icons.AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-150  " />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://www.facebook.com/momenarafeh22/">
                                            <Icons.FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-150  " />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://twitter.com/Momenarafeh11">
                                            <Icons.AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-150  " />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </h1>
                    </div>
                    {/* /Right part */}
                    <div
                        id='down-right-home'
                        data-aos="fade-up"
                        className={`
                            flex md:justify-end md:items-center md:w-1/2 
                            justify-center
                        `}>
                        <div className={`
                            w-[70%] flex items-center justify-center mb-5
                            md:justify-end md:mt-0
                        `}>
                            <img
                                src={personalImage}
                                alt='Momin Personal Image'
                                className='rounded-xl min-h-[230px] max-h-[420px] min-w-[230px] border-2 border-[var(--primary-color)]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;