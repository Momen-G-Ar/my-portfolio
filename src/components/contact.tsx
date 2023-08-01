
const Contact = () => {
    return (
        <section id='contact' className='snap-start'>
            <div
                className={`
                    grid grid-cols-1 grid-rows-2 h-screen w-screen
                    sm:grid-cols-2 sm:grid-rows-1 font-sans 
                `}
            >
                <div id='up-left' className='min-w-full flex flex-col justify-center items-center px-10'>
                    <h1 className='min-w-full flex justify-start items-start font-sans text-sm sm:text-2xl text-[var(--primary-color)] mb-2'>
                        Contact me 
                    </h1>
                    <p className='font-semibold text-xs md:text-lg sm:text-base'>
                        Hello, I'm
                        <span className='text-[var(--primary-color)]'> Momin Arafa</span> a 4<sup>th</sup> year Computer System Engineering student at
                        <a className='text-[var(--primary-color)] cursor-pointer' href='https://www.ppu.edu/p/ar'> Palestine Polytechnic University.</a> <br />
                        During the summer of 2022, I had the opportunity to undergo web development training with
                        PSEU (Professional Software Engineering Unite) in collaboration with
                        <a className='text-[var(--primary-color)] cursor-pointer' href="http://www.sadasol.com/"> SADA Intelligent Solutions.</a>
                        The training covered a comprehensive curriculum,
                        including HTML, CSS, JavaScript, TypeScript, and React for frontend development, as well as NodeJs, ExpressJs, and MongoDB (NoSql) for backend development.
                        As a result, I am now equipped with the necessary skills to work as a <span className='text-[var(--primary-color)]'>Junior MERN Stack developer.</span>
                    </p>
                </div>
                <div id='down-right' className=' flex justify-center items-center'>
                    Down
                </div>
            </div>
        </section>
    );
};

export default Contact;