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
                            I'm currently a fourth-year Computer Systems Engineering student at Palestine Polytechnic University. 
                            It's been a pretty intense journey because I've managed to make it to the dean's list for six semesters in a row – quite a feat, 
                            I must say. But it's not just about the grades. 
                            I'm also a problem-solving coach over at the Code Academy within the university with C++ programming language.
                        `}
                        startDate='August 2020'
                        endDate='Present'
                    />
                    <Card
                        major='Experience'
                        career='Software Developer Training'
                        color='[var(--primary-color)]'
                        companyName='Sada Intelligence'
                        content={`
                            In my Training in Sada Intelligence I started to learn Web development from scratch starting from 
                            HTML, CSS, JavaScript, and React JS for the front end development. After that we learn the fundamentals 
                            of NodeJS and ExpressJS with MongoDB for the back end development. And we finished out Training with a 
                            project to implement our knowledge in the Web Development.
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