import { certifications, roles } from '../../data/community';
import ActivityList from '../ui/activity-list';
import Section from '../ui/section';

const Community = () => (
    <Section id='community' label='community' title='Community & certifications'>
        <div className='grid gap-10 lg:grid-cols-2'>
            <ActivityList heading='Roles' items={roles} />
            <ActivityList heading='Certifications & memberships' items={certifications} />
        </div>
    </Section>
);

export default Community;
