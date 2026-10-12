import projects from '../../data/projects';
import ProjectCard from '../ui/project-card';
import Section from '../ui/section';

const Projects = () => (
    <Section id='projects' label='projects' title='Things I have built'>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
        </div>
    </Section>
);

export default Projects;
