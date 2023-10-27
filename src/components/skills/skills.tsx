import { SectionHeading } from '..';

const Skills = () => {
    return (
        <section id='skills'>
            {/* Section Heading */}
            <div className={`
                flex flex-col mx-auto justify-start items-start pt-20 w-full gap-5 md:mt-5
                md:h-[500px] md:container md:pt-5 md:px-10`
                }>
                <SectionHeading skillName='My Skills' color='text-[var(--primary-color)]' />
                <div className={`
                    flex flex-row mx-auto justify-center items-start w-full gap-5 
                    md:flex sm:flex-row md:justify-between md:container`
                }>
                    <div
                        id='up-left'
                        className='flex flex-col justify-center md:w-1/2 md:flex-1 md:py-2'
                    >
                        test1
                    </div>
                    <div
                        id='down-right'
                        data-aos="fade-up"
                        className={`
                    flex md:justify-end md:items-center md:w-1/2 
                    justify-center
                    `}>
                        test2
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;