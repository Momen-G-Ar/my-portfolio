import { FiMapPin } from 'react-icons/fi';
import profile from '../../data/profile';
import useTypewriter from '../../hooks/use-typewriter';
import Container from '../ui/container';

const Hero = () => {
    const role = useTypewriter(profile.roles);

    return (
        <section id='home' className='flex min-h-[100svh] items-center pt-24 pb-16'>
            <Container className='grid items-center gap-12 md:grid-cols-[1fr_auto]'>
                <div className='reveal'>
                    <p className='font-mono text-sm text-accent'>Hello, I'm</p>
                    <h1 className='mt-3 text-4xl font-bold tracking-tight sm:text-6xl'>{profile.name}</h1>
                    <p className='mt-4 h-8 font-mono text-lg text-muted sm:text-2xl' aria-label={profile.roles.join(', ')}>
                        <span aria-hidden>&gt; {role}<span className='caret' /></span>
                    </p>
                    <p className='mt-6 max-w-xl text-lg text-muted'>{profile.summary}</p>
                    <p className='mt-4 inline-flex items-center gap-2 text-sm text-muted'>
                        <FiMapPin className='text-accent' /> {profile.location}
                    </p>
                    <div className='mt-8 flex flex-wrap gap-3'>
                        <a
                            href='#contact'
                            className='rounded-md bg-accent px-5 py-2.5 font-medium text-bg transition-opacity hover:opacity-90'
                        >
                            Get in touch
                        </a>
                    </div>
                    <ul className='mt-8 flex flex-wrap gap-2'>
                        {profile.socials.map(({ label, href, icon: Icon }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label={label}
                                    title={label}
                                    className='grid h-10 w-10 place-items-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-accent'
                                >
                                    <Icon />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='reveal mx-auto w-56 sm:w-72'>
                    <img
                        src={profile.photo}
                        alt={profile.name}
                        className='aspect-square w-full rounded-2xl border border-line object-cover'
                    />
                </div>
            </Container>
        </section>
    );
};

export default Hero;
