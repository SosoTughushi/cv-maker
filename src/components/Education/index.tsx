import { Education } from "../../cv/education";
import "./Education.scss";
import Collapsable from "../Collapsable";
import PeriodComponent from "../Period";
import Section from "../Section";

export default function EducationComponent({ education }: EducationProps) {
    return <div className="education">
        <Section title="Education">
            <div className="education-content">
                {education.map(edu => <div className="education-item">
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <PeriodComponent period={edu.period} />
                        </div>
                        <div className="col-md-8 col-sm-8">
                            <div className="degree">
                                {edu.faculty} - {edu.degree}
                            </div>
                            <span>
                                <span className="university">{edu.university}</span> <span className="location">({edu.location})</span>
                            </span>
                        </div>
                    </div>
                </div>)}
            </div>
        </Section>
    </div>
}
interface EducationProps {
    education: Education[]
}