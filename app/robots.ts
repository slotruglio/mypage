import { MetadataRoute } from 'next';

const url = process.env.NEXT_PUBLIC_URL ?? process.env.VERCEL_URL;

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
