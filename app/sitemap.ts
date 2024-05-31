import { MetadataRoute } from 'next';

const url = process.env.NEXT_PUBLIC_URL ?? process.env.VERCEL_URL ?? '';

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
  ];
}
