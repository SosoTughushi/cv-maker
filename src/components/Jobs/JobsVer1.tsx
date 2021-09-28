import { Job, Project } from "../../cv/job";
import "./Jobs.scss";
import PeriodComponent from "../Period";
import Section from "../Section";



export default function Jobs({ jobs }: JobsProps) {
    type projectWithJob = Project & { companyName: string, location: string }
    const projects = jobs
        .flatMap(job =>
            job.projects.map(project => ({ ...project, companyName: job.company, location: job.location })));

    function renderTitle(project: projectWithJob) {
        return <div className="job-title">
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
        </div>
    }

    function renderContent(project: projectWithJob) {
        return <div className="job-content">
            <p className="description">
                {project.description}
            </p>
            {project.scope && project.scope.length > 0 && (<p className="scope-list">
                <span>Scope: </span>
                {project.scope.map(scope => <div>* {scope}</div>)}
            </p>)}
            {project.responsibilities && project.responsibilities.length > 0 && <p className="responsibilities">
                <span>Responsibilities:</span>
                {project.responsibilities.map(resp => <div>* {resp}</div>)}
            </p>}
            {project.stack.length > 0 && <p className="stack">
                <span>Stack:</span>  {project.stack.map(stack => <span className="stack-item">{stack}, </span>)}
            </p>}

        </div>
    }

    return <div className="jobs">
        <Section title="Work Experience">
            {projects.map(project => <div className="job-item">
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <PeriodComponent period={project.period} />
                    </div>
                    <div className="col-md-8 col-sm-8">
                        {project.description ? <Section title={renderTitle(project)}>
                            {renderContent(project)}
                        </Section> : renderTitle(project)}

                    </div>
                </div>
            </div>)}

        </Section>


    </div>

}


interface JobsProps {
    jobs: Job[]
}