interface IProps {
    major: string;
    career: string;
    companyName: string;
    startDate: string;
    endDate: string;
    content: string;
    color: string;
}

const Card = (props: IProps) => {
    return (
        <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
            <div className="left flex-1 flex items-center justify-center">
                <fieldset
                    // data-aos="zoom-in"
                    className=" w-[90%] p-5 py-12 sm:py-8 sm:p-2"
                >
                    <legend className={` w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-${props.color || 'bg-yellow-500'}`}>
                        {props.major}
                    </legend>
                    <div className=" relative">
                        {/* design */}
                        <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                            <div className={`c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-${props.color || 'bg-yellow-500'}`}></div>
                            <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                            <div className={`c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-${props.color || 'bg-yellow-500'}`}></div>
                        </div>
                        {/* design */}
                        <div className={` flex flex-col gap-1 sm:gap-1 border-2 border-${props.color || 'bg-yellow-500'} shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg`}>
                            <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                                {props.career}
                            </h1>
                            <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                                {props.companyName}
                            </span>
                            <span className={` text-[.9rem] font-semibold text-${props.color || 'bg-yellow-500'} sm:text-base`}>
                                {props.startDate} - {props.endDate}
                            </span>
                            <p className=" text-[.9rem] text-justify break-words text-gray-500">
                                {props.content}
                            </p>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    );
};

export default Card;;