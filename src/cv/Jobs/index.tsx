import { Job } from "../job";
import Moment from "react-moment";
import "./Jobs.scss";
import Collapsable from "../../Collapsable";


export default function Jobs({ jobs }: JobsProps) {
    const projects = jobs
        .flatMap(job =>
            job.projects.map(project => ({ ...project, companyName: job.company, location: job.location })));



    return <div className="jobs">
        <Collapsable collapsedContent={<div className="section-title">Work Experience</div>}
        >{projects.map(project => <div className="job-item">
            <div className="row">
                <div className="col-md-4">
                    <div className="period">
                        <Moment format="MMM YYYY">{project.period.dateFrom}</Moment>
                        -
                        {project.period.dateTo ? <Moment format="MMM YYYY">{project.period.dateTo}</Moment> : "Today"}
                    </div>
                </div>
                <div className="col-md-8">
                    <Collapsable
                        collapsedContent={
                            <div className="job-title">
                                <div className="role">
                                    {project.role}
                                </div>
                                <div>
                                    <div className="company-name">
                                        {project.companyName}
                                    </div>
                                    <div className="location">
                                        (<span>{project.location}</span>)
                                    </div>
                                </div>
                            </div>}
                    >
                        <div className="job-content">
                            <div className="description">
                                {project.description}
                            </div>
                            {project.scope && project.scope.length > 0 && (<div className="scope-list">
                                <b>Scope:</b>
                                {project.scope.map(scope => <div>* {scope}</div>)}
                            </div>)}
                            {project.stack.length > 0 && <div className="stack">
                                <b>Stack:</b>  {project.stack.map(stack => <span className="stack-item">{stack}, </span>)}
                            </div>}
                            {project.responsibilities && project.responsibilities.length > 0 && <div className="responsibilities">
                                <b>Responsibilities:</b>
                                {project.responsibilities.map(resp => <div>* {resp}</div>)}
                            </div>}

                        </div>
                    </Collapsable>
                </div>
            </div>
        </div>)}
        </Collapsable>


    </div>

}


interface JobsProps {
    jobs: Job[]
}