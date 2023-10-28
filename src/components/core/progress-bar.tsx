import styled from 'styled-components';

interface IProps {
    logo: any;
    name: string;
    value: number;
    duration?: number;
}

const ProgressBar = (props: IProps) => {
    return (
        <div className="flex flex-col gap-2 sm:gap-1 text-xl font-semibold w-[90%]">
            <div className="flex justify-between">
                <p className="text-[1.15rem] flex items-center gap-3 sm:text-[1rem] exsm:text-sm exsm:gap-3">
                    {props.logo} {props.name}
                </p>{" "}
            </div>
            <div className="h-[8px] relative rounded-3xl bg-gray-300">
                <Progress
                    className="w-[0%] h-[8px] absolute rounded-3xl bg-yellow-500"
                    style={{
                        width: `${props.value}%`,
                        animation: `progress-animation ${props.duration || 2}s linear`,
                    }}
                ></Progress>
            </div>
        </div>
    );
};

export default ProgressBar;

const Progress = styled.div`
  @keyframes progress-animation {
    from {
      width: 0%;
    }
    to {
      width: ${(props: any) => props.width};
    }
  }
`;