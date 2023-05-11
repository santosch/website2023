import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/print',
        },
        sitemap: 'https://sebastian-antosch.de/sitemap.xml',
    };
}