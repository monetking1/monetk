export type SiteLink = {
    href: string;
    label: string;
};

export type SiteConfig = {
    name: string;
    title: string;
    description: string;
    siteUrl: string;
    siteBase: string;
    email: string;
    locale: string;
    authorName: string;
    authorRole: string;
    keywords: string[];
    ogImage: string;
    navLinks: SiteLink[];
    extraPages: SiteLink[];
    legalLinks: SiteLink[];
    socialLinks: SiteLink[];
};

const defaultSiteUrl = 'https://writeonlycode.github.io/monetk/';
const envSiteUrl = process.env.SITE_URL ?? process.env.PUBLIC_SITE_URL;
const normalizedSiteUrl = (envSiteUrl || defaultSiteUrl).replace(/\/+$/, '');

const defaultSiteBase = 'monetk';
const envSiteBase = process.env.SITE_BASE ?? process.env.PUBLIC_SITE_BASE;
const normalizedSiteBase = (envSiteBase || defaultSiteBase).replace(/\/+$/, '');

export const siteConfig: SiteConfig = {
    name: 'Monet King',
    title: 'Monet King | Organizations run on unwritten rules. I write them down.',
    description:
        'I make complex things clear — through learning design, strategic communication, and the documentation that organizations actually run on.',
    // Set SITE_URL or PUBLIC_SITE_URL to keep canonicals, robots.txt, and the sitemap aligned in each environment.
    siteUrl: normalizedSiteUrl,
    siteBase: normalizedSiteBase,
    email: 'mk@monetking.com',
    locale: 'en-US',
    authorName: '',
    authorRole: '',
    keywords: [],
    ogImage: '/og-image.svg',
    navLinks: [
        { href: '/work', label: 'Work' },
        { href: '/about', label: 'About' },
        { href: '/resume', label: 'Resume' },
    ],
    extraPages: [
        // { href: 'mailto:mk@monetking.com', label: 'mk@monetking.com' },
        // { href: 'https://www.linkedin.com/in/monetking', label: 'LinkedIn' },
        // { href: '/work/nextpoint', label: 'Case Study' },
        // { href: '/cookies', label: 'Cookies' },
        // { href: '/privacy', label: 'Privacy' },
        // { href: '/terms', label: 'Terms' },
        // { href: '/404', label: '404' },
    ],
    legalLinks: [
        { href: '/cookies', label: 'Cookies' },
        { href: '/privacy', label: 'Privacy' },
        { href: '/terms', label: 'Terms' },
    ],
    socialLinks: [
        { href: 'https://www.linkedin.com/', label: 'LinkedIn' },
    ],
};
