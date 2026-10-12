import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebook, FaWhatsapp, FaTelegram } from 'react-icons/fa6';
import type { Profile } from '../types';
import photo from '../assets/self-image.png';

const profile: Profile = {
    name: 'Momin Arafa',
    headline: 'C/C++ Software Engineer @ ASAL/Cadence',
    roles: ['C/C++ software engineer', 'Compiler & static analysis', 'Competitive programmer', 'Problem setter & coach'],
    location: 'Hebron, Palestine',
    email: 'mominarafa@gmail.com',
    summary:
        'I build static-analysis and linting tooling for formal verification at Cadence. ' +
        'ACPC 2022 finalist, problem setter and competitive programming coach.',
    about: [
        "I'm an R&D software engineer at ASAL Technologies (Cadence) on the Jasper C team, part of Jasper Formal Verification. " +
        'I develop an advanced linting tool for SystemC code, built on a custom compiler, and design the lint rules ' +
        "that feed Jasper's formal verification workflow, across the CAF and C2RTL apps.",
        'I graduated in Computer Systems Engineering from Palestine Polytechnic University with high distinction. ' +
        'Before Cadence I shipped desktop, mobile and web apps with React, Electron, React Native, Express and MongoDB.',
        'Competitive programming is where I started: I was an ACPC 2022 finalist. Now I set problems for and coordinate ' +
        "contests like the PPU Collegiate Programming Contest, and coach PPU teams that have qualified for ACPC.",
    ],
    facts: [
        { label: 'Current role', value: 'R&D Software Engineer, ASAL Technologies (Cadence)' },
        { label: 'Focus', value: 'Compilers, static analysis, formal verification' },
        {
            label: 'Education',
            value: "B.Sc. Computer Systems Engineering, Palestine Polytechnic University (2025) · GPA 92.9%, High Distinction, Dean's List all 9 semesters",
        },
        { label: 'Location', value: 'Hebron, Palestine' },
    ],
    photo,
    socials: [
        { label: 'GitHub', href: 'https://github.com/Momen-G-Ar', icon: FaGithub },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/momin-arafa/', icon: FaLinkedinIn },
        { label: 'Instagram', href: 'https://www.instagram.com/momenarafeh/', icon: FaInstagram },
        { label: 'Facebook', href: 'https://www.facebook.com/momenarafeh22/', icon: FaFacebook },
        { label: 'WhatsApp', href: 'https://wa.me/+972597456589', icon: FaWhatsapp },
        { label: 'Telegram', href: 'https://t.me/MominArafa', icon: FaTelegram },
    ],
};

export default profile;
