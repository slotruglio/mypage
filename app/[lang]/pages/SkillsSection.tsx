import ProgressBar from '../components/ProgressBar';

interface Skill {
  name: string;
  level: string;
  icon?: string;
}

interface SkillList {
  [key: string]: {
    title: string;
    texts: Skill[];
  };
}

const levels: { [key: string]: number } = {
  Advanced: 100,
  Intermediate: 75,
  Basic: 50,
  Novice: 25,
};

function SkillWidget({ skill }: { skill: Skill }) {
  return (
    <div className="skill-box flex flex-col rounded-lg bg-white/20 p-2">
      <div className="flex flex-row gap-x-2">
        <p className="font-medium">{skill.name} </p>
        {skill.icon && <i className={skill.icon} />}
      </div>
    </div>
  );
}

export default async function SkillSection({
  id,
  title,
  icon,
  skillsTexts,
}: {
  id: string;
  title: string;
  icon: string;
  skillsTexts: SkillList;
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
      <div className="grid grid-flow-row-dense grid-cols-1 justify-center gap-2 p-4 lg:grid-cols-3">
        {Object.keys(skillsTexts).map((category, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-4 rounded-lg bg-white/5 p-8 backdrop-blur-sm"
          >
            <h2 className="text-lg font-bold text-white md:text-xl">
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
  );
}
