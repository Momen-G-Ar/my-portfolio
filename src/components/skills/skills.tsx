import { SectionHeading, SkillBox } from '..';
import ProgressBar from './../core/progress-bar';
import Icons from '../../icons';

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
                    flex flex-col mx-auto justify-center items-start w-full gap-20 
                    sm:gap-12
                    md:flex sm:flex-row md:justify-between md:container md:gap-5
                    `}>
                    <div
                        id='up-left-skills'
                        data-aos="fade-right"
                        className={`
                            flex flex-col justify-center gap-6 w-full items-center
                            sm:w-4/12 
                            md:flex-1 md:py-2 
                        `}>
                        <ProgressBar name='HTML' logo={<Icons.IoLogoHtml5 />} value={80} />
                        <ProgressBar name='CSS' logo={<Icons.IoLogoCss3 />} value={70} />
                        <ProgressBar name='JavaScript' logo={<Icons.SiJavascript />} value={85} />
                        <ProgressBar name='TypeScript' logo={<Icons.SiTypescript />} value={80} />
                        <ProgressBar name='React JS' logo={<Icons.FaReact />} value={80} />
                        <ProgressBar name='Tailwind CSS' logo={<Icons.SiTailwindcss />} value={65} />
                        <ProgressBar name='Python' logo={<Icons.FaPython />} value={60} />
                    </div>
                    <div
                        id='down-right-skills'
                        data-aos="fade-left"
                        className={`
                            flex flex-col justify-center items-center
                            sm:w-1/2 
                            md:flex-row md:justify-center md:items-center md:w-8/12 gap-2
                        `}>
                        <div className={`
                            flex flex-wrap gap-12 justify-center item-center
                            sm:w-full sm:h-full
                            md:w-[70%] md:gap-12
                            lg:gap-16
                        `}>

                            <SkillBox skillName='NodeJS' backgroundColor='black' logo={<Icons.IoLogoNodejs />} textColor='white' />
                            <SkillBox skillName='MongoDB' backgroundColor='white' logo={<Icons.SiMongodb />} textColor='black' />
                            <SkillBox skillName='ExpressJS' backgroundColor='white' logo={<Icons.SiExpress />} textColor='black' />
                            <SkillBox skillName='C++' backgroundColor='black' logo={<Icons.GrCode />} textColor='white' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;