import { Education } from "../../cv/education";
import { Job } from "../../cv/job";
import Jobs from "../Jobs";
import { Language } from "../../cv/language";
import "./CvComponent.scss";
import Languages from "../Languages";
import EducationComponent from "../Education";
import PersonalInfoComponent from "../PersonalInfo";
import PersonalInfo from "../../cv/personalInfo";
import Skill from "../../cv/skill";
import { skills } from "../../cv/Soso";
import SkillList from "../Skills";
import { useEffect } from "react";
export default function CvComponent({ personalInfo,jobs, education, languages }: CvComponentProps) {
    useEffect(()=> {
        document.title=personalInfo.fullName;
    });
    return <div className="cv-component">
        <PersonalInfoComponent personalInfo={personalInfo} />
        <SkillList skills={skills} />
        <EducationComponent education={education} />
        <Languages languages={languages} />
        <Jobs jobs={jobs} />
    </div>
}



interface CvComponentProps {
    personalInfo: PersonalInfo,
    skills: Skill[],
    education: Education[],
    jobs: Job[],
    languages: Language[],
}