import { FiArrowUpRight } from 'react-icons/fi';
import type { Project } from '../../types';
import Tag from './tag';

const ProjectCard = ({ title, period, description, tags, links = [] }: Project) => (
    <article className='reveal flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent'>
        <p className='font-mono text-xs text-muted'>{period}</p>
        <h3 className='mt-2 text-lg font-semibold'>{title}</h3>
        <p className='mt-2 flex-1 text-muted'>{description}</p>
        <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
        {links.length > 0 && (
            <div className='mt-4 flex flex-wrap gap-4'>
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center gap-1 text-sm text-accent hover:underline'
                    >
                        {link.label} <FiArrowUpRight />
                    </a>
                ))}
            </div>
        )}
    </article>
);

export default ProjectCard;
