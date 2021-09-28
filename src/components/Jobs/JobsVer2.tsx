import { Job, Project } from "../../cv/job";
import "./Jobs.scss";
import PeriodComponent from "../Period";
import Section from "../Section";



export default function Jobs({ jobs }: JobsProps) {
    type projectWithJob = Project & { companyName: string, location: string }
    const projects = jobs.map((job) => {
        const merged = job.projects.reduce(merge);
        return { ...merged, companyName: job.company, location: job.location }
    });




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


function merge(proj1: Project, proj2: Project): Project {
    return {
        period: proj1.period,
        role: proj1.role,
        responsibilities: (proj1.responsibilities ?? []).concat(proj2.responsibilities ?? []),
        stack: (proj1.stack ?? []).concat(proj2.stack ?? []),
        description: <><p>{proj1.description}</p> <p>{proj2.description}</p></>,
        scope: (proj1.scope ?? []).concat(proj2.scope ?? []),
    }
}


interface JobsProps {
    jobs: Job[]
}