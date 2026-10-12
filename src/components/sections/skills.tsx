import skills from '../../data/skills';
import Section from '../ui/section';
import Tag from '../ui/tag';

const Skills = () => (
    <Section id='skills' label='skills' title='Tools I work with'>
        <div className='grid gap-6 sm:grid-cols-2'>
            {skills.map((group) => (
                <div key={group.name} className='reveal rounded-xl border border-line bg-surface p-6'>
                    <h3 className='mb-4 font-mono text-sm tracking-wide text-muted uppercase'>{group.name}</h3>
                    <div className='flex flex-wrap gap-2'>
                        {group.skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

export default Skills;
