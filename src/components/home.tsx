import personalImage from '../../public/self-image.png';

const Home = () => {
    return (
        <section id='home' className='snap-start'>
            <div
                className={`
                    bg-[var(--background-from-primary-color)] min-h-screen min-w-screen
                    grid grid-cols-1 grid-rows-2  
                    sm:grid-cols-[0.9fr_1fr] sm:grid-rows-1 font-sans
                `}
            >
                <div id='up-left' className='flex flex-col justify-center items-center px-10'>
                    <h1 className='ms:min-w-full flex flex-col justify-start items-start text-3xl gap-1'>
                        Hello,
                        <span className='font-bold text-2xl md:text-5xl sm:text-3xl'> I'm Momin</span>
                        <span className='font-bold text-lg  md:text-4xl sm:text-xl capitalize text-[var(--primary-color)]'> Full Stack web developer</span>
                    </h1>
                </div>
                <div id='down-right' className='flex justify-center items-center'>
                    <div className='w-[70%] flex justify-center items-center'>
                        <img
                            src={personalImage}
                            alt='Momin Personal Image'
                            className='sm:-translate-y-0 rounded-xl min-h-[230px] max-h-[420px] min-w-[230px] border-2 border-[var(--primary-color)] -translate-y-10'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;