import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://sebastian-antosch.de',
            lastModified: new Date(),
        },
        {
            url: 'https://sebastian-antosch.de/impressum',
            lastModified: new Date(),
        },
        {
            url: 'https://sebastian-antosch.de/datenschutz',
            lastModified: new Date(),
        },
    ];
}