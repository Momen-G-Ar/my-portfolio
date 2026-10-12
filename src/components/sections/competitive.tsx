import { results, setting } from '../../data/competitive';
import ActivityList from '../ui/activity-list';
import Section from '../ui/section';

const Competitive = () => (
    <Section id='competitive' label='competitive programming' title='Contests, problem setting & coaching'>
        <div className='grid gap-10 lg:grid-cols-2'>
            <ActivityList
                heading='Results'
                items={results.map((r) => ({ title: `${r.contest} — ${r.result}`, date: r.year, detail: r.detail }))}
            />
            <ActivityList heading='Problem setting & coaching' items={setting} />
        </div>
    </Section>
);

export default Competitive;
