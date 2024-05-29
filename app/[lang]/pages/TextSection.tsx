import Link from "next/link";

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
    return <div className="flex flex-col backdrop-blur-sm bg-white/5 rounded-lg p-8">
        <div className="description-header flex flex-col lg:flex-row items-center gap-x-2">
            <p>{desc.when}. </p>
            {desc.position && <p className="font-bold">{desc.position} </p>}
            {desc.degree && <p className="font-bold">{desc.degree} </p>}
            <p>{desc.whereLink ? <Link href={desc.whereLink} className="app-link" target="_blank" rel="noreferrer">@{desc.where}</Link> : desc.where}</p>
            {desc.whereLocation && <span className="text-xs">({desc.whereLocation})</span>}
        </div>
        <div className="description-body flex flex-row p-4">
            <p className="grow">{desc.what}</p>
            {desc.whatLink && <Link href={desc.whatLink} className="app-link bi bi-box-arrow-up-right" target="_blank" rel="noreferrer"></Link>}
        </div>
    </div>
}

export default async function TextSection<T extends Description>({ id, title, subtitle, icon, descriptions }: { id: string, title: string, subtitle?: string, icon?: string, descriptions: T[] }) {
    return <div id={id} className="flex flex-col justify-center h-screen p-2 md:p-24 gap-y-4">
        <div className="flex flex-row gap-x-4">
            <i className={icon + " text-3xl md:text-5xl"} />
            <h1 className="text-3xl md:text-5xl font-bold text-white">
                {title}
            </h1>
        </div>
        {subtitle && <h2 className="text-xl md:text-2xl font-bold text-center text-white">
            {subtitle}</h2>}
        <div className="grow flex flex-col p-4 gap-y-4 justify-center">
            {descriptions.map((description, index) => (
                <DescriptionWidget key={index} desc={description} />
            ))}
        </div>
    </div>
}