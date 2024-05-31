import { MetadataRoute } from 'next';

const url = process.env.GITHUB_URL ?? 'https://slotruglio.github.io';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${url}/sitemap.xml`,
  };
}
