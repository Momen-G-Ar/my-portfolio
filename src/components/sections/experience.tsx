import experience from '../../data/experience';
import Section from '../ui/section';
import TimelineItem, { Timeline } from '../ui/timeline-item';

const Experience = () => (
    <Section id='experience' label='experience' title='Where I have worked'>
        <Timeline>
            {experience.map((job) => (
                <TimelineItem
                    key={job.company + job.start}
                    title={job.role}
                    subtitle={job.location ? `${job.company} · ${job.location}` : job.company}
                    date={`${job.start} – ${job.end}`}
                    points={job.points}
                    tags={job.tags}
                />
            ))}
        </Timeline>
    </Section>
);

export default Experience;
