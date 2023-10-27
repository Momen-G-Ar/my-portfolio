import personalImage from '../assets/self-image.png';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <section id='home' className=''>
            <div className={`bg-gradient-to-r from-green-200 to-green-300`}>
                <div className={`
                    flex flex-col mx-auto justify-center items-center pt-20 w-full gap-5
                    md:flex md:flex-row md:h-[700px] md:justify-between md:container md:pt-5 md:px-10
                `}>
                    <div
                        id='up-left'
                        className='flex flex-col justify-center md:w-1/2 md:flex-1 md:py-2'
                    >
                        <h1
                            data-aos="fade-up"
                            className={`
                                flex flex-col justify-center items-start text-3xl gap-3 px-[2.5rem]
                                md:justify-start md:items-start md:px-0
                            `}>
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
                        </h1>
                    </div>
                    <div
                        id='down-right'
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