import type { SkillGroup } from '../types';

const skills: SkillGroup[] = [
    { name: 'Languages', skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript'] },
    { name: 'Systems', skills: ['Compilers', 'Static analysis', 'Formal verification', 'SystemC linting'] },
    {
        name: 'Web & mobile',
        skills: ['React', 'Redux', 'React Native', 'Node.js', 'Express.js', 'Electron', 'Supabase', 'Ant Design', 'Swagger'],
    },
    { name: 'Databases', skills: ['MongoDB', 'SQLite', 'PostgreSQL'] },
    {
        name: 'Tools & process',
        skills: ['Git', 'Mercurial', 'GitHub', 'GitLab', 'Bitbucket', 'Linux', 'Jira', 'Agile', 'Requirements analysis'],
    },
    { name: 'Other', skills: ['Competitive programming', 'Problem setting', 'Coaching', 'Leadership'] },
];

export default skills;
