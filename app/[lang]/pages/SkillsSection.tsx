import ProgressBar from "../components/ProgressBar";

interface Skill {
    name: string;
    level: string;
    icon?: string;
}

interface SkillList {
    [key: string]: {
        title: string;
        texts: Skill[];
    }
}

const levels : {[key: string] : number } = {
    "Advanced": 100,
    "Intermediate": 75,
    "Basic": 50,
    "Novice": 25
}

function SkillWidget({ skill }: { skill: Skill }) {
    return <div className="skill-box bg-white/20 rounded-lg flex flex-col p-2">
        <div className="flex flex-row gap-x-2">
            <p className="font-medium">{skill.name} </p>
            {skill.icon && <i className={skill.icon} />}
        </div>
        
    </div>
}

export default async function SkillSection({ id, title, icon, skillsTexts }: { id: string, title: string, icon: string, skillsTexts: SkillList }) {
    return <div id={id} className="flex flex-col justify-center lg:h-screen p-8 md:p-24 gap-y-4">
        <div className="flex flex-row gap-x-4">
            <i className={icon + " text-3xl md:text-5xl"} />
            <h1 className="text-3xl md:text-5xl font-bold text-white">
                {title}
            </h1>
        </div>
        <div className=" grid grid-flow-row-dense grid-cols-1 lg:grid-cols-3 p-4 gap-2 justify-center">
            {Object.keys(skillsTexts).map((category, index) => (
                <div key={index} className="flex flex-col backdrop-blur-sm bg-white/5 rounded-lg p-8 gap-y-4">
                    <h2 className="text-lg md:text-xl font-bold text-white">
                        {skillsTexts[category].title}
                    </h2>
                    <div className="flex flex-row flex-wrap gap-2">
                        {skillsTexts[category].texts.map((skill, index) => (
                            <SkillWidget key={index} skill={skill} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
}