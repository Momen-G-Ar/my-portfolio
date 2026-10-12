import Tag from './tag';

interface IProps {
    title: string;
    subtitle: string;
    date: string;
    points?: string[];
    tags?: string[];
}

const TimelineItem = ({ title, subtitle, date, points = [], tags = [] }: IProps) => (
    <li className='reveal relative pb-10 pl-8 last:pb-0'>
        <span className='absolute top-1.5 left-0 h-3 w-3 rounded-full border-2 border-accent bg-bg' />
        <div className='flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4'>
            <h3 className='text-lg font-semibold'>{title}</h3>
            <span className='shrink-0 font-mono text-xs text-muted'>{date}</span>
        </div>
        <p className='text-accent'>{subtitle}</p>
        {points.length > 0 && (
            <ul className='mt-3 list-disc space-y-1.5 pl-5 text-muted marker:text-line'>
                {points.map((point) => <li key={point}>{point}</li>)}
            </ul>
        )}
        {tags.length > 0 && (
            <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
            </div>
        )}
    </li>
);

export const Timeline = ({ children }: { children: React.ReactNode; }) => (
    <ol className='relative before:absolute before:top-2 before:bottom-2 before:left-[5px] before:w-px before:bg-line'>
        {children}
    </ol>
);

export default TimelineItem;
