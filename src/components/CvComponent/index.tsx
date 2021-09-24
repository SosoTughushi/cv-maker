import Moment from "react-moment";
import { Education } from "../../cv/education";
import { Job } from "../../cv/job";
import Jobs from "../Jobs";
import { Language } from "../../cv/language";
import "./CvComponent.scss";
import Languages from "../Languages";
import EducationComponent from "../Education";
import PersonalInfoComponent from "../PersonalInfo";
import PersonalInfo from "../../cv/personalInfo";
export default function CvComponent({ personalInfo,jobs, education, languages }: CvComponentProps) {
    return <div className="cv-component">
        <PersonalInfoComponent personalInfo={personalInfo} />
        <EducationComponent education={education} />
        <Languages languages={languages} />
        <Jobs jobs={jobs} />
    </div>
}



interface CvComponentProps {
    personalInfo: PersonalInfo,
    education: Education[],
    jobs: Job[],
    languages: Language[],
}