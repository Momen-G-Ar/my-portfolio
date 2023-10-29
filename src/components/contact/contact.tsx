import { EmailForm, SectionHeading } from "..";

const Contact = () => {
    return (
        <section id='contact' className=' flex justify-center'>
            <div className={`
                flex flex-col mx-auto justify-start items-start pt-20 w-full gap-5
                md:h-[550px] md:container md:pt-5 md:px-10`
            }>
                <SectionHeading sectionName='Contact' color='text-[var(--primary-color)]' />
                <div className={`
                    flex flex-col w-full h-full gap-5
                    sm:flex-row
                `}>
                    {/* Left */}
                    <div
                        data-aos="fade-right"
                        className={`
                            w-full flex flex-col justify-center items-center p-5
                            sm:w-1/2
                        `}>
                        <div className={`
                            flex flex-col h-max justify-center items-center w-[67%]
                            sm:h-[80%] sm:w-full sm:justify-center sm:items-start
                        `}>

                            <h2 className='text-6xl font-bold'>
                                Need Me
                            </h2>
                            <p className='text-xl'>
                                Need to get touch with me? Either fill out the form with your inquiry or
                                use my accounts to contact me, Feel free to contact my on any time.
                            </p>
                        </div>
                    </div>
                    {/* Right */}
                    <div 
                        data-aos="fade-left"
                        className={`
                            flex flex-col justify-center items-center
                            md:w-1/2 
                        `}>
                        <div className={`
                            flex w-[70%] h-[90%] justify-center items-center
                            sm:w-full
                        `}>
                            <EmailForm />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

{/* <h1 data-aos="fade-up" className={`
    flex pl-6 mt-6 sm:mt-16 lg:mt-0
    lg:justify-start lg:text-2xl 
    text-[var(--primary-color)] font-semibold mb-[15px] min-w-full text-base 
`}

>
    Contact me
</h1>
<p className={`min-w-full flex justify-start items-center pl-6`}>
    Need to get touch with me? Either fill out the form with your inquiry or use my accounts to contact me, Feel free to contact my on any time.
</p> */}