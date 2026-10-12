import type { Activity } from '../../types';

interface IProps {
    heading: string;
    items: Activity[];
}

const ActivityList = ({ heading, items }: IProps) => (
    <div className='reveal'>
        <h3 className='mb-4 font-mono text-sm tracking-wide text-muted uppercase'>{heading}</h3>
        <ul className='divide-y divide-line rounded-xl border border-line bg-surface'>
            {items.map((item) => (
                <li key={item.title + item.date} className='p-4'>
                    <div className='flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4'>
                        <p className='font-medium'>{item.title}</p>
                        <span className='shrink-0 font-mono text-xs text-muted'>{item.date}</span>
                    </div>
                    {item.detail && <p className='mt-1 text-sm text-muted'>{item.detail}</p>}
                </li>
            ))}
        </ul>
    </div>
);

export default ActivityList;
