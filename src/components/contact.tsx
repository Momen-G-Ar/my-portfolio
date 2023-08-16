
const Contact = () => {
    return (
        <section id='contact' className='sm:snap-start'>
            <div
                className={`
                    grid grid-cols-1 grid-rows-3 h-screen w-screen
                    sm:grid-cols-[1fr_0.8fr] sm:grid-rows-3 font-sans 
                `}
            >
                <h1 className='min-w-full flex justify-start items-start font-sans text-sm sm:text-2xl text-[var(--primary-color)] mb-2'>
                    Contact me
                </h1>
                <div id='up-left' className='min-w-full flex flex-col justify-center items-center px-10'>
                    <div id='up-right' className=' flex justify-center items-center'>
                        contact me on my email
                    </div>
                </div>
                <div id='up-right' className=' flex justify-center items-center'>
                    contact me on my accounts
                </div>
                <div id='down' className='justify-center items-center'>
                    Social media
                </div>
            </div>
        </section>
    );
};

export default Contact;