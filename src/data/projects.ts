import type { ImageMetadata } from 'astro';

import onboardingTrackerImage from '../assets/images/onboarding-tracker.png';
import thePerfectPitchImage from '../assets/images/the-perfect-pitch.png';
import amdocsLearningAdvisoryImage from '../assets/images/amdocs-learning-advisory.png';
import recruitmentVideoImage from '../assets/images/recruitment-video.png';
import contentStrategyImage from '../assets/images/content-strategy.jpg';
// import bpLeadershipProgramImage from '../assets/images/bp-leadership-program.jpg';
import bpLeadershipProgramImage from '../assets/images/bp-leadership-program-brand.jpg';
import gmtProgramImage from '../assets/images/gmt-program.png';
import e2EmpoweredImage from '../assets/images/e2-empowered.png';
import forgovSolutionsImage from '../assets/images/forgov-solutions.png';
import teslaWfmSopImage from '../assets/images/tesla-wfm-sop.avif';
import evergreeneGroupPrImage from '../assets/images/evergreene-group-pr.png';
import jerrilynBlackImage from '../assets/images/jerrilyn-black.png';

export type Project = {
    name: string;
    title: string;
    description: string;
    background: 'lime' | 'cyan' | 'lavender' | 'mint';
    variant: 'desktop' | 'split' | 'mobile' | 'board';
    href: string;
    image: ImageMetadata;
    alt: string;
    imageClass: string;
};

export const workPageSize = 4;

export const projects: Project[] = [
    {
        name: 'To build a system where no system existed',
        title: 'New Hire Onboarding Tracker & Dashboard',
        description: 'No centralized system existed to manage new hire onboarding across pre-arrival, orientation, technical training, and 90-day milestones. Process lived in email threads and individual memory — creating gaps in compliance documentation and missed check-ins',
        background: 'lime',
        variant: 'desktop',
        href: '/work/onboarding-tracker',
        image: onboardingTrackerImage,
        alt: '',
        imageClass: 'project-preview-image',
    },
    {
        name: 'To give experienced professionals a framework for repositioning their expertise',
        title: 'The Perfect Pitch — Resume Workshop for Mid-Career Public Health Professionals',
        description: 'Rising and experienced public health professionals lacked structured guidance for positioning their expertise in a hiring landscape shaped by ATS screening, AI tools, and automation. Generic career resources didn\'t account for their depth of experience or the specific challenges of pivoting within or beyond public health',
        background: 'cyan',
        variant: 'desktop',
        href: '/work/the-perfect-pitch',
        image: thePerfectPitchImage,
        alt: '',
        imageClass: 'project-preview-image',
    },
    {
        name: 'To align learning strategy with business priorities across a global enterprise',
        title: 'Learning Advisory at Amdocs',
        description: 'Business units needed learning solutions aligned to their specific priorities — not generic programs handed down from corporate. The role required operating as an internal consultant to HR and business leaders, diagnosing capability gaps and translating them into targeted learning strategies.',
        background: 'lavender',
        variant: 'desktop',
        href: '/work/amdocs-learning-advisory',
        image: amdocsLearningAdvisoryImage,
        alt: '',
        imageClass: 'project-preview-image',
    },
    {
        name: 'To build global program awareness and showcase talent through video',
        title: 'Corporate Recruitment Video Production',
        description: 'FieldCore\'s Field Engineering Program needed a global awareness campaign to showcase the program and highlight the achievements of the current cohort. The deliverable was a corporate recruitment video requiring full on-site production support.',
        background: 'mint',
        variant: 'desktop',
        href: '/work/recruitment-video',
        image: recruitmentVideoImage,
        alt: '',
        imageClass: 'project-preview-image',
    },
    {
        name: 'To translate campaign issues into narrative content that builds a credible online presence',
        title: 'Content Strategy & Online Engagement',
        description: 'A City Council candidate needed her campaign issues translated into narrative content that would resonate with constituents across social media. The goal was to build a credible online presence and sustain engagement throughout a nine-month campaign cycle.',
        background: 'lime',
        variant: 'desktop',
        href: '/work/content-strategy',
        image: contentStrategyImage,
        alt: '',
        imageClass: 'project-preview-image',
    },
    {
        name: 'To own end-to-end delivery of a flagship executive program with no margin for failure.',
        title: 'Flagship Global Leadership Development Program',
        description: 'bp\'s flagship global senior leadership program ran 30 sessions across Houston and international teams — with executive-level participants and no margin for operational failure. The role demanded someone who could own delivery completely, resolve problems before they reached participants, and make the program better with every session.',
        background: 'lime',
        variant: 'desktop',
        href: '/work/bp-leadership-program',
        image: bpLeadershipProgramImage,
        alt: '',
        imageClass: 'project-preview-image',
    },
    {
        name: 'To build a succession pipeline where none existed',
        title: 'Manager Training Program',
        description: 'The company had no internal pipeline for Manager succession. When leadership vacancies arose, the organization defaulted to reactive external hiring. ',
        background: 'lime',
        variant: 'desktop',
        href: '/work/gmt-program',
        image: gmtProgramImage,
        alt: '',
        imageClass: 'project-preview-image',
    },
    {
        name: 'To design and deliver a career development program for youth in real time',
        title: 'Career Exploration & Restorative Justice Training',
        description: 'E2 EmpowerED needed an instructional designer to build a 4-week Career Exploration and Restorative Justice Training program for youth and young adults ages 16–24 — designed and delivered in real time as the program launched, integrating career development with restorative justice principles, DEI, and mediation training.',
        background: 'lime',
        variant: 'desktop',
        href: '/work/e2-empowered',
        image: e2EmpoweredImage,
        alt: '',
        imageClass: 'project-preview-image',
    },
    {
        name: 'To build a document that could make the case when the client wasn\'t in the room.',
        title: 'Capabilities Statement',
        description: 'Forgov Solutions — a minority-owned IT firm specializing in enterprise infrastructure, cloud, data center, and network security — needed a capabilities statement to pursue federal government contracts. The document had to meet the specific content requirements of government procurement while positioning the firm\'s past performance and differentiators competitively.',
        background: 'lime',
        variant: 'desktop',
        href: '/work/forgov-solutions',
        image: forgovSolutionsImage,
        alt: '',
        imageClass: 'project-preview-image',
    },
    {
        name: 'To document a critical workforce process before it became someone\'s institutional memory',
        title: 'Workforce Management — Worker Assignment SOP',
        description: 'The employee responsible for managing worker access at the customer site left the company. No written process existed. Site access — including badging, SOW assignment, and customer-required training — was at risk of breaking down entirely.',
        background: 'lime',
        variant: 'desktop',
        href: '/work/tesla-wfm-sop',
        image: teslaWfmSopImage,
        alt: '',
        imageClass: 'project-preview-image',
    },
    {
        name: 'A PR professional needed comprehensive editing and proofreading services',
        title: 'Evergreene Group PR — E-Book Editorial Review',
        description: 'The deliverable — Press for Champagne, a comprehensive digital resource for DIY restaurant PR by Ashley Mason-Greene, Founder of Evergreene Group PR — had to meet professional publishing standards while preserving the author\'s voice and delivering clear, actionable content for restaurant entrepreneurs.',
        background: 'lime',
        variant: 'desktop',
        href: '/work/evergreene-group-pr',
        image: evergreeneGroupPrImage,
        alt: '',
        imageClass: 'project-preview-image',
    },
    {
        name: 'A mental health practitioner needed a digital presence',
        title: 'Website Project Management & Content Strategy',
        description: 'A mental health practitioner needed a digital presence that authentically reflected Black’s therapeutic approach while making services accessible to prospective clients seeking mindful, trauma-informed care.',
        background: 'lime',
        variant: 'desktop',
        href: '/work/jerrilyn-black',
        image: jerrilynBlackImage,
        alt: '',
        imageClass: 'project-preview-image',
    },
];
