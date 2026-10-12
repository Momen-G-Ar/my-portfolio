import profile from '../../data/profile';
import Container from '../ui/container';

const Footer = () => (
    <footer className='border-t border-line py-8'>
        <Container className='flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row'>
            <p>&copy; {new Date().getFullYear()} {profile.name}</p>
            <ul className='flex gap-4'>
                {profile.socials.map(({ label, href, icon: Icon }) => (
                    <li key={label}>
                        <a href={href} target='_blank' rel='noreferrer' aria-label={label} className='hover:text-accent'>
                            <Icon />
                        </a>
                    </li>
                ))}
            </ul>
        </Container>
    </footer>
);

export default Footer;
