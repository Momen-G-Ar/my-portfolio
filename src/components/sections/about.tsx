import profile from '../../data/profile';
import Section from '../ui/section';

const About = () => (
    <Section id='about' label='about' title='About me'>
        <div className='grid gap-10 md:grid-cols-[3fr_2fr]'>
            <div className='reveal space-y-4 text-lg text-muted'>
                {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <dl className='reveal space-y-4 rounded-xl border border-line bg-surface p-6'>
                {profile.facts.map((fact) => (
                    <div key={fact.label}>
                        <dt className='font-mono text-xs tracking-wide text-muted uppercase'>{fact.label}</dt>
                        <dd className='mt-1'>{fact.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    </Section>
);

export default About;
