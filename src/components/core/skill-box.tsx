interface IProps {
    logo: any;
    textColor: string;
    backgroundColor: string;
    skillName: string;
}

const SkillBox = (props: IProps) => {
    return (
        <div
            data-aos="zoom-in" data-aos-duration="1000"
            className={`
                box w-[11rem] h-[11rem] rounded-lg bg-${props.backgroundColor} text-${props.textColor}
                shadow-2xl flex flex-col items-center justify-center gap-4 p-1 
                lg:w-[12rem] lg:h-[12rem] lg:gap-5
                md:w-[8rem] md:h-[8rem] md:gap-4
                sm:w-[7rem] sm:h-[7rem]
            `}>
            <div
                className={`
                    bg-${props.textColor} text-${props.backgroundColor} 
                    w-10 h-10 rounded-full flex items-center justify-center text-6xl 
                    sm:w-12 sm:h-12 p-2 sm:text-3xl
                    md:w-14 md:h-14 md:text-4xl

                `}>
                {props.logo}
            </div>
            <p className="font-semibold ">{props.skillName}</p>
        </div>
    );
};

export default SkillBox;