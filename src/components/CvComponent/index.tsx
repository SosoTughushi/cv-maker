import Moment from "react-moment";
import { Education } from "../../cv/education";
import { Job } from "../../cv/job";
import Jobs from "../Jobs";
import { Language } from "../../cv/language";
import "./CvComponent.scss";
import Languages from "../Languages";

export default function CvComponent({ jobs, education, languages }: CvComponentProps) {
    return <div className="cv-component">
        <Languages languages={languages} />
        <Jobs jobs={jobs} />
    </div>
}



interface CvComponentProps {
    education: Education[],
    jobs: Job[],
    languages: Language[]
}