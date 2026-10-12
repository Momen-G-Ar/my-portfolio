import type { Experience } from '../types';

const experience: Experience[] = [
    {
        role: 'R&D Software Engineer',
        company: 'ASAL Technologies (Cadence)',
        location: 'Rawabi',
        start: 'May 2025',
        end: 'Present',
        points: [
            'Jasper C team, part of Jasper Formal Verification.',
            'Develop an advanced linting tool for SystemC code, built on a custom compiler (static analysis and compiler design).',
            "Design, refine and integrate lint rules into Jasper's formal verification workflow.",
            'CAF App (C Auto Formal): finds lint violations in SystemC/C/C++ code such as arithmetic overflows and out-of-bounds indexing.',
            'Jasper C2RTL App: C/C++ to RTL equivalence checking.',
        ],
        tags: ['C++', 'C', 'SystemC', 'Compilers', 'Static analysis', 'Formal verification'],
    },
    {
        role: 'Software Engineer (part-time, freelance)',
        company: 'Sol (حل)',
        location: 'Hebron',
        start: 'Feb 2025',
        end: 'May 2025',
        points: [
            'Built production-ready desktop apps with React and Electron.',
            'Café management system with order management and cashier workflows, backed by an embedded SQLite database for local processing.',
        ],
        tags: ['React', 'Electron', 'SQLite'],
    },
    {
        role: 'Software Engineering Intern (part-time)',
        company: 'AHL Logics',
        location: 'Hebron',
        start: 'Jan 2024',
        end: 'Sep 2024',
        points: [
            'Built a family-management React Native app for staying connected, managing family events and celebrations, and sending invitations across international families.',
            'Express.js and MongoDB back end.',
        ],
        tags: ['React Native', 'Express.js', 'MongoDB'],
    },
    {
        role: 'Full-Stack Web Development Trainee',
        company: 'Professional Software Engineering Unit (PSEU) × Sada Intelligence Solutions',
        start: 'Jun 2022',
        end: 'Aug 2023',
        points: [
            'One-year program: HTML, CSS, JavaScript and React on the front end; Node.js, Express.js and MongoDB on the back end.',
            'Worked in agile teams on QPAY and Nutritionist Manager.',
        ],
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Agile'],
    },
];

export default experience;
