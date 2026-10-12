import type { IconType } from 'react-icons';

export interface SocialLink {
    label: string;
    href: string;
    icon: IconType;
}

export interface Profile {
    name: string;
    headline: string;
    roles: string[];
    location: string;
    email: string;
    summary: string;
    about: string[];
    facts: { label: string; value: string; }[];
    photo: string;
    socials: SocialLink[];
}

export interface Experience {
    role: string;
    company: string;
    location?: string;
    start: string;
    end: string;
    points: string[];
    tags: string[];
}

export interface Project {
    title: string;
    period: string;
    description: string;
    tags: string[];
    links?: { label: string; href: string; }[];
}

export interface ContestResult {
    contest: string;
    year: string;
    result: string;
    detail?: string;
}

export interface Activity {
    title: string;
    date: string;
    detail?: string;
}

export interface SkillGroup {
    name: string;
    skills: string[];
}
