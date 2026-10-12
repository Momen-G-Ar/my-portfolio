import type { Project } from '../types';

const projects: Project[] = [
    {
        title: 'Cruise Master',
        period: 'Graduation project · 2024 – 2025',
        description:
            'Autonomous-driving car prototype that uses CNNs, YOLO and OpenCV for perception. ' +
            'Built with Tamim Salhab and Qasam Himoony; presented Aug 2024 and defended Feb 2025.',
        tags: ['Computer vision', 'OpenCV', 'YOLO', 'CNN'],
    },
    {
        title: 'U-TECH League 2024 chatbot',
        period: 'Hackathon · 2024',
        description:
            'AI chatbot built on Azure OpenAI for the U-TECH League hackathon by Microsoft × FINOMENA, ' +
            'with Qusai Hroub and Raghad Salem.',
        tags: ['Azure OpenAI', 'LLM', 'Hackathon'],
    },
    {
        title: 'QPAY',
        period: 'PSEU · Jun 2023',
        description:
            'MERN point-of-sale app built by a four-person agile team: inventory CRUD, user authentication, dynamic item ' +
            'categorization, automated price calculation, and order history filtered by date, price and description.',
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
        title: 'Nutritionist Manager',
        period: 'PSEU · Jan 2023',
        description:
            "Web app for nutritionists to manage their clients' dietary programs, with PDF export.",
        tags: ['React', 'Ant Design', 'Express.js', 'MongoDB'],
    },
];

export default projects;
