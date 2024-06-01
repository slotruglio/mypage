import 'server-only';
import type { Locale } from './i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  it: () => import('./dictionaries/it.json').then((module) => module.default),
};

// Update with online resources if available
if (process.env.BLOB_URL && process.env.NODE_ENV === 'production') {
  dictionaries.en = async () => {
    const response = await fetch(
      `${process.env.BLOB_URL}/dictionaries/en.json`,
    );
    return response.json();
  };
  dictionaries.it = async () => {
    const response = await fetch(
      `${process.env.BLOB_URL}/dictionaries/it.json`,
    );
    return response.json();
  };
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale as keyof typeof dictionaries]?.() ?? dictionaries.en();
