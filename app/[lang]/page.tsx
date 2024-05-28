import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <main className="bg-binary-pattern bg-fixed min-h-screen">
      <div id="first-section" className="flex items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-center text-white">
          {dictionary.hello}
        </h1>
      </div>
      <div id="second-section" className="flex items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-center text-white">
          {dictionary.hello}
        </h1>
      </div>
    </main>
  );
}
