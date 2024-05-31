import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { i18n, type Locale } from '../../i18n-config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_URL ?? 'https://slotruglio.github.io',
  ),
  title: 'Samuele Lo Truglio - Website',
  description: 'Personal Website of Samuele Lo Truglio',
  keywords: process.env.KEYWORDS ?? '',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_URL ?? 'https://slotruglio.github.io',
    siteName: 'Samuele Lo Truglio',
    title: 'Samuele Lo Truglio',
    description: 'Personal Website of Samuele Lo Truglio',
    images: '/og-image.png',
  },
  twitter: {
    description: 'Personal Website of Samuele Lo Truglio',
    title: 'Samuele Lo Truglio',
    site: '@slotruglio',
    card: 'summary',
    images: '/og-image.png',
  },

  appleWebApp: {
    capable: true,
    title: 'Samuele Lo Truglio',
    statusBarStyle: 'black-translucent',
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      it: '/it',
    },
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
