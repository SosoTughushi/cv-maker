import Skill from "../../cv/skill";

export default function SkillComponent({ skill }: SkillProps) {
    return <div className="skill">
        {skill.skill}
        {skill.subskills && <div className="subskills">
            {skill.subskills.map(subskill => <div className="subskill">* {subskill}</div>)}
        </div>}

    </div>
}

interface SkillProps {
    skill: Skill;
}