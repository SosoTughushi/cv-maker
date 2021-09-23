import { Education } from "../../cv/education";
import "./Education.scss";
import Collapsable from "../Collapsable";
import PeriodComponent from "../Period";

export default function EducationComponent({ education }: EducationProps) {
    return <div className="education">
        <div className="education-content">
            <Collapsable collapsedContent={<div className="education-title">Education</div>}>
                {education.map(edu => <div className="education-item">
                    <div className="row">
                        <div className="col-md-4">
                            <PeriodComponent period={edu.period} />
                        </div>
                        <div className="col-md-8">
                            <div className="degree">
                                {edu.faculty} - {edu.degree}
                            </div>
                            <span>
                                <span className="university">{edu.university}</span> <span className="location">({edu.location})</span>
                            </span>
                        </div>
                    </div>
                </div>)}
            </Collapsable>
        </div>
    </div>
}
interface EducationProps {
    education: Education[]
}