import { MetadataRoute } from 'next';

const url = process.env.DOMAIN ?? 'https://slotruglio.github.io';
const github_url = process.env.GITHUB_URL ?? 'https://slotruglio.github.io';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: url,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${url}/en`,
          it: `${url}/it`,
        },
      },
    },
    {
      url: github_url,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${github_url}/en`,
          it: `${github_url}/it`,
        },
      },
    },
  ];
}
