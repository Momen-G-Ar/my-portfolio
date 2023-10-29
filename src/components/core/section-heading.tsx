
const SectionHeading = (props: { sectionName: string; color?: string; underlineColor?: string; }) => {
    return (
        < div data-aos="fade-up" className="relative mb-5 md:w-full w-[95%]" >
            <h3 className={` text-3xl font-black ${props.color || 'bg-gray-300'} sm:text-2xl pl-2 md:pl-0`}>
                {props.sectionName}
            </h3>
            <span className={`h-[1.1px] right-0 absolute md:w-[95%] w-[90%] ${props.underlineColor || 'bg-gray-300'} block`}></span>
        </ div>
    );
};

export default SectionHeading;