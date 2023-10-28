import { SectionHeading } from '.';
import Card from './core/card';

const About = () => {
    return (
        <section id='about' className='mt-5'>
            {/* Section Heading */}
            <div className={`
                flex flex-col mx-auto justify-start items-start pt-20 w-full gap-5
                md:h-[800px] md:container md:pt-5 md:px-10
                lg:h-[520px] 
            `}>
                <SectionHeading skillName='About Me' color='text-[var(--primary-color)]' />
                <div
                    className={`
                        flex flex-col w-full flex-wrap lg:flex-nowrap
                        lg:flex-row lg:justify-between lg:items-center
                    `}>

                    <Card
                        major='Education'
                        career='B.E. Computer Systems Engineering'
                        color='[var(--primary-color)]'
                        companyName='Palestine Polytechnic University'
                        content={`
                            As an undergraduate student, I have a good understanding of web development technologies 
                            such as HTML, CSS, Tailwind CSS, JavaScript, and React JS. 
                            Additionally, I'm proficient in backend technologies such as Node.js, Express.js, and MongoDB. 
                            I also have skills in C++ and problem-solving using Data structures and Algorithms.
                        `}
                        startDate='August 2020'
                        endDate='Present'
                    />
                    <Card
                        major='Experience'
                        career='Software Developer Intern'
                        color='[var(--primary-color)]'
                        companyName='Sada Intelligence'
                        content={`
                            In my internship in Sada Intelligence I started to learn Web development from scratch starting from 
                            HTML, CSS, JavaScript, and React JS for the front end development. After that we learn the fundamentals 
                            of NodeJS and ExpressJS with MongoDB for the back end development. And we finished out Training with a 
                            project to implement our knowledge in the Web Development 
                        `}
                        startDate='June 2022'
                        endDate='July 2023'
                    />
                </div>
            </div>
        </section>
    );
};

export default About;



{/* 
<div
    className={`
        transition-all duration-1000 ease-in min-h-screen min-w-screen
        grid grid-cols-1 grid-rows-2
        sm:grid-cols-2 sm:grid-rows-1 font-sans
    `}
>
    <div id='up-left' className='min-w-full] flex flex-col justify-center items-center px-10'>
        <h1 className='min-w-full flex justify-start items-start font-sans text-sm sm:text-2xl text-[var(--primary-color)] mb-2'>
            About Me
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
    <div id='down-right' className='flex justify-center items-center'>
        Down
    </div>
</div> */}