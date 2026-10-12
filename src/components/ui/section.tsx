import Container from './container';

interface IProps {
    id: string;
    label: string;
    title: string;
    children: React.ReactNode;
}

const Section = ({ id, label, title, children }: IProps) => (
    <section id={id} className='border-t border-line py-20 sm:py-24'>
        <Container>
            <header className='reveal mb-10'>
                <p className='font-mono text-sm text-accent'>// {label}</p>
                <h2 className='mt-2 text-3xl font-semibold tracking-tight sm:text-4xl'>{title}</h2>
            </header>
            {children}
        </Container>
    </section>
);

export default Section;
