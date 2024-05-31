import Link from 'next/link';

interface Description {
  when: string;
  where: string;
  whereLink?: string;
  whereLocation?: string;
  position?: string;
  degree?: string;
  what: string;
  whatLink?: string;
}

function DescriptionWidget<T extends Description>({ desc }: { desc: T }) {
  return (
    <div className="flex flex-col rounded-lg bg-white/5 p-8 backdrop-blur-sm">
      <div className="description-header flex flex-col gap-x-2 sm:items-start md:items-center lg:flex-row">
        <p>{desc.when}. </p>
        {desc.position && <p className="font-bold">{desc.position} </p>}
        {desc.degree && <p className="font-bold">{desc.degree} </p>}
        <p>
          {desc.whereLink ? (
            <Link
              href={desc.whereLink}
              className="app-link"
              target="_blank"
              rel="noreferrer"
            >
              @{desc.where}
            </Link>
          ) : (
            desc.where
          )}
        </p>
        {desc.whereLocation && (
          <span className="text-xs">({desc.whereLocation})</span>
        )}
      </div>
      <div className="description-body flex flex-row sm:p-2 md:p-4">
        <p className="grow">{desc.what}</p>
        {desc.whatLink && (
          <Link
            href={desc.whatLink}
            className="app-link bi bi-box-arrow-up-right"
            target="_blank"
            rel="noreferrer"
          ></Link>
        )}
      </div>
    </div>
  );
}

export default async function TextSection<T extends Description>({
  id,
  title,
  subtitle,
  icon,
  descriptions,
}: {
  id: string;
  title: string;
  subtitle?: string;
  icon?: string;
  descriptions: T[];
}) {
  return (
    <div
      id={id}
      className="flex flex-col justify-center gap-y-4 p-8 md:p-24 lg:h-screen"
    >
      <div className="flex flex-row gap-x-4">
        <i className={icon + 'text-3xl md:text-5xl'} />
        <h1 className="text-3xl font-bold text-white md:text-5xl">{title}</h1>
      </div>
      {subtitle && (
        <h2 className="text-xl font-bold text-white sm:text-start md:text-center md:text-2xl">
          {subtitle}
        </h2>
      )}
      <div className="flex grow flex-col justify-center gap-y-4 p-4">
        {descriptions.map((description, index) => (
          <DescriptionWidget key={index} desc={description} />
        ))}
      </div>
    </div>
  );
}
