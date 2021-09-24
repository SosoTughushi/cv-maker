import Skill from "../../cv/skill";
import Section from "../Section";
import SkillComponent from "./Skill";
import "./Skills.scss";

export default function SkillList({ skills }: SkillListProps) {
    return <div className="skills">
        <Section title="Job Related Skills">
            <div className="skills-content">
                {skills.map(skill => <div className="skill-item"><SkillComponent skill={skill} /></div>)}
            </div>
        </Section>
    </div>
}

interface SkillListProps {
    skills: Skill[]
}